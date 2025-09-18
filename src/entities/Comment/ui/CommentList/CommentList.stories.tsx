import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,

    argTypes: {
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Comment first',
                user: {
                    id: '2',
                    username: 'Wika',
                    avatar: 'string',
                },
            },
            {
                id: '2',
                text: 'Comment second',
                user: {
                    id: '1',
                    username: 'Pavel',
                    avatar: 'string',
                },
            },
        ],
        isLoading: false,
    },
};

export const isLoading: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Comment first',
                user: {
                    id: '2',
                    username: 'Wika',
                    avatar: 'string',
                },
            },
            {
                id: '2',
                text: 'Comment second',
                user: {
                    id: '1',
                    username: 'Pavel',
                    avatar: 'string',
                },
            },
        ],
        isLoading: true,
    },
};
