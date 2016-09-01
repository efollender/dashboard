import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
	return {
		expenses: state.harvestReducer.get('expenses')
	};
}

class Expense extends Component {
	render() {
		const {expenses} = this.props;
		return (
			<div className="expense-container">
				{expenses.toJS().map(expense => {
					return (
						<p key={expense.total}>
						{expense.title}
						</p>
					)
					
				})}
			</div>
		);
	}
}

export default connect(mapStateToProps)(Expense);