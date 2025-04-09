import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import AboutPage from 'pages/AboutPage/ui/AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
