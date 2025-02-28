import { createContext } from 'react';

export enum Theme {
    Normal = 'light_theme',
    Dark = 'dark_theme',
}

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void,

}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
