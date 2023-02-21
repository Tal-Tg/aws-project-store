import styled from 'styled-components'


export const MenuWrapper = styled.div`
background:white;
width:100%;
height:100%;
left:0px;
top:55px;
position:fixed;
z-index:8;
color:black;
animation-duration: 0.5s;
animation-name: slidein;
justify-content: center;
align-items: center;
text-align:center;

@keyframes slidein {
    from {
    margin-left: 100%;
    width: 300%;
    }

    to {
    margin-left: 0%;
    width: 100%;
    }
}

@media only screen and (min-width: 779px) {
    display:none;
}


`

export const MenuWrapperReverse = styled.div`
background:white;
height:100%;
left:0px;
position:fixed;
z-index:7;
color:black;
animation-duration: 0.3s;
animation-name: slideinReverse;

@keyframes slideinReverse {
    from {
    margin-left: 0%;
    width: 100%;
    }

    to {
    margin-left: 100%;
    width: 100%;
    }
}

@media only screen and (min-width: 779px) {
    display:none;
}


`

export const MenuIcon = styled.div`
color:black;
// width:80%;
height:5%;
font-size:30px;
position:fixed;
top:12px;
left:50%;
display:none;

// @media only screen and (max-width: 1025px) {
//     display:none;
// }

// @media only screen and (max-width: 1025px) {
//     left:93%;
//     display:flex;
// }

@media only screen and (max-width: 779px) {
    left:90%;
    display:flex;
    z-index:100;
    
}

@media only screen and (max-width: 457px) {
    left:87%;
    font-size:30px;
}
`

export const MenuExitIcon = styled.div`
color:black;
// width:80%;
height:5%;
font-size:44px;
position:relative;
top:-18px;
font-weight:200;
z-index:8;
top:50px;

@media only screen and (max-width: 1025px) {
    left:2%;
}

@media only screen and (max-width: 779px) {
    left:90%;
}

@media only screen and (max-width: 457px) {
    left:90%;
    font-size:45px;
}
`

export const TabMenu = styled.div`
width:100%;
// height:20px;
margin-bottom:-20px;
background:white;

// overflow-X: scroll;
overflow-Y: scroll;
display: grid;
// grid-template-columns: 80px 80px 80px 80px 80px;
grid-template-columns: auto auto auto auto auto auto auto auto auto ;
grid-gap: 30px;
text-align:center;
align-items:center;
position:relative;
top:0px;
padding-right:10px;
padding-left:10px;
`

export const TabMenuItem = styled.div`
width:100%;
height:100%;
background:white;
// position:relative;
left:1px;

text-align:center;
justify-content: center;
align-items:center;
display:flex;
cursor:pointer;
transition: .3s;
line-height:43px;
color:black;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
font-size:14px;
color:grey;
padding-bottom: 0px;
transition: .10s;


https://stackoverflow.com/questions/56268163/how-to-slide-line-in-css

&::after{
    content: "";
    background: blue;
    height: 1px;
    position: absolute;
    bottom: 0;
    transition: .16s all 0.025s;
    left: 100%;
    right: 0;
}

&:hover{
    transition: .10s;
    background:none;
    color:black;
    font-weight:700;
    // border-bottom:6px solid black;
    // text-decoration:underline;
    // text-decoration-thickness: 3px;
    // text-decoration-style: solid;
    left: 0;
    right: 100%;

}
`


export const MenuItemsWrapperGrid = styled.div`
width:100%;
height:83%;
background:white;
display: grid;
grid-template-columns: 100%;
grid-gap: 4px;
// text-align:center;
// align-items:center;
// justify-content:center;
// overflow-x: auto;
overflow: auto;
position:fixed;
transition: .16s all 0.025s;
// overflow:hidden;
box-sizing: border-box;
`


export const MenuGridItem = styled.div`
width:100%;
// height:100%;
background:white;
`

export const MenuGridItemWrapper = styled.div`
width:100%;
height:100%;
// display:flex;
display: grid;
// grid-template-columns: 80px 80px 80px 80px 80px;
grid-template-columns: 18% 65% 10%;
grid-gap:10px;
color:white;
align-items:center;
text-align:left;
transition: .16s all 0.025s;
color:black;
font-weight:500;
font-size:15px;
`


export const MenuCircleDiv = styled.div`
background:white;
border-radius:50%;
width:55px;
height:55px;
position:relative;
// top:30px;
margin-left:10px;
transition: .16s all 0.025s;
text-align:center;
align-items:center;
justify-content:center;
overflow:hidden;

`