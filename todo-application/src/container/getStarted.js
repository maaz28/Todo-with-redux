import React, { Component } from 'react';
import GetStartedComponent from '../components/getStarted'

class GetStarted extends Component {
    // how to center this button
    render() {
        return (
            <GetStartedComponent handler = {this.handler.bind(this)} />
   )
    }
    handler() {
        console.log(this.props)
        this.props.history.push('/todo');
    }
}

export default GetStarted;
