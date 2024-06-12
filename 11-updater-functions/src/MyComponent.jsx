import React, { useState } from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };
    function reset() {setCount(prevCount => 0)};
    function decrement() {
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
    };

    return(
    <div className='counter-container'>
        <div className='counter-display'>{count}</div>
        <div className='btn-container'>
            <button className='btn' onClick={decrement}>Decrease</button>
            <button className='btn' onClick={reset}>Reset</button>
            <button className='btn' onClick={increment}>Increase</button>
        </div>
    </div>)

}
export default MyComponent
