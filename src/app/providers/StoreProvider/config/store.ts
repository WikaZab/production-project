import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reduserManager';

export function createReduxStore(initialState?: StateSchema) {
    const rootReduser: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    const reduserManager = createReducerManager(rootReduser);
    const store = configureStore<StateSchema>({
        reducer: reduserManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.reducerManager = reduserManager;
    return store;
}
