import React, { memo } from 'react';

const AddHabbit = memo(props => {
    const inputRef = React.createRef();
    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd(inputRef.current.value);
        inputRef.current.value = '';
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input type="text" ref={inputRef} />
            <button className='add-habit'>
                Add
            </button>
            <button className="add-button"></button>
        </form>
    )
});


export default AddHabbit;