import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loader } from './LoadingStyled';

export const Loading = ({ isLoading }) => (<Loader>{isLoading && <div>Loading...</div>}</Loader>);

Loading.propTypes = {
	isLoading: PropTypes.bool
};

export const mapStateToProps = (state) => ({
	isLoading: state.view.isLoading
});

export default connect(mapStateToProps)(Loading);
