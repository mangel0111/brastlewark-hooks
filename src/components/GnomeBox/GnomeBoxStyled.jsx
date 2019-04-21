import styled from 'styled-components';

export const GnomeBoxPanel = styled.div`
	margin: 0 20px 20px 0;
	background: white;
	padding: 20px;
	padding-bottom: 0;
	max-width: 305px;
	border: 1px solid #fafafa;
	box-shadow: 1px 2px #ececec;
	flex: 1 100%;
	text-align: center;
	cursor: pointer;

	p {
		margin: 0;
		font-size: 12px;
		color: #888686;
	}

	h5 {
		color: #a2a1a1;
		font-weight: normal;
		display: flex;
		margin: 10px 0;
	}
`;

export const Name = styled.div`
	width: 300px;
	font-size: 16px;
	margin: 20px 0;
`;