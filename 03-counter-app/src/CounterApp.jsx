import { useState } from 'React';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    function handleAdd(event) {
        console.log('+1', event);
        setCounter(counter + 1);
    };

    function handleMin(event) {
        console.log('-1', event);
        setCounter(counter - 1);
    };

    function handleReset(event) {
        console.log('0', event);
        setCounter(value);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleMin}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}