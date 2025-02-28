import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,

    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'hjh123' }
    })],
};
export const WithError: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'hjh123', error: 'Error' }
    })],
};
export const WithLoading: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { isLoading: true }
    })],
};
