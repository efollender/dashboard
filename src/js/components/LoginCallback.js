import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actionCreators/authActions';

const mapStateToProps = state => {
	return {
		query: state.router.location.query
	};
}

class LoginCallback extends Component {
	static propTypes = {
		query: PropTypes.object,
		setToken: PropTypes.func
	};
	componentDidMount() {
		const {query} = this.props;
		if (query.code) {
			this.props.setToken(query.code);
		}
	}
	render() {
		return (
			<div className="expense-container">
			</div>
		);
	}
}

class LoginCallbackContainer extends Component {
	static propTypes = {
		setToken: PropTypes.func
	};
	render() {
		return (
			<LoginCallback {...this.props}/>
		)
	}
}

export default connect(mapStateToProps, actionCreators)(LoginCallbackContainer);