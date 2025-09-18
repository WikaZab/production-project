import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    args: {},
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {

    args: { onSendComment: action('onSendComment') },
    decorators: [StoreDecorator({})],
};
