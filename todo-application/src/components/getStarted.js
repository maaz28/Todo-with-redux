import React, { Component } from 'react';

class GetStartedComponent extends Component {
    // how to center this button
    customStyle = {
        width: '200px',
         margin : '0 auto',
         marginTop : '200px'
    }
    render() {
        return (
            <div style = {this.customStyle}> <a className="waves-effect blue-grey darken-4 btn-large" onClick={this.props.handler} >Button</a></div>
        )
    }
   
}

export default GetStartedComponent;
