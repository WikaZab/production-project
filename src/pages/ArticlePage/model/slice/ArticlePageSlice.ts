import { createEntityAdapter, createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticlesPage } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.LATTICE,
        page: 1,
        hasMore: true
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initialState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 4 : 9;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesPage.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticlesPage.fulfilled,
                (
                    state,
                    action: PayloadAction<Article[]>
                ) => {
                    state.isLoading = false;
                    articlesAdapter.setMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                }
            )
            .addCase(fetchArticlesPage.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },

});
export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlePageSlice;
