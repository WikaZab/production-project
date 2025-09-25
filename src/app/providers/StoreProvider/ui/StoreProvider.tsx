import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export interface StoreProviderProps {
    children? : ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({
    children,
    initialState,
    asyncReducers
}: StoreProviderProps) => {
    // передаем ф-ю в фун-ю создания стора, чтобы добавить в экстра аргумент фанка
    // const navigate = useNavigate();
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate,
    );

    return (
        // Redux store- хранилище данных
        <Provider store={store}>
            {children}
        </Provider>
    );
};
