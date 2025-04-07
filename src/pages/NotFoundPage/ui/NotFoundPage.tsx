import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';

interface NodFoundPageProps {
    className? : string;
}

export const NotFoundPage = memo(({ className }: NodFoundPageProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(cls.NodFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
});
