import { StoryFn } from '@storybook/react';
import React from 'react';
import { Theme } from 'src/app/providers/ThemeProvider';

export const ThemeDecorator = (theme:Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
