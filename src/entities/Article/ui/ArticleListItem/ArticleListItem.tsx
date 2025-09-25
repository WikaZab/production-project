import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from 'entities/Article';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
    // const [isHover, bindHover] = useHover();
    // console.log(isHover);
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, (article.id)]);
    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.id} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.data} />
                    </div>
                    <div />
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.BACKGROUND_INVERTED}
                            onClick={onOpenArticle}
                        >
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        // {...bindHover} добавим в див и в нем появятся эти две функции ховер
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card
                className={cls.card}
                onClick={onOpenArticle}
            >
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.data} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
