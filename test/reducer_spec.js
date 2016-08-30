import {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/js/reducer';
import * as type from '../src/js/constants';

const initialState = Map({
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
			});

describe('reducer', () => {
	it('handles GET_TOTAL', () => {

		const action = {type: type.GET_TOTAL};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(Map({ 
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
			), 
			total: 24.58 
		}));

	});

	it('handles ADD_EXPENSE', () => {
		const action = {
			type: type.ADD_EXPENSE,
			data: Map({
				total: 20.41,
				title: 'Supplies',
				billable: true
			})
		};
		const nextState = reducer(initialState, action);
		expect(nextState).to.equal(Map({
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
					}),
					Map({
						total: 20.41,
						title: 'Supplies',
						billable: true
					})
				)
			}));
	});
});