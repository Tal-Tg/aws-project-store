import styled from "styled-components"


export const MenuContainer = styled.div`
display:none;



@media only screen and (max-width: 779px) {
background:white;
width:100%;
position:fixed;
height:7vh;
bottom:0px;
display:flex;
z-index:5;




}

@media only screen and (max-width: 391px) {
    background:white;
    width:100%;
    position:fixed;
    height:6vh;
    bottom:0px;
    display:flex;
    z-index:5;
    
    
    }
    @media only screen and (max-width: 389px) {
        background:white;
        width:100%;
        position:fixed;
        height:7vh;
        bottom:0px;
        display:flex;
        z-index:5;
        
        
        }


`

export const ItemAnimationDiv = styled.div`
// color:black;

transition-duration: 1s;
width:100%;
height:100%;
// background:black;
animation-name:animationActive;
animation-duration:0.2s;
opacity:1;
color:black;
@keyframes animationActive {
    from {
        color:grey;
        opacity:0.8;
    }
    to {
        color:black;
    }
}
`

export const ItemAnimationDivBack = styled.div`
// color:black;
width:100%;
height:100%;
// background:black;
animation-name:animationNonActive;
animation-duration:0.2s;
color:grey;
opacity:1;
@keyframes animationNonActive {
    from {
        color:black;
        opacity:0.6;
    }
    to {
        color:grey;
    }
}
`




export const ItemAnimationTitle = styled.div`
// font-family: serif;
font-family: system-ui;
animation-name:animationTitleActive;
// font-size:19px;
animation-duration:0.2s;
opacity:1;
color:black;
font-weight:500;
@keyframes animationTitleActive {
    from {
        color:grey;
        opacity:0.8;
    }
    to {
        color:black;
    }
}
`

export const ItemAnimationTitleNonActive = styled.div`
// font-family: serif;
font-family: system-ui;
animation-name:animationTitleNonActive;
// font-size:19px;
animation-duration:0.2s;
opacity:1;
color:grey;
font-weight:500;
@keyframes animationTitleNonActive {
    from {
        color:black;
        opacity:0.8;
    }
    to {
        color:grey;
        
    }
}
`





export const MenuWrapper = styled.div`
width:100%;
height:100%;
background:white;
border-top:1px solid grey;
display:grid;
grid-template-columns: 22% 22% 22% 22%;
grid-gap: 7px;
text-align:center;
align-items:center;
justify-content:center;


`

export const ItemMenuDiv = styled.div`
width:100%;
height:100%;
text-align:center;
align-items:center;
justify-content:center;
// border:1px solid black;
// font-size:26px;
display:grid;
grid-template-columns: 100%;
grid-gap: 7px;
text-align:center;
align-items:center;
justify-content:center;

`