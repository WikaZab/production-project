import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { fetchProfileData } from 'entities/Profile';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {
    fetchCommentByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from '../../model/selectors/comments/coments';

interface ArticleDetailsPageProps {
    className?: string;
}
const reducer: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSendComment = useCallback((text) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });
    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button onClick={onBackToList}>
                    {t('Назад к списку...')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    className={cls.commentTitle}
                    title={t('Коментарии')}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
