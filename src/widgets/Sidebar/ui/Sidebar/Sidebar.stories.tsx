import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Sidebar> = {
    title: 'wigets/Sidebar',
    component: Sidebar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.Normal)],
};

export const Dark: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.Dark)],
};
