import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import TaskReducer from './reducer/taskReducer'

export default createStore(
    combineReducers({
        root : TaskReducer
    }, {}, applyMiddleware(thunk))
)