import React, {Component, PropTypes} from 'react';
import {Router, hashHistory} from 'react-router';
import routes from './routes';

export default class RouteContainer extends Component {
	static propTypes = {
		history: PropTypes.object,
		store: PropTypes.object
	};
	static contextTypes = {
    store: PropTypes.object
  };
  constructor(props, context) {
    super(props, context);
  }
	render() {
		return (
			<Router
				routes={routes}
				history={hashHistory}/>
		);
	}
}