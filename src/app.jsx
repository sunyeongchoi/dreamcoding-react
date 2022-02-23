import './app.css';
import React, { Component } from 'react';
import Habbits from './components/habbits';
import AddHabbit from './components/addHabbit';
import Navbar from './components/navbar';
import Reset from './components/reset';

class App extends Component {
  state = {
    habbits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ],
};

handleIncrement = (habbit) => {
  const habits = [...this.state.habbits];
  const index = habits.indexOf(habbit);
  habits[index].count++;
  this.setState({ habbits: habits });
}
handleDecrement = (habbit) => {
  const habits = [...this.state.habbits];
  const index = habits.indexOf(habbit);
  const count = habits[index].count - 1;
  habits[index].count = count < 0 ? 0 : count;
  this.setState({ habbits: habits });
}
handleDelete = (habbit) => {
  const habits = [...this.state.habbits];
  const filteredHabbit = habits.filter(habit => habit.id !== habbit.id);
  this.setState({ habbits: filteredHabbit })
}
handleReset = () => {
  const habits = [...this.state.habbits];
  const resetValues = habits.map((h) => {
    h.count = 0;
    return h;
  })
  this.setState({ habbits: resetValues });
}
handleAdd = (habbit) => {
  this.setState({ habbits: habbit });
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
