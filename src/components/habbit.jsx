import React, { PureComponent } from 'react';

class Habbit extends PureComponent {
    componentDidMount() {
        console.log(`${this.props.habbit.name} mount`)
    }

    componentWillUnmount() {
        console.log(`${this.props.habbit.name} will unmount`)
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habbit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habbit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habbit);
    }
    render() {
        const {name, count} = this.props.habbit;
        return (
            <>
            <li className='habbit'>
                <span className='habbit-name'>{name}</span>
                <span className='habbit-count'>{count}</span>
                <button className='habbit-button habbit-increase' onClick={this.handleIncrement}>
                <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className='habbit-button' onClick={this.handleDecrement}>
                <i className="fa-solid fa-square-minus habbit-decrease"></i>
                </button>
                <button className='habbit-button' onClick={this.handleDelete}>
                <i className="fa-solid fa-trash habbit-delete"></i>
                </button>
            </li>
            </>
        );
    }
}
export default Habbit;