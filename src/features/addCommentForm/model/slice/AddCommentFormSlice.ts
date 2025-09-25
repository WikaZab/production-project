import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddComponentFormSchema } from '../types/AddComponentForm';

const initialState: AddComponentFormSchema = {
    text: '',
};
export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },

    },
});
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
