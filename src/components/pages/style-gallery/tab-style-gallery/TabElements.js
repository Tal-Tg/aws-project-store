import styled from "styled-components";



export const TabContainer = styled.div`
width:100%;
height:80px;
background:white;
`

export const TabWrapper = styled.div`
width:100%;
// height:100%;
height:100%;
background:white;
display: grid;
grid-template-columns: 75px 115px 150px 130px 85px 120px 160px 185px 130px 140px;
grid-gap:10px;
text-align:center;
align-items:center;
box-sizing: border-box;
overflow-Y: scroll; 
`

export const TabItems = styled.div`
width:100%;
height:50px;
background:red;
border-radius:28px;
text-align:center;
align-items:center;
justify-content:center;
display:flex;
color: #fff;
line-height: 48px;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
font-size:14px;
box-sizing: border-box;
cursor:pointer;
opacity: 0.9;

@media screen and (max-width: 642px) {
    position:relative;
    left:1%;
    width:98%;

}  

@media screen and (max-width: 550px) {
    font-size:12px;
    height:45px;
    width:100%;

}   

`