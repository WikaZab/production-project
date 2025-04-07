import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import { StateSchema, ReduxStoreWithManager } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
};
