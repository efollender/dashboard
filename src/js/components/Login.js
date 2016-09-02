import React, {Component, PropTypes} from 'react';

export default class Login extends Component {
	render() {
		const API_ROOT = "http://brooklynunited.harvestapp.com/";
		const API_POINT = "oauth2/authorize?";
		const CLIENT_ID = "Rqe4-51w8itszf0oLFA6Wg";
		const REDIRECT = encodeURIComponent("http://localhost:4001");
		const OPTIONS = `client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&state=optional-csrf-token&response_type=token`;
		const loginPath = API_ROOT + API_POINT + OPTIONS;
		return (
			<div>
				<a href={loginPath}>Login with Harvest!</a>
			</div>
		);
	}
}