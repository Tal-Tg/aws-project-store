import styled from 'styled-components'


export const CarousellaContainer = styled.div`
width:100%;
min-height:350px;
background:white;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
margin-bottom:50px;
overflow-X: scroll;


@media screen and (max-width: 1000px) {
    display:none;
}   


`

export const CarousellaContainerAfter1000px = styled.div`
display:none;

@media screen and (max-width: 1000px) {
width:100%;
min-height:350px;
background:white;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
margin-bottom:50px;
overflow-X: scroll;
}   

@media screen and (max-width: 500px) {
    min-height:100px;
    margin-bottom:40px;
}   

`

export const CarousellaWrapper = styled.div`
width:100%;
height:100%;
background:white;
display: grid;
grid-template-columns: 30px auto 30px;
grid-gap:1px;


`

export const DivNextButton = styled.div`
width:30px;
background:white;
height:100%;
justify-content: center;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
float:right;
`

export const DivNextButtonIcon = styled.div`
width:100%;
// height:100%;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
font-size:28px;
cursor:pointer;

&:hover{
    // color:#d9dad7;
}

`


export const DivBackButton = styled.div`
width:30px;
background:white;
height:100%;
justify-content: center;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
float:left;

`

export const DivBackButtonIcon = styled.div`
width:100%;
// height:100%;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
font-size:28px;
cursor:pointer;

&:hover{
    // color:#d9dad7;
}

`


export const DivForGridPhotos = styled.div`
// left:30px;
background:white;
width:100%;
// height:100%;
position:relative;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
// position:absolute;


`

export const DivForGridPhotosAfter1000px = styled.div`
// left:30px;
background:white;
width:100%;
// height:100%;
position:relative;
justify-content: center;
align-items:center;
text-align:center;
display:flex;
// position:absolute;
`

export const CarousellaItemsGridAfter100px = styled.div`
width:100%;
height:100%;
display: grid;
grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
grid-gap:10px;
padding:10px;
`


export const CarousellaItemsGridAnimationRight = styled.div`
width:100%;
height:100%;
// background:black;
display: grid;
grid-template-columns: auto auto auto auto auto auto;
grid-gap:10px;
overflow:hidden;


animation-name: fadeInRight;
animation-duration: 0.20s;

@keyframes fadeInRight {
    0% {
        opacity:0;
        transform:translateX(1000px);
        // position:absolute;
    }
    100% {
        opacity:1;
        transform:translateX(0);
    }

    }

    // @media screen and (max-width: 1000px) {
    //     grid-template-columns: auto auto auto ;
    // }   

    // @media screen and (max-width: 450px) {
    //     grid-template-columns: auto auto  ;
    // }   

`

export const CarousellaItemsGridAnimationLeft = styled.div`
width:100%;
height:100%;
// background:black;
display: grid;
grid-template-columns: auto auto auto auto auto auto;
grid-gap:10px;
overflow:hidden;


animation-name: fadeInLeft;
animation-duration: 0.20s;

@keyframes fadeInLeft {
    0% {
        opacity:0;
        transform:translateX(-1000px);
        // position:absolute;
    }
    100% {
        opacity:1;
        transform:translateX(0);
        
    }

    }

    // @media screen and (max-width: 1000px) {
    //     grid-template-columns: auto auto auto ;
    // }   

    // @media screen and (max-width: 450px) {
    //     grid-template-columns: auto auto  ;
    // }   

`



export const CarousellaItemDiv = styled.div`
// width:200px;
width:100%;
// height:200px;
background:white;



`


export const ImageItem = styled.img`
width:100%;
height:300px;



@media screen and (max-width: 1000px) {
    width:200px;
}   

@media screen and (max-width: 500px) {
    width:130px;
    height:170px;
}   

// @media screen and (max-width: 1000px) {
//     height:200px;
// }   

cursor:pointer;
`


export const HeaderItem = styled.div`
font-size:15px;
font-weight:700;
text-align:right;
direction:rtl;
color: #fa6338;
`