import { counterActions, counterReducer, counterSlice } from 'entities/Counter/model/slice/counterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { CounterShema } from 'entities/Counter';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterShema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterShema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
