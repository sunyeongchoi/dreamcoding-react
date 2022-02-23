import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                Navbar {this.props.state.habbits.filter(item => item.count > 0).length}
            </nav>
        );
    }
}

export default Navbar;