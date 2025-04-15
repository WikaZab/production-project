import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Edit: Story = {
    args: {},
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Armenia,
                lastname: 'ulbi tv',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
            },
        },
    })],
};

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
    // decorators: [ThemeDecorator(Theme.Dark)],
};
