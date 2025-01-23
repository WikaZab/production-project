import type {Preview, ReactRenderer} from "@storybook/react";
import 'app/styles/index.scss';
import {withThemeByClassName} from "@storybook/addon-themes";
import {ThemeDecorator} from "./storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";


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
// export default {
//   decorators: [ThemeDecorator(Theme.Normal)],
// };

export const decorators = [
  withThemeByClassName<ReactRenderer>({
    themes: {
      light: 'app normal',
      dark: 'app dark',
    },
    defaultTheme: 'app normal'
  }),
];

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

