import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'shared/CommentList',
    component: CommentList,

    argTypes: {
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
    },
};
