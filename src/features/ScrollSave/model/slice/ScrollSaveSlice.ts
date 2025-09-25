import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSave } from '../types/ScrollSave';

const initialState: ScrollSave = {
    scroll: {},
};
export const ScrollSaveSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    }
});
export const { actions: scrollSaveActions } = ScrollSaveSlice;
export const { reducer: scrollSaveReducer } = ScrollSaveSlice;
