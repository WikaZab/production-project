import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,

    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        text: 'import {ThemeDecorator} from \'shared/config/storybook/ThemeDecorator/ThemeDecorator\';\n'
            + 'import {Theme} from \'app/providers/ThemeProvider\';\n'
            + 'import {Code} from \'./Code\';\n'
            + '\n'
            + 'const meta: Meta<typeof Code> = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '\n'
            + '    argTypes: {},\n'
            + '    args: {},\n'
            + '};\n'
            + '\n'
            + 'export default meta;\n',
    },
};
