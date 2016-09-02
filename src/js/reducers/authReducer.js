import { AUTH } from '../constants';
import * as actions from '../actions/auth';

export default function reducer(state=AUTH.INITIAL_STATE, action={}) {
	switch (action.type) {
		default:
			return state;
			break;
	}
}