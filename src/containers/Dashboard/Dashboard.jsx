import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { fetchGnomes } from '../../actions/gnomes';
import DashboardPanel from '../../components/DashboardPanel';
import { useFetching } from '../../utils/hooks-utils';

export const Dashboard = ({ gnomes, fetchGnomes }) => {
	useFetching(() => fetchGnomes());

	return (
		<div>
			<Header />
			<DashboardPanel
				gnomes={gnomes}
			/>
		</div>);
};

Dashboard.propTypes = {
	fetchGnomes: PropTypes.func,
	gnomes: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
	fetchGnomes: () => dispatch(fetchGnomes({
		params: {}
	}))
});

export const mapStateToProps = (state) => ({
	gnomes: state.gnomes.gnomes
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
