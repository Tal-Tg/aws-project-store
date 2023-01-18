import styled from 'styled-components'

export const SearchDiv = styled.div`
width:100%;
height:63%;
position:relative;
top:7px;
left:20%;
// @media screen and (max-width: 1281px) {
//     width:100%;
//     margin-top:0px;
//     position:relative;
//     left:12%;
// }   
// @media screen and (max-width: 1025px) {
//     width:100%;
//     margin-top:-8px;
//     position:relative;
//     left:12%;
// }   
// @media screen and (max-width: 913px) {
//     width:100%;
//     margin-top:20px;
//     position:relative;
//     left:12%;
// }   
// @media screen and (max-width: 820px) {
//     width:100%;
//     margin-top:15px;
//     position:relative;
//     left:12%;
// }   
// @media screen and (max-width: 541px) {
//     width:100%;
//     margin-top:-3px;
//     position:relative;
//     left:12%;
// }   
// @media screen and (max-width: 415px) {
//     width:100%;
//     margin-top:4px;
//     position:relative;
//     left:17%;
// }   
// @media screen and (max-width: 376px) {
//     width:100%;
//     margin-top:-4px;
//     position:relative;
//     left:17%;
// }
// @media screen and (max-width: 281px) {
//     width:100%;
//     margin-top:-5px;
//     position:relative;
//     left:12%;
// }   
`


export const SearchInput = styled.input`
width:80%;
height:100%;
border-radius:10px 10px 10px 10px;
border:none;
background:#f1f1f1;

`

export const SearchElements = styled.div`
background:white;
width:100%;
color:black;
font-weight:400;
height:10px;
font-size:20px;
&:hover{
    background:#e3e3e3;
    cursor:pointer;
    border-radius:3px 3px 3px 3px;
}
`