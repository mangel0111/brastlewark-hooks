import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import { fetchGnomes } from '../../actions/gnomes';
import DashboardPanel from '../DashboardPanel';
import { useFetching } from '../../utils/hooks-utils';

export const Dashboard = ({ fetchGnomes }) => {
	useFetching(() => fetchGnomes());
	return (
		<div>
			<Header />
			<DashboardPanel />
		</div>);
};

Dashboard.propTypes = {
	fetchGnomes: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
	fetchGnomes: () => dispatch(fetchGnomes({
		params: {}
	}))
});

export default connect(null, mapDispatchToProps)(Dashboard);
