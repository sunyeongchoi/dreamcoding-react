import React, { Component } from 'react';

class AddHabbit extends Component {
    state = {
      addHabbit: []
    }
    handleChange = (e) => {
        console.log(e.target.value)
        const newHabbit = {id: Math.random(), name: e.target.value, count: 0};
        const habbits = [...this.props.state.habbits, newHabbit];
        this.setState({ addHabbit: habbits })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.handleChange(e)} />
                <button className='add-habit' onClick={() => this.props.onAdd(this.state.addHabbit)}>
                    Add
                </button>
            </div>
        );
    }
}

export default AddHabbit;