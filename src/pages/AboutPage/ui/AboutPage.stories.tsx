import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from 'pages/AboutPage/ui/AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.Normal)],
};

export const Dark: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.Dark)],
};
