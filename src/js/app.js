import React, {Component, PropTypes} from 'react';
import Expense from './components/Expense';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Expense/>
			</div>
		);
	}
}