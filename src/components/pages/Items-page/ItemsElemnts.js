import styled from "styled-components";
import { Link } from "react-router-dom";
import { style } from "@mui/system";

export const DivForHeader = styled.div`
height:7.4vh;
width:100%;
`

export const DivForSomething = styled.div`
width:100%;
height:20vh;
background:white;
justify-content:center;
align-items:center;
text-align:center;
display:flex;


`

export const DivForSomethingWrapper = styled.div`
width:92%;
height:80%;
background:#f6f6f6;
padding:20px;


`

export const DivForSomethingH1 = styled.div`
width:100%;
height:auto;
font-family: Cairo,Arial,Helvetica,sans-serif;
font-size: 20px;
font-weight:bold;
text-align:right;
direction:rtl;
`

export const ItemsContainer = styled.div`
width:100%;
min-height:100vh;
height:auto;
background:white;
justify-content:center;
display:flex;



`

export const ItemsWrapper = styled.div`
width:95%;
height:auto;
background:white;
// overflow-X: scroll;
display: grid;
grid-template-columns: 80% 250px;
grid-gap: 20px;

@media screen and (max-width: 1250px) {
    grid-template-columns: 75% 240px;
}   

@media screen and (max-width: 1200px) {
    grid-template-columns: 75% 230px;
    width:95%;
}   

@media screen and (max-width: 950px) {
    grid-template-columns: 65% 220px;
    width:95%;
}   

@media screen and (max-width: 725px) {
    grid-template-columns: 60% 240px;
    width:95%;
}   

@media screen and (max-width: 667px) {
    grid-template-columns: 100% 240px;
    width:95%;
    // overflow-X: scroll;
}   

@media screen and (max-width: 400px) {
    grid-template-columns: 100% 240px;
    width:95%;
    // overflow-X: scroll;
}   

@media screen and (max-width: 370px) {
    grid-template-columns: 100% 240px;
    width:95%;
    // overflow-X: scroll;
}  


@media screen and (max-width: 330px) {
    grid-template-columns: 100% 240px;
    width:95%;
    // overflow-X: scroll;
}  


@media screen and (max-width: 300px) {
    grid-template-columns: 100% 240px;
    width:95%;
    // overflow-X: scroll;
}  

// @media screen and (max-width: 500px) {
//     grid-template-columns: 90% 240px;
//     width:95%;
//     overflow-X: scroll;
// }   

// @media screen and (max-width: 525px) {
//     grid-template-columns: 80% 240px;
//     width:95%;
//     overflow-X: scroll;
// }   

// @media screen and (max-width: 500px) {
//     grid-template-columns: 60% 240px;
//     width:95%;
//     overflow-X: scroll;
// }   

// @media screen and (max-width: 1255px) {
//     grid-template-columns: 75% 250px;
    
// }   

// @media screen and (max-width: 1105px) {
//     grid-template-columns: 73% 230px;
//     // width:80%;
// }   

// @media screen and (max-width: 1105px) {
//     grid-template-columns: 71% 220px;
//     // width:80%;
// }

// @media screen and (max-width: 950px) {
//     overflow-X: scroll;
// }   

// @media screen and (max-width: 870px) {
//     grid-template-columns: 68% 220px;
//     // width:80%;
//     grid-gap: 0px;
// }   


// @media screen and (max-width: 696px) {
//     grid-template-columns: 50% 220px;
//     width:80%;
//     grid-gap: 0px;
// }   



// @media screen and (max-width: 472px) {
//     grid-template-columns: 30% 200px;
//     width:10%;
//     grid-gap: 0px;
// }   

// @media screen and (max-width: 400px) {
//     grid-template-columns: 60% 220px;
//     width:100%;
//     grid-gap: 0px;
//     overflow-X: scroll;
// }   
`

export const ItemsGridContainer  = styled.div`
width:100%;
height:auto;
background:white;
align-items:center;
justify-content:center;
text-align:center;
display:flex;
padding:20px;
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 10px;



@media screen and (max-width: 1250px) {
    grid-template-columns: auto auto auto ;
}   

@media screen and (max-width: 950px) {
    grid-template-columns: auto auto ;
}   

@media screen and (max-width: 725px) {
    grid-template-columns: 50% 50%;
}   

@media screen and (max-width: 667px) {
    grid-template-columns: auto auto;
}   

@media screen and (max-width: 445px) {
    
    grid-template-columns: 55% 55%;
}   

@media screen and (max-width: 400px) {
    // grid-template-columns: 100%;
}   

// @media screen and (max-width: 1285px) {
//     grid-template-columns: auto auto auto ;
// }   

// @media screen and (max-width: 1285px) {
//     grid-template-columns: auto auto auto ;
// }   

// @media screen and (max-width: 957px) {
//     grid-template-columns: auto auto auto;
// }   


// @media screen and (max-width: 696px) {
//     grid-template-columns: auto;
//     // width:80%;
    
// }   
`



export const ItemsMenuFilter = styled.div`
// width:100%;
overflow-Y: scroll;
min-height:100vh;
max-height:150vh;
height:auto;
// display: grid;
// grid-template-columns: 100%;
grid-gap: 0px;
position:relative;
background:white;
// float:right;
right:15px;


@media screen and (max-width: 667px) {
    display:none;
}   



`

export const ItemMenuList = styled.div`
width:100%;
height:auto;
background:white;
// margin-top:1px;
justify-content:center;
text-align:center;

`
export const ItemMenuListOpen  = styled.div`
width:100%;
height:auto;
`

export const ItemMenuListOpenItemDiv = styled.div`
width:100%;
height:100%;
background:white;
// display:grid;
grid-gap: 0px;
position:relative;
direction:rtl;
padding:5px;
display: grid;
grid-template-columns: 80% 250px;
grid-gap: 20px;
`

export const ItemMenuListOpenItemDivInput = styled.div`
width:100%;
height:100%;
cursor:pointer;
`

export const ItemMenuListOpenItemDivIcon = styled.div`
width:100%;
height:100%;
cursor:pointer;
`


export const ItemMenuListOpenItemDivText = styled.label`
position:relative;
direction:rtl;
cursor:pointer;
right:10px;
color:#767676;
font-size:13px;
top:-2px;
font-weight:500;


@media screen and (max-width: 550px) {
    font-size:11px;
}   

`

export const SubItemOpenDiv3Items = styled.div`
height:30%;
width:100%;
padding-right:20px;

`

export const SubItemOpenDiv4Items = styled.div`
height:53%;
width:100%;
padding-right:20px;
padding-bottom:40px;
`

export const SubItemsOpenDivSize = styled.div`
height:55%;
width:100%;
// padding-right:20px;
// padding-bottom:40px;
background:white;
padding:10px;
display: grid;
grid-template-columns: 45% 45%;
grid-gap: 0px;
justify-content:center;
text-align:center;

`


export const SubItemsOpenDivSizeItem = styled.div`
width:100%;
// background:red;
height:100%;
// direction:rlt;
// display:flex;
text-align:right;
justify-content:right;
padding:5px;
font-weight:500;
`


export const SubItemsOpenDivColor = styled.div`
height:55%;
width:100%;
// padding-right:20px;
// padding-bottom:40px;
background:white;
padding:10px;
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;
grid-gap: 5px;
justify-content:center;
text-align:center;
direction:rtl;


`

export const SubItemsOpenDivColorItem = styled.div`
width:100%;
background:white;
height:100%;
// direction:rlt;
// display:flex;
text-align:center;
justify-content:center;
padding:5px;
font-weight:500;


`

export const SubItemsOpenDivColorItemImg = styled.img`
width:60%;
border-radius:50%;
padding:1.5px;
border:1px solid #ececec;

&:hover{
    border:1px solid black;
    cursor:pointer;

}

`

export const SebShowMoreDiv = styled.div`
width:100%;
height:100%;
background:white;
direction:rtl;
padding-right:25px;
padding-bottom:5px;
padding-top:5px;
cursor:pointer;
color:black;
font-size:13px;
top:-2px;
font-weight:bold;
`





export const ItemMenuStyleOpen = styled.div`
width:100%;
height:45px;
background:white;
display: grid;
grid-template-columns: 20% 70%;
grid-gap: 10px;
position:relative;
text-align:center;
justify-content:center;
text-align:center;
cursor:pointer;
`

export const ItemMenuStyleClose = styled.div`
width:100%;
height:45px;
background:white;
display: grid;
grid-template-columns: 20% 70%;
grid-gap: 10px;
position:relative;
text-align:center;
justify-content:center;
text-align:center;
cursor:pointer;
`

export const ItemMenuStyleCloseText = styled.div`
width:100%;
height:100%;
background:white;
align-items:center;
justify-content:right;
text-align:center;
display:flex;
font-weight:bold;


`

export const ItemMenuStyleCloseIconDiv = styled.div`
width:100%;
height:100%;
background:white;
align-items:center;
justify-content:center;
text-align:center;
display:flex;
font-weight:bold;
font-size:15px;
`






export const ItemMenuDivSeparate = styled.div`
height:10px;
background:white;
width:100%;

`

export const ItemMenuDivContainerList = styled.ul`
width:100%;
height:100%;
background:green;
direction:rtl;
`

export const ItemMenuDivLIList = styled.li`
width:100%;
height:50px;
background:green;
`







export const PageLinkContainer = styled.div`
width:100%;
height:8vh;
background:white;
align-items:center;
justify-content:center;
text-align:center;
display:flex;

@media screen and (max-width: 780px) {
    display:none;
}   


`

export const PageLingWrapper = styled.div`
width:95%;
height:100%;
background:white;
align-items:center;
justify-content:right;
text-align:center;
display:flex;
padding:20px;
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 10px;

`

export const Test = styled(Link)`
color:#767676;
&:hover{
    text-decoration:underline;
    cursor:pointer;
    color:black;
}
` 

export const LinkItemDiv = styled.div`
width:100%;
height:100%;
background:white;
color:#767676;
font-family: Cairo,Arial,Helvetica,sans-serif!important;

&:hover{
    text-decoration:underline;
    cursor:pointer;
    color:black;
}

`


export const SplitLineLinks = styled.div`
width:100%;
height:100%;
background:white;
position:relative;
top:0px;
font-size:13px;

`



