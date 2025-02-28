import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from '../Text/Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Заголовок',
        text: 'тут будет текст',
    },
};
export const OnlyTitle: Story = {
    args: {
        title: 'Заголовок',
    },
};
export const OnlyText: Story = {
    args: {
        text: 'тут будет текст',
    },
};
export const Error: Story = {
    args: {
        title: 'Заголовок',
        text: 'тут будет текст',
        theme: TextTheme.ERROR,
    },
};
