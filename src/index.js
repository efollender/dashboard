import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import App from './js/App';
// import RouteContainer from './js/RouteContainer';
import {ReduxRouter} from 'redux-router';
import Routes from './js/routes';
import store from './js/store';
import './stylus/index.styl';

const mount = document.getElementById('app');

if (module.hot) {
  module.hot.accept();
}

render(
	<Provider store={store}>
		<ReduxRouter>
			{Routes}
		</ReduxRouter>
	</Provider>, mount
);