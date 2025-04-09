import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUserName/model/servises/loginByUsername/loginByUsername';
import { fetchProfileData } from 'entities/Profile';
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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (
                    state,
                    action: PayloadAction<Profile>
                ) => {
                    state.isLoading = false;
                    // при успешной загрузке загружаем все в стейт
                    state.data = action.payload;
                }
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
