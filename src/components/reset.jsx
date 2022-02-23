import React, { PureComponent } from 'react';

class Reset extends PureComponent {
    
    render() {
        return (
            <button className='reset-button' onClick={this.props.onReset}>
                Reset All
            </button>
        );
    }
}

export default Reset;