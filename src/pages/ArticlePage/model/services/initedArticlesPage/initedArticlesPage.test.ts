import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initedArticlesPage } from './initedArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initedArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initedArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                limit: 5,
                _inited: false
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });
    test('initedArticlesPage not called', async () => {
        const thunk = new TestAsyncThunk(initedArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                limit: 5,
                _inited: true
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
