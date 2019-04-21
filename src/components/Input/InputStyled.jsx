import styled from 'styled-components';

export const InputForm = styled.input`
    width: ${props => props.width ? props.width : '300px'};
    height: 25px;
    padding: 5px 30px 5px 5px;
    border: none;
    background-color: transparent;
    color: #4d555e;
    border-bottom: 1px solid ${(props) => props.error ? '#f56161' : '#cac9c9'};
    z-index: 9999;
    position: relative;

    &:focus {
        outline: none;
    }

    &::placeholder { 
        color: #4d555e;
        opacity: 1;
    }

    &[type=date],&[type=time] {
        margin-top: 20px;
    }

    &:-webkit-autofill{
        -webkit-box-shadow: 0 0 0 30px #f9f9fc inset !important;
    }
`;

export const LabelTitle = styled.label`
    font-size: 12px;
    color: #dee1e3;
    position: relative;
    display: block;
    width: 20px;
    white-space: nowrap;
    transition: top 1s;
    top: ${props => props.isFocus ? '5px' : props.value ? '5px' : '30px'};
`;

export const IconInput = styled.i`
    position: relative;
    left: -30px;
`;