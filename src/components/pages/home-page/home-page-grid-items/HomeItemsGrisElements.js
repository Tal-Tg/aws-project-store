import styled from 'styled-components'

export const GridContainer = styled.div`
width:100%;
height:100%;
min-height:500px;
// background:black;
`

export const GridWrapper = styled.div`
width:100%;
height:auto;
background:white;
align-items:center;
justify-content:center;
text-align:center;
display:flex;
padding:20px;
display: grid;
// grid-template-columns: 22% 22% 22% 22% 22% ;
grid-template-columns: auto auto auto auto auto;
grid-gap: 10px;

// @media screen and (max-width: 1250px) {
//     grid-template-columns: auto auto auto ;
// }   

@media screen and (max-width: 950px) {
    grid-template-columns: auto auto auto;
}   

// @media screen and (max-width: 725px) {
//     grid-template-columns: 50% 50%;
// }   

// @media screen and (max-width: 667px) {
//     grid-template-columns: auto auto;
// }   

@media screen and (max-width: 500px) {
    // grid-template-columns: auto auto;

}   

@media screen and (max-width: 350px) {
    // grid-template-columns: auto ;

}   

@media screen and (max-width: 400px) {
    // grid-template-columns: 100%;
}   
`


export const ShowMoreButton = styled.div`
width:100%;
background:white;
height:100%;
// min-height:100px;
padding:15px;
text-align:center;
align-items:center;
justify-content:center;
direction:rtl;
box-shadow: 0px -50px 30px -0px #fcfefe;
font-size:20px;
font-weight:700;
// opacity:0.8;
border-radius:10px 10px 10px 10px;
position:relative;
top:-30px;
// z-index:10;
`