import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Counter />
            <BugButton />
            {t('Главная')}
        </div>
    );
};

export default MainPage;
