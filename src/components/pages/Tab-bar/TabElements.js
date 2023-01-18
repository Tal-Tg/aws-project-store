import styled from 'styled-components'


export const TabDivForHeader = styled.div`
width:100%;
height:55px;


`

export const TabContainer = styled.div`
width:100%;
position:relative;
border-box:auto;
display:flex;
height:50px;
justify-content:center;
background:#5c636e;
`

export const TabWrapper = styled.div`
width:100%;
display: grid;
background:#5c636e;
grid-template-columns: auto auto auto auto auto auto auto;
grid-gap: 10px;
`

export const TestSpan = styled.span`
display:none;
position:absolute;
width:100%;
height:50px;
margin-top:100px;
background:red;



`

export const TabItemsDiv = styled.div`
width:90%;
text-align:center;
height:100%;
background:inherit;
justify-content: center;
align-items: center;
position:relative;
display: flex;
cursor:pointer;
transition:0.3s;
padding: 0 0px 0 0px;
font-size:13px;
font-weight:600;
color:white;

    &:hover{
        // background:white;
        transition:0.3s;
        color:black;
    }

border-radius:10px;

`



export const TabActiveItemDiv = styled.div`
width:100%;
text-align:center;
height:100%;
background:black;
justify-content: center;
align-items: center;
position:relative;
display: flex;
cursor:pointer;
transition:0.3s;
font-size:13px;
font-weight:600;
color:white;

&:onActive{
    transition:0.3s;
}
`