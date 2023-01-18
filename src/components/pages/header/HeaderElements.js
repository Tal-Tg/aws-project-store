import styled from 'styled-components'



export const HeaderContainer = styled.div`
// background:#005689;
background:white;
position:fixed;
border-box:auto;
width:100%;
height:55px;
z-index:10;

box-shadow: 0px 0px 5px 0px grey;

`

export const HeaderWrapperGrid = styled.div`
display: grid;
grid-template-columns: 25% 35% auto;
grid-gap: 10px;
width:100%;
height:100%;
`

export const LogoDivPart1 = styled.div`
width:100%;
height:100%;
background:inherit;
position:relative;
white-space: nowrap;
overflow: hidden;
`

export const LogoText = styled.div`
width:100%;
position:relative;
color:black;
font-weight:bold;
font-size:30px;
left:20px;
top:5px;
white-space: nowrap;
overflow: hidden;
cursor:pointer;
font-family: Cairo,Arial,Helvetica,sans-serif;

@media only screen and (max-width: 540px) {
    font-size:20px;
    top:10px;
}

@media only screen and (max-width: 380px) {
    font-size:16px;
    top:12px;
}

@media only screen and (max-width: 312px) {
    font-size:16px;
    top:12px;
    left:10px;
}


`


export const HeaderLogoImage = styled.img`
width:20%;
height:100%;

`

export const SearchDivPart2 = styled.div`
width:100%;
height:100%;
background:inherit;
position:relative;
top:2px;
`

export const IconsDivPart3 = styled.div`
width:100%;
height:100%;
background:inherit;
position:relative;
`

export const IconsDivPart3Wrapper = styled.div`
display: grid;
grid-template-columns: 25% 17% 0% auto;
grid-gap: 20px;
width:30%;
height:100%;
position:relative;
top:-10px;




@media only screen and (max-width: 779px) {
    display:none;
}

`

export const IconsDivForFriendsReq = styled.div`
width:100%;
height:100%;
background:inherit;
text-align:center;
`

export const IconFriendsReq = styled.div`
position:relative;
color:white;
font-size:30px;
top:12px;
left:10px;
// width:20%;
cursor:pointer;
`

export const IconsDivForMessages = styled.div`
width:100%;
height:100%;
background:inherit;
text-align:center;
`

export const IconMessages = styled.div`
position:relative;
color:white;
font-size:30px;
top:12px;
left:5px;
// width:20%;
cursor:pointer;

`


export const IconsDivForAlerts = styled.div`
width:100%;
height:100%;
background:inherit;
text-align:center;
`

export const IconAlerts = styled.div`
position:relative;
color:white;
font-size:30px;
top:12px;
left:0px;
// width:20%;
cursor:pointer;

`


export const DivForUserPhoto = styled.div`
width:50%;
height:80%;
background:inherit;
position:relative;
left:30%;
text-align:center;
`

export const DivForUserPhotoWrapper = styled.div`
width:40px;
height:40px;
background:inherit;
text-align:center;
border-radius:50%;
top:10px;
left:90%;
// padding:10px 0px 0px 0px;
position:relative;
// border:1px solid white;
// padding:0.5px;
`

export const UserPhoto = styled.img`
width:100%;
height:100%;
border-radius:50%;
cursor:pointer;

`


export const MenuDivForIcon = styled.div`
display:none;

@media only screen and (max-width: 1025px) {
    display:flex;
    width:100%;
    height:100%;
    background:inherit;
    text-align:center;
    margin-top:10px;
    
}

`

export const MenuIcon = styled.div`
color:white;
width:20%;
height:100%;
font-size:30px;
position:relative;
top:20px;
left:50%;
z-index:2;



@media only screen and (max-width: 1025px) {
    left:80%;
    
}

@media only screen and (max-width: 779px) {
    left:70%;
}

@media only screen and (max-width: 457px) {
    left:50%;
    font-size:30px;
}


`


