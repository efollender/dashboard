import { HARVEST } from '../constants';
import * as actions from '../actions/harvest';

export default function reducer(state=HARVEST.INITIAL_STATE, action={}) {
	switch (action.type) {
		case HARVEST.GET_TOTAL:
			return actions.total(state);
			break;
		case HARVEST.ADD_EXPENSE:
			return actions.addExpense(state, action.data);
			break;
		default:
			return state;
			break;
	}
}