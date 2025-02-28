import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'wigets/Navbar',
    component: Navbar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'hjh123' }
    })]
    // decorators: [ThemeDecorator(Theme.Normal)],
};

export const Dark: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'hjh123' }
    })]
    // decorators: [ThemeDecorator(Theme.Dark)],
};
