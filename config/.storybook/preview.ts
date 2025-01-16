import type { Preview } from "@storybook/react";
import 'app/styles/index.scss';

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
