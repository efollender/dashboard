import {HARVEST} from '../constants';

export function addExpense(expense) {
  return {
    type: HARVEST.ADD_EXPENSE,
    data: expense
  }
};

export function total() {
  return {
    type: HARVEST.GET_TOTAL
  }
};
