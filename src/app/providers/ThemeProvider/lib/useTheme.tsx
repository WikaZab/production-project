import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.Dark:
            newTheme = Theme.Normal;
            break;
        case Theme.Normal:
            newTheme = Theme.Green;
            break;
        case Theme.Green:
            newTheme = Theme.Dark;
            break;
        default:
            newTheme = Theme.Normal;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.Normal,
        toggleTheme,
    };
}
