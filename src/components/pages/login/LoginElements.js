import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderLogin = styled.div`
background:#22313f;
height:8vh;
width:100%;
`

export const HeaderLoginIcon = styled.img`
width:35px;
height:35px;
position:relative;
top:12px;
left:20px;
`

export const LoginImage = styled.img`
width:100%;
height:80vh;
position:relative;
top:4px;
`

export const LoginFooter = styled.div`
background:#22313f;
height:11.4vh;
width:100%;
`

export const LoginDetailsContainer = styled.div`
width:30%;
height:58vh;
position:absolute;
background:white;
top:130px;
border-radius:10px;
border:3px solid black;
right:200px;
@media screen and (max-width: 1280px) {
    width:30%;
height:58vh;
position:absolute;
background:white;
top:130px;
border-radius:10px;
border:3px solid black;
right:200px;
}   
@media screen and (max-width: 1024px) {
    width:30%;
height:58vh;
position:absolute;
background:white;
top:130px;
border-radius:10px;
border:3px solid black;
right:200px;
}   
@media screen and (max-width: 913px) {
    width:60%;
height:50vh;
position:absolute;
background:white;
top:240px;
border-radius:10px;
border:3px solid black;
right:170px;
}   
@media screen and (max-width: 821px) {
    width:60%;
height:50vh;
position:absolute;
background:white;
top:240px;
border-radius:10px;
border:3px solid black;
right:150px;
}
@media screen and (max-width: 540px) {
    width:65%;
    height:60vh;
    position:absolute;
    background:white;
    top:150px;
    border-radius:10px;
    border:3px solid black;
    right:90px;
} 
@media screen and (max-width: 415px) {
    width:80%;
height:58vh;
position:absolute;
background:white;
top:130px;
border-radius:10px;
border:3px solid black;
right:32px;
}   
@media screen and (max-width: 376px) {
    width:80%;
height:56vh;
position:absolute;
background:white;
top:130px;
border-radius:10px;
border:3px solid black;
right:32px;
}   
@media screen and (max-width: 280px) {
    width:85%;
    height:60vh;
    position:absolute;
    background:white;
    top:150px;
    border-radius:10px;
    border:3px solid black;
    right:16px;
}   
`

export const LoginHeaderContainer = styled.div`
width:100.4%;
background:#22313f;
border:0px solid black;
height:8vh;
color:white;
position:relative;
border-radius:1px;
justify-content:center;
text-align:center;
@media screen and (max-width: 1280px) {
    width:100.4%;
    background:#22313f;
    border:0px solid black;
    height:10vh;
    color:white;
    position:relative;
    border-radius:1px;
    justify-content:center;
    text-align:center;
}   
@media screen and (max-width: 1024px) {
    width:100.4%;
    background:#22313f;
    border:0px solid black;
    height:9vh;
    color:white;
    position:relative;
    border-radius:1px;
    justify-content:center;
    text-align:center;
}   
@media screen and (max-width: 913px) {
    width:100.8%;
    background:#22313f;
    border:0px solid black;
    height:8vh;
    right:2px;
    color:white;
    position:relative;
    border-radius:3px;
    justify-content:center;
    text-align:center;
}   
@media screen and (max-width: 821px) {
    width:100.8%;
    background:#22313f;
    border:0px solid black;
    height:8vh;
    right:2px;
    color:white;
    position:relative;
    border-radius:3px;
    justify-content:center;
    text-align:center;
}
@media screen and (max-width: 540px) {
    width:100.8%;
    background:#22313f;
    border:0px solid black;
    height:8vh;
    right:2px;
    color:white;
    position:relative;
    border-radius:3px;
    justify-content:center;
    text-align:center;
} 
@media screen and (max-width: 415px) {
    width:100.8%;
    background:#22313f;
    border:0px solid black;
    height:8vh;
    right:2px;
    color:white;
    position:relative;
    border-radius:3px;
    justify-content:center;
    text-align:center;
}   
@media screen and (max-width: 376px) {
    width:100.8%;
    background:#22313f;
    border:0px solid black;
    height:8vh;
    right:2px;
    color:white;
    position:relative;
    border-radius:3px;
    justify-content:center;
    text-align:center;
}   
@media screen and (max-width: 280px) {
    width:101.4%;
    background:#22313f;
    border:0px solid black;
    height:8vh;
    right:2px;
    color:white;
    position:relative;
    border-radius:3px;
    justify-content:center;
    text-align:center;
}   
`

export const LoginHeaderH1 = styled.h1`
color:white;
font-size:30px;
position:absolute;
top:-7px;
justify-content:center;
text-align:center;
background:none;
width:100%;
font-family:Arial,sans-serif;
font-weight:200;
@media screen and (max-width: 1280px) {
    color:white;
    font-size:40px;
    position:absolute;
    top:-7px;
    justify-content:center;
    text-align:center;
    background:none;
    width:100%;
    font-family:Arial,sans-serif;
    font-weight:200;
}   
@media screen and (max-width: 1024px) {
    color:white;
    font-size:30px;
    position:absolute;
    top:-7px;
    justify-content:center;
    text-align:center;
    background:none;
    width:100%;
    font-family:Arial,sans-serif;
    font-weight:200;
}   
@media screen and (max-width: 913px) {
    color:white;
    font-size:50px;
    position:absolute;
    top:-7px;
    justify-content:center;
    text-align:center;
    background:none;
    width:100%;
    font-family:Arial,sans-serif;
    font-weight:200;
}   
@media screen and (max-width: 821px) {
    color:white;
    font-size:40px;
    position:absolute;
    top:-7px;
    justify-content:center;
    text-align:center;
    background:none;
    width:100%;
    font-family:Arial,sans-serif;
    font-weight:200;
}
@media screen and (max-width: 540px) {
    color:white;
    font-size:30px;
    position:absolute;
    top:-7px;
    justify-content:center;
    text-align:center;
    background:none;
    width:100%;
    font-family:Arial,sans-serif;
    font-weight:200;
} 
@media screen and (max-width: 415px) {
    color:white;
font-size:30px;
position:absolute;
top:-7px;
justify-content:center;
text-align:center;
background:none;
width:100%;
font-family:Arial,sans-serif;
font-weight:200;
}   
@media screen and (max-width: 376px) {
    color:white;
font-size:30px;
position:absolute;
top:-7px;
justify-content:center;
text-align:center;
background:none;
width:100%;
font-family:Arial,sans-serif;
font-weight:200;
}   
@media screen and (max-width: 280px) {
    color:white;
    font-size:25px;
    position:absolute;
    top:-7px;
    justify-content:center;
    text-align:center;
    background:none;
    width:100%;
    font-family:Arial,sans-serif;
    font-weight:200;
}   
`


export const LoginContainerUserInput = styled.input`
height:35px;
position:relative;
top:130px;
margin:auto;
width:50%;
@media screen and (max-width: 1280px) {
    height:45px;
position:relative;
top:130px;
margin:auto;
width:70%;
font-size:20px;
}   
@media screen and (max-width: 1024px) {
    height:35px;
    position:relative;
    top:100px;
    margin:auto;
    width:70%;
    font-size:20px;
}   
@media screen and (max-width: 913px) {
    height:50px;
position:relative;
top:180px;
font-size:30px;
margin:auto;
width:70%;
}   
@media screen and (max-width: 821px) {
    height:50px;
position:relative;
top:150px;
margin:auto;
width:70%;
font-size:25px;
}
@media screen and (max-width: 540px) {
    height:35px;
    position:relative;
    top:130px;
    margin:auto;
    width:60%;
    font-size:17px;
} 
@media screen and (max-width: 415px) {
    height:40px;
    position:relative;
    top:130px;
    margin:auto;
    width:70%;
    font-size:20px;
}   
@media screen and (max-width: 376px) {
    height:35px;
position:relative;
top:100px;
margin:auto;
width:65%;
font-size:15px;
}   
@media screen and (max-width: 280px) {
    height:35px;
position:relative;
top:100px;
margin:auto;
width:70%;
font-size:17px;
}   
`


export const LoginContainerPasswordInput = styled.input`
height:35px;
position:relative;
margin:auto;
width:50%;
top:170px;
@media screen and (max-width: 1280px) {
    height:45px;
    position:relative;
    margin:auto;
    width:70%;
    top:170px;
    font-size:20px;
}   
@media screen and (max-width: 1024px) {
    height:35px;
    position:relative;
    margin:auto;
    width:70%;
    top:140px;
    font-size:20px;
}   
@media screen and (max-width: 913px) {
    height:50px;
position:relative;
font-size:20px;
margin:auto;
width:70%;
top:260px;
font-size:30px;
}   
@media screen and (max-width: 821px) {
    height:50px;
position:relative;
margin:auto;
width:70%;  
top:210px;
font-size:25px;
}
@media screen and (max-width: 540px) {
    height:35px;
    position:relative;
    top:170px;
    margin:auto;
    width:60%;
    font-size:17px;
} 
@media screen and (max-width: 415px) {
    height:40px;
    position:relative;
    top:180px;
    margin:auto;
    width:70%;
    font-size:20px;
}   
@media screen and (max-width: 376px) {
    height:35px;
    position:relative;
    top:140px;
    margin:auto;
    width:65%;
    font-size:15px;
}   
@media screen and (max-width: 280px) {
    height:35px;
    position:relative;
    margin:auto;
    top:140px;
    margin:auto;
    width:70%;
    font-size:17px;
}   
`

export const LoginContainerButton = styled.button`
width:50%;
position:absolute;
top:305px;
right:115px;
padding:5px;
background:#22313f;
border:2px solid black;
color:white;
border-radius:5px;
font-size:25px;
cursor:pointer;
transition:0.3s;
&:hover{
    background:white;
    color:black;
    transition:0.3s;
}
@media screen and (max-width: 1280px) {
    width:70%;
    position:absolute;
    top:330px;
    right:60px;
    padding:5px;
    background:#22313f;
    border:2px solid black;
    color:white;
    border-radius:5px;
    font-size:18px;
    cursor:pointer;
    transition:0.3s;
    
    
    &:hover{
        background:white;
        color:black;
        transition:0.3s;
    }
}   
@media screen and (max-width: 1024px) {
    width:70%;
    position:absolute;
    top:260px;
    right:45px;
    padding:5px;
    background:#22313f;
    border:2px solid black;
    color:white;
    border-radius:5px;
    font-size:18px;
    cursor:pointer;
    transition:0.3s;
    
    
    &:hover{
        background:white;
        color:black;
        transition:0.3s;
    }
}   
@media screen and (max-width: 913px) {
    width:70%;
    position:absolute;
    top:470px;
    right:79px;
    padding:10px;
    background:#22313f;
    border:2px solid black;
    color:white;
    border-radius:5px;
    font-size:28px;
    cursor:pointer;
    transition:0.3s;
    
    
    &:hover{
        background:white;
        color:black;
        transition:0.3s;
    }
}   
@media screen and (max-width: 821px) {
    width:70%;
    position:absolute;
    top:405px;
    right:70px;
    padding:10px;
    background:#22313f;
    border:2px solid black;
    color:white;
    border-radius:5px;
    font-size:24px;
    cursor:pointer;
    transition:0.3s;
    
    
    &:hover{
        background:white;
        color:black;
        transition:0.3s;
    }
}
@media screen and (max-width: 769px) {
    width:70%;
    position:absolute;
    top:380px;
    right:70px;
    padding:10px;
    background:#22313f;
    border:2px solid black;
    color:white;
    border-radius:5px;
    font-size:24px;
    cursor:pointer;
    transition:0.3s;
    
    
    &:hover{
        background:white;
        color:black;
        transition:0.3s;
    }
}
@media screen and (max-width: 540px) {
    width:60%;
    position:absolute;
    top:310px;
    right:70px;
    padding:5px;
    background:#22313f;
    border:2px solid black;
    color:white;
    border-radius:5px;
    font-size:21px;
    cursor:pointer;
    transition:0.3s;
    
    
    &:hover{
        background:white;
        color:black;
        transition:0.3s;
    }
} 
@media screen and (max-width: 415px) {
width:70%;
position:absolute;
top:350px;
right:50px;
padding:8px;
background:#22313f;
border:2px solid black;
color:white;
border-radius:5px;
font-size:20px;
cursor:pointer;
transition:0.3s;
&:hover{
    background:white;
    color:black;
    transition:0.3s;
}
}   
@media screen and (max-width: 376px) {
    width:65%;
position:absolute;
top:270px;
right:52px;
padding:5px;
background:#22313f;
border:2px solid black;
color:white;
border-radius:5px;
font-size:20px;
cursor:pointer;
transition:0.3s;
&:hover{
    background:white;
    color:black;
    transition:0.3s;
}
}   
@media screen and (max-width: 280px) {
    width:70%;
    position:absolute;
    top:270px;
    right:35px;
    padding:5px;
    background:#22313f;
    border:2px solid black;
    color:white;
    border-radius:5px;
    font-size:18px;
    cursor:pointer;
    transition:0.3s;
    
    
    &:hover{
        background:white;
        color:black;
        transition:0.3s;
    }
}   
`

export const LoginForgotPassword = styled.div`
margin:0px;
position:absolute;
top:390px;
left:115px;
color:black;
@media screen and (max-width: 1280px) {
    margin:0px;
    position:absolute;
    top:400px;
    font-size:21px;
    left:40px;
    color:black;
}   
@media screen and (max-width: 1024px) {
    margin:0px;
    position:absolute;
    top:310px;
    font-size:18px;
    left:20px;
    color:black;
}   
@media screen and (max-width: 913px) {
    margin:0px;
    position:absolute;
    top:590px;
    font-size:28px;
    left:70px;
    color:black;
}   
@media screen and (max-width: 821px) {
    margin:0px;
    position:absolute;
    top:500px;
    font-size:25px;
    left:67px;
    color:black;
}
@media screen and (max-width: 769px) {
    margin:0px;
    position:absolute;
    top:455px;
    font-size:25px;
    left:50px;
    color:black;
}
@media screen and (max-width: 540px) {
    margin:0px;
position:absolute;
top:390px;
font-size:18px;
left:45px;
color:black;
} 
@media screen and (max-width: 415px) {
    margin:0px;
    position:absolute;
    top:455px;
    left:20px;
    color:black;
    font-size:20px;
}   
@media screen and (max-width: 394px) {
    margin:0px;
    position:absolute;
    top:440px;
    left:27px;
    color:black;
    font-size:18px;
}   
@media screen and (max-width: 391px) {
    margin:0px;
    position:absolute;
    top:440px;
    left:27px;
    color:black;
    font-size:18px;
}   
@media screen and (max-width: 376px) {
    margin:0px;
    position:absolute;
    top:340px;
    left:42px;
    color:black;
    font-size:15px;
}   
@media screen and (max-width: 361px) {
    margin:0px;
    position:absolute;
    top:370px;
    left:14px;
    color:black;
    font-size:18px;
}   
@media screen and (max-width: 280px) {
    margin:0px;
    position:absolute;
    top:340px;
    font-size:15px;
    left:10px;
    color:black;
}   
`
// export const LoginForgotPasswordLink = styled(NavLink)`
// // text-decoration:none;
// font-weight:600;
// color:#2772db;
// `

export const SpanErrorUserName = styled.p`
color:red;
font-weight:600;
position:absolute;
width:100%;
top:160px;
font-size:15px;
@media screen and (max-width: 1280px) {
    color:red;
    font-weight:600;
    position:absolute;
    width:100%;
    top:170px;
    font-size:15px;
}   
@media screen and (max-width: 1024px) {
    color:red;
    font-weight:600;
    position:absolute;
    width:100%;
    top:130px;
    font-size:15px;
}   
@media screen and (max-width: 913px) {
    color:red;
    font-weight:600;
    position:absolute;
    width:100%;
    top:210px;
    font-size:28px;
}   
@media screen and (max-width: 821px) {
    color:red;
    font-weight:600;
    position:absolute;
    width:100%;
    top:180px;
    font-size:25px;
}
@media screen and (max-width: 540px) {
    color:red;
    font-weight:600;
    position:absolute;
    width:100%;
    top:160px;
    font-size:15px;
} 
@media screen and (max-width: 415px) {
    color:red;
    font-weight:600;
    position:absolute;
    width:100%;
    top:160px;
    font-size:20px;
}   
@media screen and (max-width: 376px) {
    color:red;
    font-weight:600;
    position:absolute;
    width:100%;
    top:130px;
    font-size:15px;
}   
@media screen and (max-width: 280px) {
    color:red;
    font-weight:600;
    position:absolute;
    width:100%;
    top:130px;
    font-size:15px;
}   
`

export const SpanErrorPassword = styled.p`
color:red;
font-weight:600;
font-size:15px;
position:absolute;
width:100%;
top:245px;


@media screen and (max-width: 1280px) {
    color:red;
    font-weight:600;
    position:relative;
    width:100%;
    font-size:15px;
    top:160px;
}   
@media screen and (max-width: 1024px) {
    color:red;
    font-weight:600;
    position:relative;
    width:100%;
    font-size:15px;
    top:130px;
}   
@media screen and (max-width: 913px) {
    color:red;
    font-weight:600;
    position:relative;
    width:100%;
    font-size:28px;
    top:230px;
}   
@media screen and (max-width: 821px) {
    color:red;
    font-weight:600;
    position:relative;
    width:100%;
    font-size:25px;
    top:180px;
}
@media screen and (max-width: 540px) {
    color:red;
    font-weight:600;
    position:relative;
    width:100%;
    font-size:15px;
    top:160px;
} 
@media screen and (max-width: 415px) {
    color:red;
    font-weight:600;
    position:relative;
    width:100%;
    font-size:20px;
    top:160px;
}   
@media screen and (max-width: 376px) {
    color:red;
    font-weight:600;
    position:relative;
    width:100%;
    font-size:15px;
    top:130px;
}   
@media screen and (max-width: 280px) {
    color:red;
    font-weight:600;
    position:relative;
    width:100%;
    font-size:15px;
    top:130px;
}   
`



export const LoginContainer = styled.div`
position:relative;
background:#f8f8f8;
width:100%;
height:745px;

@media screen and (max-width:1025px) {
    position:relative;
    background:#f8f8f8;
    width:100%;
    height:600px;
}   


@media screen and (max-width: 913px) {
    position:relative;
    background:#f8f8f8;
    width:100%;
    height:745px;
}   

@media screen and (max-width: 821px) {
    position:relative;
    background:#f8f8f8;
    width:100%;
    height:745px;
}   

@media screen and (max-width: 540px) {
    position:relative;
    background:#f8f8f8;
    width:100%;
    height:667px;
}   

@media screen and (max-width: 415px) {
    position:relative;
    background:#f8f8f8;
    width:100%;
    height:745px;
}   

@media screen and (max-width: 376px) {
    position:relative;
    background:#f8f8f8;
    width:100%;
    height:667px;
}   

@media screen and (max-width: 281px) {
    position:relative;
    background:#f8f8f8;
    width:100%;
    height:653px;
}   

`

export const LoginWrapper = styled.div`
width:100%;
height:100%;
font-family: sans-serif;
`

export const LoginLogoText = styled.div`
position:absolute;
top:40%;
left:24%;
color:#007cb9;
font-size:50px;
font-weight:bold;
font-family: sans-serif;

@media screen and (max-width:1200px) {
    position:absolute;
    top:40%;
    left:20%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width:1025px) {
    position:absolute;
    top:40%;
    left:10%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 913px) {
    position:absolute;
    top:40%;
    left:10%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 821px) {
    position:absolute;
    top:40%;
    left:10%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 765px) {
    position:absolute;
    top:40%;
    left:2%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 625px) {
    position:absolute;
    top:5%;
    left:32%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 540px) {
    position:absolute;
    top:5%;
    left:33%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   


@media screen and (max-width: 415px) {
    position:absolute;
    top:5%;
    left:25%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 376px) {
    position:absolute;
    top:5%;
    left:23%;
    color:#007cb9;
    font-size:50px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 281px) {
    position:absolute;
    top:5%;
    left:22%;
    color:#007cb9;
    font-size:40px;
    font-weight:bold;
    font-family: sans-serif;
}   
`

export const LoginLogoSubText = styled.div`
position:absolute;
top:49%;
left:24%;
color:#757a79;
font-size:17px;
font-weight:bold;
font-family: sans-serif;

@media screen and (max-width:1200px) {
    position:absolute;
    top:49%;
    left:20%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width:1025px) {
    position:absolute;
    top:49%;
    left:10%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 913px) {
    position:absolute;
    top:49%;
    left:10%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 821px) {
    position:absolute;
    top:49%;
    left:10%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 765px) {
    position:absolute;
    top:49%;
    left:2%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 625px) {
    position:absolute;
    top:14%;
    left:24%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 540px) {
    position:absolute;
    top:14%;
    left:24%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 415px) {
    position:absolute;
    top:12%;
    left:17%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 376px) {
    position:absolute;
    top:14%;
    left:13%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

@media screen and (max-width: 281px) {
    position:absolute;
    top:14%;
    left:10%;
    color:#757a79;
    font-size:17px;
    font-weight:bold;
    font-family: sans-serif;
}   

`

export const LoginDetailsDiv = styled.div`
position:absolute;
top:15%;
left:48%;
border-radius:10px 10px 10px 10px;
background:white;
width:28%;
height:430px;
padding:12px;

@media screen and (max-width:1025px) {
    position:absolute;
    top:12%;
    left:45%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:40%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 913px) {
    position:absolute;
    top:15%;
    left:48%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:40%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 821px) {
    position:absolute;
    top:15%;
    left:48%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:45%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 625px) {
    position:absolute;
    top:25%;
    left:15%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:67%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 540px) {
    position:absolute;
    top:25%;
    left:15%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:67%;
    height:430px;
    padding:12px;
} 

@media screen and (max-width: 415px) {
    position:absolute;
    top:20%;
    left:7%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:80%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 376px) {
    position:absolute;
    top:25%;
    left:7%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:80%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 281px) {
    position:absolute;
    top:25%;
    left:6%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:80%;
    height:430px;
    padding:12px;
}   

`

export const LoginInputUserName = styled.input`
height:30px;
position:relative;
margin:auto;
width:95%;
left:0px;
top:25px;
border-radius:10px 10px 10px 10px;
border:1px solid #e0e0e0;
outline: none !important;
padding:10px;
font-size:18px;
color:#757a79;
`

export const LoginInputPassword = styled.input`
height:30px;
position:relative;
top:60px;
margin:auto;
width:95%;
left:0px;
border-radius:10px 10px 10px 10px;
border:1px solid #e0e0e0;
outline: none !important;
padding:10px;
font-size:18px;
color:#757a79;
`


export const LoginSubmitButton = styled.button`
width:100%;
height:45px;
top:100px;
position:relative;
background:#2772db;
border-radius:10px 10px 10px 10px;
cursor:pointer;
border:none !important;
color:white;
font-family: sans-serif;
font-size:16px;
`

export const LoginForgotPasswordLink = styled.div`
cursor:pointer;
position:relative;
top:150px;
width:100%;
text-align:center;
align-items:center;
left:0%;
font-size:17px;

@media screen and (max-width:1284px) {
    cursor:pointer;
    position:relative;
    top:150px;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    font-size:17px;
}   

@media screen and (max-width:1281px) {
    cursor:pointer;
    position:relative;
    top:150px;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    font-size:17px;
}   

@media screen and (max-width:1025px) {
    cursor:pointer;
    position:relative;
    top:150px;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    font-size:17px;
}   

@media screen and (max-width: 913px) {
    cursor:pointer;
    position:relative;
    top:150px;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    font-size:17px;
}   

@media screen and (max-width: 821px) {
    cursor:pointer;
    position:relative;
    top:150px;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    font-size:17px;
}   

@media screen and (max-width: 415px) {
    cursor:pointer;
    position:relative;
    top:150px;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    font-size:17px;
}   

@media screen and (max-width: 376px) {
    cursor:pointer;
    position:relative;
    top:150px;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    font-size:17px;
}   

@media screen and (max-width: 281px) {
    cursor:pointer;
    position:relative;
    top:150px;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    font-size:17px;
}   

`


export const LoginCreateNewAccountButton = styled.button`
width:60%;
height:45px;
top:200px;
left:21%;
position:relative;
// background:#42b883;
background:#2eb849;

border-radius:10px 10px 10px 10px;
cursor:pointer;
border:none !important;
color:white;
font-family: sans-serif;
font-size:16px;

`

export const SpanErrorUserNameFix = styled.div`
position:absolute;
width:100%;
text-align:center;
align-items:center;
left:0%;
height:auto;
top:90px;
z-index:5;
background:white;
color:red;
font-weight:600;

@media screen and (max-width: 415px) {
    position:absolute;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    height:auto;
    top:90px;
    z-index:5;
    background:white;
    color:red;
    font-weight:600;
}   

@media screen and (max-width: 376px) {
    position:absolute;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    height:auto;
    top:90px;
    z-index:5;
    background:white;
    color:red;
    font-weight:600;
}   

@media screen and (max-width: 281px) {
    position:absolute;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    height:auto;
    top:90px;
    z-index:5;
    background:white;
    color:red;
    font-weight:600;
}   


`

export const SpanErrorPasswordFix = styled.div`
position:absolute;
width:100%;
text-align:center;
align-items:center;
left:0%;
height:auto;
top:180px;
background:white;
color:red;
font-weight:600;

@media screen and (max-width: 415px) {
    position:absolute;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    height:auto;
    top:180px;
    z-index:5;
    background:white;
    color:red;
    font-weight:600;
}   

@media screen and (max-width: 376px) {
    position:absolute;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    height:auto;
    top:180px;
    z-index:5;
    background:white;
    color:red;
    font-weight:600;
}   

@media screen and (max-width: 281px) {
    position:absolute;
    width:100%;
    text-align:center;
    align-items:center;
    left:0%;
    height:auto;
    top:180px;
    z-index:5;
    background:white;
    color:red;
    font-weight:600;
}   
`


export const SpanLoading = styled.div`
border: 7px solid #d9dad7; /* Light grey */
border-top: 7px solid #005792; /* Blue */
border-radius: 50%;
width: 30px;
height: 30px;
animation: spin 2s linear infinite;
position:absolute;
left:45%;
top:39%;
opacity:1;
z-index:3;

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}

`

export const WrapperLoading = styled.div`
position:absolute;
top:0%;
left:0%;
border-radius:10px 10px 10px 10px;
background:#eeeeee;
width:94.7%;
height:430px;
padding:12px;
z-index:2;
opacity:0.6;

@media screen and (max-width:1025px) {
    position:absolute;
    top:0%;
    left:0%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:94.7%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 913px) {
    position:absolute;
    top:0%;
    left:0%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:94.7%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 821px) {
    position:absolute;
    top:0%;
    left:0%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:94.7%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 625px) {
    position:absolute;
    top:0%;
    left:0%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:94.7%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 540px) {
    position:absolute;
    top:0%;
    left:0%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:94.7%;
    height:430px;
    padding:12px;
} 

@media screen and (max-width: 415px) {
    position:absolute;
    top:0%;
    left:0%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:94.7%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 376px) {
    position:absolute;
    top:0%;
    left:0%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:94.7%;
    height:430px;
    padding:12px;
}   

@media screen and (max-width: 281px) {
    position:absolute;
    top:0%;
    left:0%;
    border-radius:10px 10px 10px 10px;
    background:white;
    width:94.7%;
    height:430px;
    padding:12px;
}   

`
