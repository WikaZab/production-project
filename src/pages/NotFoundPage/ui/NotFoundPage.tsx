import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NodFoundPageProps {
    className? : string;
}

export const NotFoundPage = memo(({ className }: NodFoundPageProps) => {
    const { t, i18n } = useTranslation();
    return (
        <Page className={classNames(cls.NodFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
});
