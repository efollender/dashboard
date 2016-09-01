import {expect} from 'chai';
import {List, Map} from 'immutable';
import {
	addExpense,
	total
} from '../src/js/actions/harvest';

const state = Map({
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

describe('Harvest logic', () => {
	describe('An expense list', () => {
		it('is immutable', () => {
			
			let nextState = addExpense(state, Map({
						total: 16.21,
						title: 'Seamless',
						billable: false
					}));

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
						total: 16.21,
						title: 'Seamless',
						billable: false
					})
				)
			}));
			expect(state).to.equal(Map({
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
			}));
		});
	});
	describe('Total expenses', () => {
		
		it('Adds all expenses', () => {
			let nextState = total(state);
			
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
	});

});