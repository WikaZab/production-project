import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,

    argTypes: {
        style: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        to: '/',
    }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Butt',
        theme: AppLinkTheme.PRIMARY,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
export const Red: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.RED,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
