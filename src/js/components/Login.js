import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as config from '../../../config/oauth2';
import * as actionCreators from '../actionCreators/authActions';

const mapStateToProps = state => {
	return {
		user: state.auth.get('user'),
		token: state.auth.get('token')
	};
}

class Login extends Component {
	static propTypes = {
		user: PropTypes.string,
		token: PropTypes.string
	};
	render() {
		const API_ROOT = "https://brooklynunited.harvestapp.com/";
		const API_POINT = "oauth2/authorize?";
		const CLIENT_ID = config.harvest.identifier;
		const REDIRECT = encodeURIComponent(config.harvest.redirect_uri);
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