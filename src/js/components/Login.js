import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actionCreators/authActions';

const mapStateToProps = state => {
	return {
		user: state.auth.get('user'),
		token: state.auth.get('token'),
		query: state.router.location.query
	};
}

class Login extends Component {
	static propTypes = {
		user: PropTypes.string,
		token: PropTypes.string,
		query: PropTypes.object
	};
	componentDidMount() {
		const {query} = this.props;
		if (query.code) {
			this.props.setToken(query.code);
		}
	}
	render() {
		const API_ROOT = "https://brooklynunited.harvestapp.com/";
		const API_POINT = "oauth2/authorize?";
		const CLIENT_ID = "Rqe4-51w8itszf0oLFA6Wg";
		const REDIRECT = encodeURIComponent("http://localhost:4001/login");
		const OPTIONS = `client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&state=optional-csrf-token&response_type=code`;
		const loginPath = API_ROOT + API_POINT + OPTIONS;
		return (
			<div>
				<a href={loginPath}>Login with Harvest!</a>
			</div>
		);
	}
}

export default connect(mapStateToProps, actionCreators)(Login);