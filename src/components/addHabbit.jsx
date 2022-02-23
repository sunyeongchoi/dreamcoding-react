import React, { PureComponent } from 'react';

class AddHabbit extends PureComponent {
    inputRef = React.createRef();
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.inputRef.current.value);
        this.inputRef.current.value = '';
    }
    render() {
        
        return (
            <form className='add-form' onSubmit={this.onSubmit}>
                <input type="text" ref={this.inputRef} />
                <button className='add-habit'>
                    Add
                </button>
                <button className="add-button"></button>
            </form>
        );
    }
}

export default AddHabbit;