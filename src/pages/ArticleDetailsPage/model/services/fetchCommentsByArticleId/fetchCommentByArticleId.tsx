import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articleDetailsPage/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        if (!articleId) {
            return thunkAPI.rejectWithValue('error');
        }
        try {
            const response = await thunkAPI.extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
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
