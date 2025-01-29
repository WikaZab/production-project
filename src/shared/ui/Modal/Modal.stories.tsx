import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum ullamco Laboris Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor в осуждении за сладострастие velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ocaecat cupidatat not proident, sunt in culpa qui officia deserunt mollit anim id est Laborum'
    },
};
