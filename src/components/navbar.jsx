import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav>
                Navbar {this.props.state.habbits.filter(item => item.count > 0).length}
            </nav>
        );
    }
}

export default Navbar;