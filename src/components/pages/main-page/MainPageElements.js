import styled from 'styled-components'


export const MenuWrapper = styled.div`
background:white;
width:100%;
height:100%;
left:0px;
top:50px;
position:fixed;
z-index:7;
color:black;
animation-duration: 0.8s;
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
animation-duration: 0.8s;
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
height:40px;
background:white;
overflow-X: scroll;
display: grid;
grid-template-columns: 80px 80px 80px 80px 80px;
grid-gap: 20px;
text-align:center;
align-items:center;


`

export const TabMenuItem = styled.div`
width:100%;
height:100%;
background:white;
position:relative;
left:1px;
top:3px;
text-align:center;
justify-content: center;
align-items:center;
display:flex;
cursor:pointer;
transition: .3s;
line-height:43px;
color:black;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
font-size:15px;
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
    font-weight:600;
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
height:1000px;
background:white;
display: grid;
grid-template-columns: 100%;
grid-gap: 30px;
// text-align:center;
// align-items:center;
// justify-content:center;
overflow-x: auto;
overflow-y: hidden;
`

export const MenuGridItem = styled.div`
width:100%;
height:100%;
background:yellow;
display:flex;

`


