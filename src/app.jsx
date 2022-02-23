import './app.css';
import React, { PureComponent } from 'react';
import Habbits from './components/habbits';
import AddHabbit from './components/addHabbit';
import Navbar from './components/navbar';
import Reset from './components/reset';

class App extends PureComponent {
  state = {
    habbits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ],
};

handleIncrement = (habbit) => {
  const habbits = this.state.habbits.map(items => {
    const newObjHabbit = {...items}
    if (newObjHabbit.id === habbit.id) {
      newObjHabbit.count = items.count + 1;
      return newObjHabbit;
    }
    return items;
  })
  this.setState({ habbits: habbits });
}
handleDecrement = (habbit) => {
  const habbits = this.state.habbits.map(items => {
    const newObjHabbit = {...items}
    if (newObjHabbit.id === habbit.id) {
      newObjHabbit.count = items.count - 1;
      return newObjHabbit;
    }
    return items;
  })
  this.setState({ habbits: habbits });
}
handleDelete = (habbit) => {
  const habbits = this.state.habbits.filter(habit => habit.id !== habbit.id)
  this.setState({ habbits: habbits })
}
handleReset = () => {
  const resetValues = this.state.habbits.map((h) => {
    const newObjHabbit = {...h}
    newObjHabbit.count = 0;
    return newObjHabbit;
  })
  this.setState({ habbits: resetValues });
}
handleAdd = (name) => {
  const newHabbit = {id: Date.now(), name, count: 0}
  const habbits = [...this.state.habbits, newHabbit];
  this.setState({ habbits: habbits });
}

  render() {
    return (
      <>
        <Navbar state={this.state} />
        <AddHabbit state={this.state} onAdd={this.handleAdd} />
        <Habbits
          state={this.state}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <Reset onReset={this.handleReset} />
      </>
    );
  }
}

export default App;
