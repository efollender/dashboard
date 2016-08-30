import {Map, List} from 'immutable';

export function addExpense(currentState, expense) {
			return currentState.update(
				'expenses',
				expenses => expenses.push(expense)
			);
		};

export function total(currentState) {
			let expenses = currentState.get('expenses');
			let total = 0;
			expenses.map(expense => {
				total += expense.get('total');
			});
			return currentState.merge(Map({
				total: total
			}));
		};