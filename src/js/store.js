import { 
	combineReducers, 
	applyMiddleware, 
	createStore, 
	compose 
} from 'redux';

import { 
	reduxReactRouter, 
	routerStateReducer, 
	ReduxRouter 
} from 'redux-router';
import { createHistory } from 'history';
import thunk from 'redux-thunk';
import routes from './routes';
import auth from './reducers/authReducer';
import harvest from './reducers/harvestReducer';
import authMiddleware from './middleware/authMiddleware';

const reducers = combineReducers({auth, harvest, router: routerStateReducer});

export default createStore(
	reducers, 
	{}, 
	compose(
    applyMiddleware(authMiddleware, thunk),
    reduxReactRouter({
	    routes,
	    createHistory
	  }),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);