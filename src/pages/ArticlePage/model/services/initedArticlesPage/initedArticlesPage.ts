import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/ArticlesPageSelector';
import { articlesPageActions } from '../../slice/ArticlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initedArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initedArticlesPage',
    async (_, thunkAPI) => {
        const _inited = getArticlesPageInited(thunkAPI.getState());

        if (!_inited) {
            thunkAPI.dispatch(articlesPageActions.initialState());
            thunkAPI.dispatch(fetchArticlesList({
                page: 1
            }));
        }
    },
);
