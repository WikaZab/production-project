import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData, User, userActions } from 'entities/User';
import i18n from 'i18next';
import { Comment } from 'entities/Comment';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/ArticleDetailsSelector';
import { fetchCommentByArticleId } from 'pages/ArticleDetailsPage';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            extra, dispatch, rejectWithValue, getState
        } = thunkAPI;
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }
        try {
            const response = await thunkAPI.extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }
            dispatch(fetchCommentByArticleId(article.id));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(i18n.t('Не удалось отправить коментарий'));
        }
    },
);
