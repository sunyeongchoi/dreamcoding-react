import React, { useCallback } from 'react';

const SimpleHabbit = () => {
    const [count, setCount] = React.useState(0);
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count])
    return (
        <li className='habbit'>
            <span className='habbit-count'>{count}</span>
            <button className='habbit-button habbit-increase' onClick={handleIncrement}>
            <i className="fa-solid fa-square-plus"></i>
            </button>
        </li>
    );
};

export default SimpleHabbit;