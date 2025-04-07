import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/LightIcon.svg';
import DarkIcon from 'shared/assets/icons/DarkIcon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className? : string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
                {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
            </Button>
        </div>
    );
});
