import styled from 'styled-components'


export const NewPostContainer = styled.div`
width:100%; 
height:auto;
items-align:center;
padding-top:10px;
padding-bottom:10px;
`

export const PostsSections = styled.div`
width:100%; 
height:auto;
items-align:center;
padding-bottom:10px;
`

export const HomePageContainer = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
background:white;
`

export const HomePageWrapperTab = styled.div`
width:100%;
height:100%;
background:white;

`

export const HomePageWrapper = styled.div`
width:90%;
height:100%;
background:white;


@media screen and (max-width: 642px) {
    width:100%;

}   



`

export const HomePageTab = styled.div`
width:100%;
height:60px;
background:white;
// overflow-x: scroll;
display:flex;
column-gap: 40px;
column-count:2;
margin-top:10px;
margin-bottom:10px;
`

export const TabItemDiv = styled.div`
width:100px;
background:#e3f6f5;
border-radius:50%;
border:1px solid black;
text-align:center;
justify-content:center;
align-items:center;
display:flex;
color:white;
`

export const DiscountGifDiv = styled.div`
width:100%;
height:500px;
background:black;


@media screen and (max-width: 600px) {
    height:250px;
}   

@media screen and (max-width: 378px) {
    height:200px;
}   
`

export const GridHeader = styled.div`
width:100%;
height:100px;
position:relative;
display: flex;
justify-content:center;
align-items:center;
text-align:center;
font-size:30px;
font-weight:bold;

@media screen and (max-width: 556px) {
    font-size:23px;
}   
`

export const GridContainer = styled.div`
width:100%;
height:100%;
text-align:center;
align-items:center;
justify-content: center;
display:flex;
`

export const GridWrapper = styled.div`
width:92%;
height:100%;
display: grid;
background:white;
grid-template-columns: 20% 20% 20% 20% 20%;
grid-gap:10px;
text-align:center;
align-items:center;
justify-content: center;
// left:1px;
// position:relative;

@media screen and (max-width: 642px) {
    // position:relative;
    // left:5px;
    
    grid-template-columns: 20% 20% 20% 20% 20%;
}   


@media screen and (max-width: 556px) {
    position:relative;
    // left:4.4%;
    grid-gap:6px;
    grid-template-columns: 48% 48%  ;
}   

@media screen and (max-width: 356px) {
    position:relative;
    // left:4.4%;
    grid-gap:6px;
    width:99%;
    grid-template-columns: 48% 48%  ;
}   


`

export const ImageTestForGrid = styled.img`
width:30px;
height:30px;
// background:white;
position:relative;
right:5px;

`

export const ImageTestForGridKnitwear = styled.img`
width:30px;
height:35px;
// background:white;
position:relative;
right:5px;
top:1px;
`

export const ImageTestForGridSweatshirts= styled.img`
width:35px;
height:35px;
// background:white;
position:relative;
right:0px;
top:1px;
`

export const ImageTestForGridSweatTwoPieces= styled.img`
width:35px;
height:35px;
// background:white;
position:relative;
right:0px;
top:1px;
`

export const ImageTestForGridSweatBottoms= styled.img`
width:32px;
height:35px;
// background:black;
position:relative;
right:5px;
top:1px;
`

export const ImageTestForGridSweatJewelry = styled.img`
width:35px;
height:35px;
// background:black;
position:relative;
right:5px;
top:1px;
`

export const ImageTestForGridSweatShoes = styled.img`
width:37px;
height:35px;
// background:black;
position:relative;
right:5px;
top:1px;
`



export const GridItems = styled.div`
width:100%;
height:auto;
min-height:90px;
position:relative;
border-radius:3%;
// background:#e3e3e3;
background:#eeeeee;
// border:1px solid black;
text-align:center;
align-items:center;
display:flex;
justify-content: center;
// left:30%;
z-index:5;
cursor:pointer;
color:black;
margin-top:10px;
font-weight:bold;

@media screen and (max-width: 786px) {
    position:relative;
    margin-top:10px;
    width:100%;
    font-size:14px;
}   

@media screen and (max-width: 556px) {
    position:relative;
    margin-top:10px;
    width:100%;
}   

`

export const GridItemPhoto = styled.img`
width:50px;
height:100px;
position:relative;
z-index:1;
`

export const CarusellaContainer = styled.div`
width:100%;
height:auto;
min-height:100%;
background:#e3e3e3;
display:flex;
position:relative;
justify-content: center;
text-align:center;
align-items:center;

// @media screen and (max-width: 682px) {
//     width:100%;
//     height:400px;
// }   
`

export const CarusellaWrapper = styled.div`
width:100%;
background:white;
// height:100px;
// min-height:150px;
`

export const StyledGalleryContainer = styled.div`
width:100%;
height:100%;
background:white;
`

export const TabStyleGalleryContainer = styled.div`
width:100%;
height:100%;

`


