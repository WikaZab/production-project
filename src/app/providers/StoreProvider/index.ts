import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import {
    StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};
