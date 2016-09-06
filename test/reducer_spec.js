import {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';
import * as harvestActions from '../src/js/actionCreators/harvestActions';
import reducer from '../src/js/reducers/harvestReducer';
import {HARVEST} from '../src/js/constants';

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

describe('Harvest reducer', () => {
	it('has an initial state', () => {
		const nextState = reducer();

		expect(nextState).to.be.ok;
	});
	it('handles GET_TOTAL', () => {

		const nextState = reducer(initialState, harvestActions.total());

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
		const action = harvestActions.addExpense(Map({
				total: 20.41,
				title: 'Supplies',
				billable: true
			}));
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