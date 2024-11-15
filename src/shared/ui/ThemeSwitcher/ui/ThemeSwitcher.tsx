import {classNames} from "shared/lib/classNames/classNames";
import cls from './TemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/LightIcon.svg';
import DarkIcon from 'shared/assets/icons/DarkIcon.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className? : string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const{theme, toggleTheme} = useTheme()
    return (
        <div className= {classNames(cls.ThemeSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
                {theme === Theme.Dark? <DarkIcon/> : <LightIcon/>}
            </Button>
        </div>
    );
};


