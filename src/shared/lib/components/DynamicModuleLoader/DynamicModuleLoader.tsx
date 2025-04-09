import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StateShemaKey
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [keyname in StateShemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([keyname, reducer]) => {
            store.reducerManager.add(keyname as StateShemaKey, reducer);
            dispatch({ type: `@INIT ${keyname} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([keyname, reducer]) => {
                    store.reducerManager.remove(keyname as StateShemaKey);
                    dispatch({ type: `@DESTROY ${keyname} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};
