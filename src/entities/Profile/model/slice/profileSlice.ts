import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUserName/model/servises/loginByUsername/loginByUsername';
import { fetchProfileData } from 'entities/Profile';
import { Profile, ProfileShema } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfiledata';

const initialState: ProfileShema = {
    error: undefined,
    isLoading: false,
    readonly: true,
    data: undefined,
    form: undefined,
};
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        updateProfile: (state, action:PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        }
    },
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
                    state.form = action.payload;
                }
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                updateProfileData.fulfilled,
                (
                    state,
                    action: PayloadAction<Profile>
                ) => {
                    state.isLoading = false;
                    // при успешной загрузке загружаем все в стейт
                    state.data = action.payload;
                    state.form = action.payload;
                    state.readonly = true;
                }
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
