import { CounterShema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterShema;
    user: UserSchema;
    loginForm?: LoginSchema;
}

export type StateShemaKey = keyof StateSchema;

export interface ReduserManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateShemaKey, reducer: Reducer) => void;
    remove:(key: StateShemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReduserManager;
}
