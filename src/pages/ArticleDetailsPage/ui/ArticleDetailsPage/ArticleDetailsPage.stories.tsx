import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'shared/ArticleDetailsPage',
    component: ArticleDetailsPage,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {
    args: {},
};
