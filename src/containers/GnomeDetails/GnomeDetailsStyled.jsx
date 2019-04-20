
import styled from 'styled-components';

export const ProfileHeader = styled.div`
font-family: 'Hind-Regular';
margin: 120px 10% 0;
background: white;
width: 72%;
padding: 20px;
padding-bottom: 0;
border: 1px solid #fafafa;
box-shadow: 1px 2px #ececec;
display: inline-block;
text-align: center;

div {
    margin-top: 30px;
}

p {
    margin: 0 0 40px 0;
    font-size: 14px;
    font-family: 'Hind-Light';
    color: #a9a8a8;
}
`;

export const DescriptionBlock = styled.h5`
margin: 5px;

span {
    padding-right: 10px;
    color: #888888;
}
`;

export const Image = styled.div`
position: relative;
margin-top: 0;
margin: 0 auto;
margin-top: 0 !important;
`;

export const Professions = styled.div`
margin-top: 25px !important;
display: grid;

ul {
    margin-top: 30px;
    text-decoration: none;
    list-style: none;
    display: inline-flex;
    margin: 20px auto;
    flex-wrap: wrap;

    li {
        color: #99a2ab;
        background-color: #d4d7dd;
        font-size: 11px;
        margin: 0 5px 5px 0;
        padding: 7px 15px;
        border-radius: 25px;
        cursor: pointer;
    }
}
`;