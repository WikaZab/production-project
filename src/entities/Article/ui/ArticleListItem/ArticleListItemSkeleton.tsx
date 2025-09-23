import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton className={cls.username} height={16} width={150} />
                        <Skeleton className={cls.data} height={16} width={150} />
                    </div>
                    <Skeleton className={cls.title} width="100%" height={24} />
                    <Skeleton className={cls.img} width="100%" height={200} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card
                className={cls.card}
            >
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} width={200} height={200} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={100} height={16} className={cls.types} />
                </div>
                <Skeleton className={cls.title} width={150} height={16} />
            </Card>
        </div>
    );
});
