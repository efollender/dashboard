import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Map, List} from 'immutable';
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
	componentDidMount() {
		const {location} = this.props;
		if (location.query.access_token) {
			console.log('access', location.query.access_token);
		}
	}
	render() {
		const {
			expenses,
			expenseTotal,
			total
		} = this.props;
		return (
			<div className="expense-container">
				<Link to="login">login!</Link>
				{expenses.toJS().map(expense => {
					return (
						<p key={expense.total}>
						{expense.title}: {expense.total}
						</p>
					)
				})}
				<button onClick={total}>Get total</button>
				{expenseTotal &&
					<p>{expenseTotal}</p>
				}
			</div>
		);
	}
}

export default connect(mapStateToProps, actionCreators)(Expense);