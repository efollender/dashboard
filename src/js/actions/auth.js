import {Map, List} from 'immutable';

export function setToken(currentState, token) {
			return currentState.set(
				'token',
				token
			);
		};
