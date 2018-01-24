import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import CustomNavbar from '../components/navbar'
import GetStarted from '../container/getStarted'
import Todo from '../container/todo'


const BasicRouting = () => {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={GetStarted} />
        <Route exact path="/todo" component={Todo} />
      </div>
    </Router>
  )
}

export default BasicRouting;
