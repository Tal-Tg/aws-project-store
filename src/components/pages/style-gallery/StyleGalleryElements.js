import styled from 'styled-components'



export const StyledContainer = styled.div`
width:100%;
height:100%;
background:white;
`

export const StyledWrapper = styled.div`
width:100%;
// height:150%;
background:white;
display: grid;
grid-template-columns: 15% 15% 15% 15% 15% 15% ;
grid-gap:10px;
text-align:center;
align-items:center;
justify-content:center;

@media screen and (max-width: 1000px) {
    width:100%;
    position:relative;
    grid-template-columns: 30% 30% 30% ;
    // left:-3%;    
}   

@media screen and (max-width: 750px) {
    width:100%;
    grid-template-columns: 35% 35% 35% ;
    // grid-gap:50px;
    // left:1%;    
    // left:5px; 
}   

@media screen and (max-width: 642px) {
    width:100%;
    grid-template-columns: 45% 45%;
    // grid-gap:50px;
    // left:1%;    
    // left:5px; 
}   

@media screen and (max-width: 415px) {
    width:100%;
    // grid-template-columns: 75%  ;
    // grid-template-columns: 20% 20% 20% ;
    // left:1%;    
    
    // left:5px; 
}   

@media screen and (max-width: 300px) {
    width:100%;
    // grid-template-columns: 95%;
    // grid-template-columns: 20% 20% 20% ;
    // left:1%;    
    
    // left:5px; 
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

@media screen and (max-width: 640px) {
    // height:300px;
    // width:170%;
    
    
}   

`