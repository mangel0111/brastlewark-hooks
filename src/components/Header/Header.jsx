import React from 'react';
import PropTypes from 'prop-types';
import { HeaderBar, Gradient, NavBar, Icon } from './HeaderStyled';

export const Header = ({ light }) =>
	(<HeaderBar>
		<Gradient />
		<NavBar>
			<Icon onClick={() => window.location = '/'} light={light}>W.</Icon>
		</NavBar>
	</HeaderBar>);

Header.defaultProps = {
	light: false
};

Header.propTypes = {
	light: PropTypes.bool
};

export default Header;
