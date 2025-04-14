import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,

    argTypes: {
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'укажите зачение',
        options: [
            { value: '123', content: 'первый пункт' },
            { value: '1234', content: 'второй пункт' },
        ]

    },
};

export const Clear: Story = {
    args: {
        label: 'Text',
    },
    // decorators: [ThemeDecorator(Theme.Dark)],
};
