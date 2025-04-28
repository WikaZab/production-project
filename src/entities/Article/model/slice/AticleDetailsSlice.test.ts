// import { ProfileSchema } from 'entities/Profile';
// import { articleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailsSlice';
// import { ArticleDetailsSchema } from 'entities/Article';
// import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
//
// describe('profileSlice.test', () => {
//     const data = {
//         id: '1',
//         title: 'string',
//         subtitle: 'string',
//         img: 'string',
//         views: 123,
//         createdAt: 'string',
//     };
//     test('test update profile service pending', () => {
//         const state: DeepPartial<ArticleDetailsSchema> = {
//             isLoading: false,
//             error: undefined,
//         };
//         expect(articleDetailsReducer(
//             state as ArticleDetailsSchema,
//             fetchArticleById.pending,
//         )).toEqual({
//             isLoading: true,
//             error: undefined,
//         });
//     });
//
//     test('test update profile service fullfiled', () => {
//         const state: DeepPartial<ArticleDetailsSchema> = {
//             isLoading: true,
//         };
//
//         expect(articleDetailsReducer(
//             state as ArticleDetailsSchema,
//             fetchArticleById.fulfilled(data, 'articleId', ''),
//         )).toEqual({
//             isLoading: false,
//             data,
//         });
//     });
// });
