import React, {Component, PropTypes} from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="top-bar">
					</div>
				</div>
					{this.props.children}
			</div>
		);
	}
}