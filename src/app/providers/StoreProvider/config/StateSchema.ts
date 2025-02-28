import { CounterShema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterShema;
    user: UserSchema;
    loginForm: LoginSchema;
}
