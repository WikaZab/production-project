import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlePage from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
    title: 'shared/ArticlePage',
    component: ArticlePage,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Primary: Story = {
    args: {},
};
