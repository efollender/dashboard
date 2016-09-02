import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {List} from 'immutable';
import * as actionCreators from '../actionCreators/harvestActions';

const mapStateToProps = state => {
	return {
		expenses: state.harvestReducer.get('expenses'),
		expenseTotal: state.harvestReducer.get('total')
	};
}

class Expense extends Component {
	static propTypes = {
		addExpense: PropTypes.func,
		total: PropTypes.func,
		expenses: PropTypes.instanceOf(List),
		expenseTotal: PropTypes.number
	};
	render() {
		const {
			expenses,
			expenseTotal,
			total
		} = this.props;
		return (
			<div className="expense-container">
				<Link to="login">login!</Link>
				<div>
				{expenses.toJS().map((expense, index) => {
					return (
						<p
							key={expense.total}>
							{expense.title}: {expense.total}
						</p>
					)
				})}
				
				<button onClick={total}>Get total</button>
				
				{expenseTotal &&
					<p>{expenseTotal}</p>
				}
				</div>
			</div>
		);
	}
}

class ExpenseContainer extends Component {
	static propTypes = {
		addExpense: PropTypes.func,
		total: PropTypes.func,
		expenses: PropTypes.instanceOf(List),
		expenseTotal: PropTypes.number
	};
	render() {
		return (
			<Expense {...this.props}/>
		)
	}
}

export default connect(mapStateToProps, actionCreators)(ExpenseContainer);