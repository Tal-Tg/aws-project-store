import styled from 'styled-components';


export const CommentContainer = styled.div`
width:100%;
// height:100%;
background:white;
justify-content:center;
text-align:center;
items-align:center;
display:flex;

`


export const CommentWrapper = styled.div`
margin-top:170px;
width:90%;
background:white;
text-align:center;
align-items:center;
justify-content:center;
margin-bottom:50px;
// display:flex;
`

export const CommentTitle = styled.div`
width:95%;
font-size:25px;
font-weight:700;
text-align:right;

@media only screen and (max-width: 500px) {
    font-size:15px;
}
`

export const DivForSomethingWrapper = styled.div`
width:100%;
position:relative;
// right:60px;
// height:100%;
background:#f6f6f6;
display:flex;
padding:20px;
display: grid;
grid-template-columns: auto auto;
grid-gap: 10px;
// display:flex;
// float:right;
margin-top:20px;

@media only screen and (max-width: 500px) {
    grid-template-columns: auto ;
}

`

export const DivForSomethingH1 = styled.div`
width:100%;
height:auto;
font-family: Cairo,Arial,Helvetica,sans-serif;
font-size: 17px;
font-weight:400;
text-align:right;
direction:rtl;

@media only screen and (max-width: 500px) {
    font-size:15px;
    text-align:center;
}

`

export const HeaderDoesFitWellPresentHeader = styled.div`
font-size: 15px;
font-weight:500;
direction:rtl;

@media only screen and (max-width: 500px) {
    font-size:13px;
}
`



export const SmallSizeQuestion = styled.div`
font-size:13px;
padding:2px;
display:flex;
justify-content:center;
direction:rtl;
text-align:center;
align-items:center;
// float:right;
width:100%;
// height:100%;

@media only screen and (max-width: 500px) {
    font-size:13px;
}
`

export const SmallSizeQuestion2 = styled.div`
font-size:12px;
// font-size:13px;
padding:2px;
display:flex;
justify-content:center;
direction:rtl;
text-align:center;
align-items:center;
// float:right;
width:100%;
// height:100%;
position:relative;
left:10px;

@media only screen and (max-width: 500px) {
    font-size:13px;
}

`



export const DivForProductFitPercentage= styled.div`
width:150px;
position:relative;
top:1px;
height:10px;
background:white;
border-radius:10px 10px 10px 10px;
// margin-right:10px;
margin:10px;
// margin-left:10px;
`

export const DivForProductNotFitPercentage= styled.div`
width:150px;
position:relative;
top:1px;
height:10px;
background:white;
border-radius:10px 10px 10px 10px;
// margin-right:10px;
// margin-left:29px;
// padding:10px;
margin:10px;
`

export const DivForProductNotFitPercentageFill = styled.div`
// width:150px;
width:100%;
position:relative;
// top:1px;
height:7px;
background:black;
border-radius:10px 10px 10px 10px;
// margin-right:10px;
// margin:10px;
// margin-left:10px;
`

export const DivForProductFitPercentageFill = styled.div`
// width:150px;
width:100%;
position:relative;
// top:1px;
height:7px;
background:black;
border-radius:10px 10px 10px 10px;
// margin-right:10px;
// margin:10px;
// margin-left:10px;
`