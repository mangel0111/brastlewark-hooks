import React, { useState } from 'react';
import PropTypes from 'prop-types';
import iconEye from '../../assets/images/icon-show.png';
import { InputForm, LabelTitle, IconInput } from './InputStyled';

export const Input = ({ title, value, isFilter, type, width, onChange }) => {
	const [focus, changeFocus] = useState(false);
	return (
		<div>
			{title && <LabelTitle value={value} isFocus={focus}>{title}</LabelTitle>}
			<InputForm
				onFocus={() => changeFocus(true)}
				onBlur={() => changeFocus(false)}
				type={type}
				width={width}
				onChange={onChange}
			/>
			{isFilter && <IconInput><img src={iconEye} alt="icon-eye" /></IconInput>}
		</div>);
};

Input.propTypes = {
	error: PropTypes.object,
	type: PropTypes.string,
	width: PropTypes.string,
	title: PropTypes.string,
	value: PropTypes.string,
	isFilter: PropTypes.bool,
	onChange: PropTypes.func
};

export default Input;
