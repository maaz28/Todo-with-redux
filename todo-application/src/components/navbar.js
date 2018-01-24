import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class CustomNavbar extends Component {

    render() {
        return (
                <Navbar brand='Todo-Application' className='blue-grey darken-4' right>
	<NavItem href='get-started.html'>Getting started</NavItem>
	<NavItem href='components.html'>Components</NavItem>
                </Navbar>
        )
    }
}

export default CustomNavbar;
