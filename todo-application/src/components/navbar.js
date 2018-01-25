import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {
    Link
  } from 'react-router-dom';

class CustomNavbar extends Component {

    render() {
        return (
                <Navbar brand='Todo-Application' className='blue-grey darken-4' right>
	<NavItem> <Link to = '/todo'> Getting started </Link> </NavItem>
                </Navbar>
        )
    }
}

export default CustomNavbar;
