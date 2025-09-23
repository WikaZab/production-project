import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/3b2758ad5492a76b578f7ee072e4e894.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'ulbitv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
            avatar,
        }
    },
};

export const WithError: Story = {
    args: { error: 'true' },
};

export const Loading: Story = {
    args: { isLoading: true },
};
