import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileShema } from '../types/profile';

const initialState: ProfileShema = {
    error: undefined,
    isLoading: false,
    readonly: true,
    data: undefined,
};
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:
        {}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
