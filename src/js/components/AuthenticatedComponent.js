import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'redux-router';

export function requireAuthentication(RouteComponent) {
	class AuthenticatedComponent extends Component {
		componentWillMount() {
			this.checkAuth();
		}
		componentWillReceiveProps(nextProps) {
			this.checkAuth();
		}
		checkAuth() {
			const {dispatch} = this.props;
			if (!this.props.isAuthenticated) {
				let redirectAfterLogin = this.props.location.pathName;
				dispatch(push({
					pathname: `login`, 
					query: {
						next: redirectAfterLogin
					}
				}));
			}
		}
		render() {
			return (
				<div>
				{this.props.isAuthenticated === true
					? <RouteComponent {...this.props}/>
					: null
				}
				</div>
			);
		}
	}
	const mapStateToProps = state => ({
		token: state.auth.token,
		user: state.auth.userName,
		isAuthenticated: state.auth.isAuthenticated
	});

	return connect(mapStateToProps)(AuthenticatedComponent);
}