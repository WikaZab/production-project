import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Article, ArticlesViewSelector, ArticleView } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/ArticlePageSlice';
import cls from './ArticlePage.module.scss';
import {
    getArticlesPageError, getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPageNum,
    getArticlesPageView
} from '../../model/selectors/ArticlesPageSelector';

interface ArticlePageProps {
    className?: string;
}
const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initialState());
        dispatch(fetchArticlesList({
            page: 1
        }));
    });
    const onChangeView = useCallback((view) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, {}, [className])}>

                <ArticlesViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    );
};
export default memo(ArticlePage);
