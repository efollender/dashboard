import * as type from './constants';
import * as harvest from './harvest';

export default function reducer(state, action) {
	switch (action.type) {
		case type.GET_TOTAL:
			return harvest.total(state);
			break;
		case type.ADD_EXPENSE:
			return harvest.addExpense(state, action.data);
			break;
		default:
			return state;
			break;
	}
}