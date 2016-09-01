import {AUTH} from '../constants';

export function setToken(token) {
	return {
		type: AUTH.SET_TOKEN,
		data: token
	};
}

export function setUser(user) {
	return {
		type: AUTH.SET_USER,
		data: user
	};
}

export function discardToken() {
	return {
		type: AUTH.DISCARD_TOKEN
	}
}