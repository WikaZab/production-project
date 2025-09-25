import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlePage/model/selectors/ArticlesPageSelector';

interface FetchArticlesListProps {
    page?: number,
}
export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesPage',
    async (props, thunkAPI) => {
        const {
            page = 1
        } = props;
        const limit = getArticlesPageLimit(thunkAPI.getState());
        try {
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
