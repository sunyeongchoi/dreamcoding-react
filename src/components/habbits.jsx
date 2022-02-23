import React, { Component } from 'react';
import Habbit from './habbit';

class Habbits extends Component {

    render() {
        return (
            <ul>
                {this.props.state.habbits.map(habbit => (
                    <Habbit
                      key={habbit.id}
                      habbit={habbit}
                      onIncrement={this.props.onIncrement}
                      onDecrement={this.props.onDecrement}
                      onDelete={this.props.onDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habbits;