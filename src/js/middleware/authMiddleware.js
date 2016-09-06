import {AUTH} from '../constants';
import request from 'superagent';

export default store => next => action => {
	if (action.type === AUTH.SET_TOKEN) {
		sessionStorage.setItem('harvestToken', action.data);
		request.post(`https://brooklynunited.harvestapp.com/oauth2/token`)
			.send({
				code: action.data,
				client_id: 'Rqe4-51w8itszf0oLFA6Wg',
				client_secret: 'EpGNeSmdicIyj_tNNzEjZvEfBoHEj3YR3hKIJUACsTeT01MuP2CbT32G0TnyIYme7x3ckpfg0habuchrZt_bpA',
				redirect_uri: 'http://localhost:4001',
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