import React, {Component, PropTypes} from 'react';

export default class App extends React.Component {
	static propTypes = {
		initialCount: PropTypes.number
	}
	constructor(props) {
		super(props);
		this.state = {
			count: props.initialCount
		};
	}
	render() {
		return (
			<div>Hello! Hi</div>
		);
	}
}