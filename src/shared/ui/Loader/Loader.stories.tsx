import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from 'shared/ui/Loader/Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.Normal)],
};

export const Dark: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.Dark)],
};
