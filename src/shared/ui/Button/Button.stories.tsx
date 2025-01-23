import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import 'app/styles/index.scss';

import { Button, ThemeButton } from './Button';

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
        title: 'test',
        type: 'button',
        style: {
            backgroundColor: 'red',
            padding: '20px',
        }
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR

    },
};
export const Outlined: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
};
