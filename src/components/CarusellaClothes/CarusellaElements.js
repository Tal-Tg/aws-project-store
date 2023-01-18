import styled from 'styled-components'


export const CarusellaGrid = styled.div`
width:100%;
height:auto;
display: grid;
background:white;
grid-template-columns: 19% 19% 19% 19% 19%;
grid-gap: 10px;
text-align:center;
align-items:center;
justify-content: center;



@media screen and (max-width: 900px) {
    width:100%;
    height:100%;
}   

@media screen and (max-width: 682px) {
    width:100%;
    height:100%;
    grid-template-columns: 25% 25% 25% ;
}   

`

export const CarusellaGridItem = styled.div`
width:100%;
// min-width:;
height:100%;
background:white;
display:flex;
justify-content: center;
align-items:center;
text-align:center;

@media screen and (max-width: 900px) {
    // width:80%;
}   
`

export const CarusellaGridItemWrapper = styled.div`
width:95%;
// height:95%;
background:white;
cursor:pointer;

`

export const CarusellaItemImageDiv = styled.div`
width:100%;
height:80%;
background:white;
position:relative;
display:flex;
justify-content: center;
align-items:center;
text-align:center;

@media screen and (max-width: 900px) {
    width:100%;
    height:60%;
}   

@media screen and (max-width: 481px) {
    width:100%;
    height:40%;
}   

`

export const CarusellaItemImage = styled.div`
width:100%;
height:100%;
// display:flex;
background:white;


`

export const CarusellaHeader = styled.p`
font-size:17px;
color:black;
float:left;
position:relative;
left:0px;
top:-20px;
color:green;


`

export const CarusellaText = styled.p`
font-size:13px;
color:black;
float:left;
position:relative;
left:0px;
top:0px;
color:black;
width:100%;
text-align:left;
text-decoration: none;
`

export const CarusellaLink = styled.a`
text-decoration: none;
color:black;
font-weight:400;

&:hover{
    text-decoration: underline;
}
`