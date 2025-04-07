import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная')}
        </div>
    );
});

export default MainPage;
