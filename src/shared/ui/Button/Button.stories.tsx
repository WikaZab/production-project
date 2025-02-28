import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,

    argTypes: {
        style: {
            backgroundColor: { control: 'color' },
        },
    },
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Butt',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
    // decorators: [ThemeDecorator(Theme.Dark)],
};
export const Outlined: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
    // decorators: [ThemeDecorator(Theme.Dark)],
};
export const OutlineSizeL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
export const OutlineSizeXL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
export const BackgroundTheme: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
export const Disabled: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
    // decorators: [ThemeDecorator(Theme.Normal)],
};
