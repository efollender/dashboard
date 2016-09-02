import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import harvestReducer from './reducers/harvestReducer';
import authMiddleware from './middleware/authMiddleware';

const reducers = combineReducers({harvestReducer});
// const createStoreWithMiddleware = applyMiddleware(authMiddleware)(createStore);

export default createStore(reducers, {}, compose(
    applyMiddleware(authMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));