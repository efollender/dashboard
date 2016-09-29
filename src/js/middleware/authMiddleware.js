import {AUTH} from '../constants';
import request from 'superagent';
import * as config from '../../../config/oauth2';

export default store => next => action => {
	if (action.type === AUTH.SET_TOKEN) {
		sessionStorage.setItem('harvestToken', action.data);
		request.post(`https://brooklynunited.harvestapp.com/oauth2/token`)
			.type('form')
			.withCredentials()
			.send({
				code: action.data,
				client_id: config.harvest.identifier,
				client_secret: config.harvest.secret,
				redirect_uri: 'https://c3e605ae.ngrok.io',
				grant_type: 'authorization_code'
			})
			.type('application/x-www-form-urlencoded')
			.accept('application/json')
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log('err', err);
		});
	}
	return next(action);
} 


