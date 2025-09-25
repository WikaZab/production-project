import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticlesViewSelector } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/ArticlePageSlice';
import cls from './ArticlePage.module.scss';
import {
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/ArticlesPageSelector';
import { initedArticlesPage } from '../../model/services/initedArticlesPage/initedArticlesPage';

interface ArticlePageProps {
    className?: string;
}
const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    // подгрузка статей последующих страниц
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    // первая загрузка первой страницы инициализация
    useInitialEffect(() => {
        dispatch(initedArticlesPage());
    });
    const onChangeView = useCallback((view) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
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
