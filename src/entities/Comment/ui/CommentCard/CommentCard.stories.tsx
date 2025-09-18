import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {
        comment: {
            id: '2',
            text: 'Comment second',
            user: {
                id: '1',
                username: 'Pavel',
                avatar: 'string',
            },
        },
        isLoading: false,
    },
};
export const isLoading: Story = {
    args: {
        comment: {
            id: '2',
            text: 'Comment second',
            user: {
                id: '1',
                username: 'Pavel',
                avatar: 'string',
            },
        },
        isLoading: true,
    },
};
