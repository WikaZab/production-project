import { StateSchema } from 'app/providers/StoreProvider';

export const getUserinited = (state: StateSchema) => state.user._inited;
