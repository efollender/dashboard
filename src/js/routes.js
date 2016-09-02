import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Expense from './components/Expense';
import Login from './components/Login';

export default (
	<Route name="app" component={App}>
		<Route name="expense" component={Expense} path="/" />
		<Route name="login" component={Login} path="login" />
	</Route>
);
