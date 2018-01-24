import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import  BasicRouting  from "./config/route";
import { Provider } from 'react-redux';
import store from './store/store'

var config = {
    apiKey: "AIzaSyAQ-Y3WJZYynrCw6gKVy56IdrCNUkQMJnw",
    authDomain: "auth-3ac4d.firebaseapp.com",
    databaseURL: "https://auth-3ac4d.firebaseio.com",
    projectId: "auth-3ac4d",
    storageBucket: "auth-3ac4d.appspot.com",
    messagingSenderId: "26226103942"
  };
  firebase.initializeApp(config);

ReactDOM.render(
<Provider store={store}>
    <BasicRouting />
</Provider> 
, document.getElementById('root'));
registerServiceWorker();
