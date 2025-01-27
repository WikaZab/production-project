import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'wigets/Navbar',
    component: Navbar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.Normal)],
};

export const Dark: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.Dark)],
};
