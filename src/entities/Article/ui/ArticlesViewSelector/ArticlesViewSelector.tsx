import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import ListIcon from 'shared/assets/icons/ArticlesList.svg';
import LatticeIcon from 'shared/assets/icons/ArticlesLattice.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticlesViewSelector.module.scss';

interface ArticlesViewSelectorProps {
    className? : string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: ListIcon
    },
    {
        view: ArticleView.LATTICE,
        icon: LatticeIcon
    }
];

export const ArticlesViewSelector = ({ className, view, onViewClick }: ArticlesViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticlesViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                    />
                </Button>
            ))}
            ;
        </div>
    );
};
