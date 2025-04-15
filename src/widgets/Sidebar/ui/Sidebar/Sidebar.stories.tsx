import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'wigets/Sidebar',
    component: Sidebar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
    decorators: [
        // ThemeDecorator(Theme.Normal),
        StoreDecorator({
            user: { authData: {} }
        })
    ]
};

// export const Dark: Story = {
//     args: {},
// decorators: [ThemeDecorator(Theme.Dark)],
// };

export const NoAuth: Story = {
    args: {},
    decorators: [
        // ThemeDecorator(Theme.Dark),
        StoreDecorator({
            user: {}
        })
    ]
};
