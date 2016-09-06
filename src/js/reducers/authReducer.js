import { AUTH } from '../constants';
import * as actions from '../actions/auth';

export default function reducer(state=AUTH.INITIAL_STATE, action={}) {
	switch (action.type) {
		case AUTH.SET_TOKEN: 
			return actions.setToken(state, action.data);
		default:
			return state;
			break;
	}
}