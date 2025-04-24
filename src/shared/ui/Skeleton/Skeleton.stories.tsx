import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};
export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
export const Green: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.Green)]
};
export const GreenCircle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.Green)]
};
