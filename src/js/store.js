import {combineReducers, applyMiddleware, createStore} from 'redux';
import harvestReducer from './reducers/harvestReducer';

const reducers = combineReducers({harvestReducer});

export default createStore(reducers);