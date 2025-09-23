import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.LIST
    } = props;
    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.LATTICE ? 9 : 3)
        .fill(0)
        .map((index, item) => (
            <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
        ));

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                { getSkeletons(view)}
            </div>
        );
    }
    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} className={cls.card} article={article} view={view} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
