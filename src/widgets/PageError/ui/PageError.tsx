import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const PageError = ({ className }: ErrorPageProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>Произошла непредвиденная ошибка</p>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={reloadPage}>
                Обновить страницу
            </Button>
        </div>
    );
};
