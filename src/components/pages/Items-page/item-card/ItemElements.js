import styled from "styled-components"


export const DivForText = styled.a`
text-decoration: none;
cursor: pointer;
display: block;
width: 100%;
color: #767676;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
position:relative;
font-size:12px;
font-weight:500;
top:-8px;
text-align:right;

&:hover{
    color:black;
}
`

export const DivForPrice = styled.div`
// text-decoration: none;
// cursor: pointer;
width: 100%;
color: #222;
// overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
position:relative;
font-size:15px;
font-weight:bold;
top:0px;
margin-bottom:-10px;
text-align:right;
direction:rtl;
display: inline-block;


// &:hover{
//     color:black;
// }




@media screen and (max-width: 513px) {
    font-size:12px;
} 

`

export const TestDivDisappear = styled.div`

display:none;

// &:visible{
//     font-size: 30px;
//     background: transparent;
//     text-align: center;
//     color: red;
//     }

    // &:hover{
    //     display:flex;
    //     width:50%;
    //     position:relative;
    //     height:50px;
    //     cursor:pointer;
    //     z-index:10;
    // }

    // &:hidden{
    //     border: 1px solid #ccc;
    //     display: none;
    //     font-size: 25px;
    //     margin-top: 20px;
    //     padding: 5px;
    //     text-transform: uppercase;
    //     }




`

export const ItemDivContainerGrid = styled.div`
width:100%;
height:auto;
background:white;
// overflow-X: scroll;
display:flex;
justify-content: center;
align-items: center;
text-align:center;

`

export const ItemDivWrapperGrid = styled.div`
width:95%;
height:auto;
// background:white;
// overflow-X: scroll;
display: grid;
grid-template-columns: 50% 45%;
grid-gap: 20px;

`

export const ItemDivGrid = styled.div`
background:white;
`

export const ItemDivGridIconDiv = styled.div`
background:white;
width:100%;
height:100%;
justify-content:left;
align-items:left;
text-align:left;
`


export const ItemDivGridIcon = styled.div`
background:white;
width:100%;
height:100%;
padding-left:0px;
cursor:pointer;
z-index:10;
`

