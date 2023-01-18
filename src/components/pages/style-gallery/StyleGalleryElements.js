import styled from 'styled-components'



export const StyledContainer = styled.div`
width:100%;
height:100%;
background:white;
`

export const StyledWrapper = styled.div`
width:97%;
height:100%;
background:white;
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;
grid-gap:10px;
text-align:center;
align-items:center;


@media screen and (max-width: 1000px) {
    width:100%;
    position:relative;
    left:-3%;    
}   

@media screen and (max-width: 642px) {
    width:92%;
    left:1%;    
    // left:5px; 
}   

@media screen and (max-width: 567px) {
    width:90%;
    // left:10px; 
}   

@media screen and (max-width: 462px) {
    width:88%;
    // left:10px; 
}   

@media screen and (max-width: 369px) {
    width:86%;
    // left:10px; 
}   
@media screen and (max-width: 300px) {
    width:84%;
    // left:10px; 
}   



// @media screen and (max-width: 1000px) {
//     position:relative;
//     left:5px;
//     grid-template-columns: 25% 25% 25% 25%;
    
// }   

// @media screen and (max-width: 770px) {
//     position:relative;
//     left:5px;
//     grid-template-columns: 33% 33% 33%;
    
// }   

// @media screen and (max-width: 770px) {
//     position:relative;
//     left:5px;
//     grid-template-columns: 33% 33% 33%;
    
// }   

// @media screen and (max-width: 500px) {
//     position:relative;
//     left:5px;
//     grid-template-columns: 49% 49%;
    
// }   


`

export const StyledItemGrid = styled.div`
background:white;
width:100%;
// height:350px;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
position:relative;
// left:3%;
cursor:pointer;

@media screen and (max-width: 1000px) {
    // height:300px;
    
}   

@media screen and (max-width: 500px) {
    
    
}   

`