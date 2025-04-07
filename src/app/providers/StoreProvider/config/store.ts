import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reduserManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncRedusers?: ReducersMapObject<StateSchema>
) {
    const rootReduser: ReducersMapObject<StateSchema> = {
        ...asyncRedusers,
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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
