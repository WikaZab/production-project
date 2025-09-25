import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore, getArticlesPageIsLoading,
    getArticlesPageNum
} from 'pages/ArticlePage/model/selectors/ArticlesPageSelector';
import { articlesPageActions } from 'pages/ArticlePage/model/slice/ArticlePageSlice';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const hasMore = getArticlesPageHasMore(thunkAPI.getState());
        const page = getArticlesPageNum(thunkAPI.getState());
        const isLoading = getArticlesPageIsLoading(thunkAPI.getState());
        if (hasMore && !isLoading) {
            thunkAPI.dispatch(articlesPageActions.setPage(page + 1));
            thunkAPI.dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    },
);
