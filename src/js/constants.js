import {Map, List} from 'immutable';

export const AUTH = {
	INITIAL_STATE: Map({
		user: null
	}),
	SET_TOKEN: 'auth/SET_TOKEN',
	SET_USER: 'auth/SET_USER',
	DISCARD_TOKEN: 'auth/DISCARD_TOKEN'
};

export const HARVEST = {
	INITIAL_STATE: Map({
				expenses: List.of(
					Map({
						total: 14.27,
						title: 'Dinner',
						billable: false
					}),
					Map({
						total: 10.31,
						title: 'Uber',
						billable: false
					})
				)
			}),
	ADD_EXPENSE: 'harvest/ADD_EXPENSE',
	GET_TOTAL: 'harvest/GET_TOTAL'
};