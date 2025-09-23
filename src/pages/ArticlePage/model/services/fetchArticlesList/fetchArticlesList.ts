import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesPage = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticlesPage',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                }
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(i18n.t('error'));
        }
    },
);
