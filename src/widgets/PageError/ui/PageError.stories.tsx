import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { PageError } from 'widgets/PageError/ui/PageError';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof PageError> = {
    title: 'wigets/PageError',
    component: PageError,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Normal)],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)],
};
