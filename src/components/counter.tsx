import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const[count, setCount] = useState(0);
    const Inc = () =>{setCount(count+1)};
    const Dec = () =>{setCount(count-1)};
    return (
        <div className={classes.button}>
            <button onClick={Inc}>increment</button>
            <button onClick={Dec}>decrement</button>
            <div>{count}</div>
        </div>
    );
};

