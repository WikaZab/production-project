import type {Preview, ReactRenderer} from "@storybook/react";
import 'app/styles/index.scss';
import {Theme} from "../../src/app/providers/ThemeProvider";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import {withThemeByClassName} from "@storybook/addon-themes";


export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
//способ добавления декоратора ИЛИ как ниже можно
// export default {
//   decorators: [RouterDecorator],
// };

// это для добавления аддона на менюшку с переключением темы глобально
export const decorators = [
  withThemeByClassName<ReactRenderer>({
    themes: {
      light: 'app light_theme',
      dark: 'app dark_theme',
    },
    defaultTheme: 'light',
  }),
    // это роуты чтоб работали везде
    RouterDecorator,
];
//это пуговка переключатель
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'светлая' },
        { value: 'dark', icon: 'circle', title: 'темная' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

