import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // устанавливаем данные с сервера
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        // если закр стр то данные при откр достаем из сторедж
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        // очищаем сторедж при закрытии
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        }
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
