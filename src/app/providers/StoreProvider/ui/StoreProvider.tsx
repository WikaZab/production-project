import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

export interface StoreProviderProps {
    children? : ReactNode;
    initialState?: DeepPartial <StateSchema>;
    asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncRedusers }: StoreProviderProps) => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncRedusers as ReducersMapObject<StateSchema>
    );

    return (
        // Redux store- хранилище данных
        <Provider store={store}>
            {children}
        </Provider>
    );
};
