import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Text } from 'shared/ui/Text/Text';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: <Text title="Title" text="Component card" />
    },
};
