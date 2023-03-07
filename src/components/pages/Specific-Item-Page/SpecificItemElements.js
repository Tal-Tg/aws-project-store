import styled from 'styled-components'



export const DivForHeader = styled.div`
width:100%;
height:56px;
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


export const PageLinkContainer = styled.div`
width:100%;
height:8vh;
background:white;
align-items:center;
justify-content:center;
text-align:center;
display:flex;

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
grid-template-columns: auto auto auto auto auto;
grid-gap: 10px;

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

export const ItemContainer = styled.div`
width:100%;
// height:100%;
background:white;
justify-content:center;
text-align:center;
items-align:center;
display:flex;



@media only screen and (max-width: 820px) {
    display:none;
}
`

export const ItemContainerPhone = styled.div`
display:none;

@media only screen and (max-width: 820px) {
width:100%;
// height:100%;
background:white;
justify-content:center;
text-align:center;
items-align:center;
display:grid;
margin-bottom:-100px;
}




`


export const ItemWrapper = styled.div`
width:95%;
display: grid;
background:white;
grid-template-columns: 40% 48% 55px;
grid-gap:5px;
text-align:center;
// align-items:center;
justify-content:center;
`

export const ItemDivPhotosListDiv = styled.div`
width:auto;
background:white;
// display: grid;
// grid-template-columns: 100%;
grid-gap:2px;
text-align:right;
align-items:center;
height:700px;
`

export const ItemDivPhotosListDivPhone = styled.div`

width:auto;
background:white;
// display: flex;
// grid-template-columns: 100%;
grid-gap:2px;
text-align:right;
align-items:center;
// height:700px;
// margin-top:10px;
display:flex;
justify-content:center;
items-align:center;

`

export const ItemDivPhotosListWrapperPhone = styled.div`

width:100%;
padding:5px;
height:auto;
background:white;
display:flex;

`

export const ItemListPhotoDiv = styled.div`
width:100%;
background:white;
cursor:pointer;

`

export const DivForCurrentPhoto = styled.div`
width:100%;
background:white;
`

export const DivForCurrentPhotoDiv = styled.img`
width:100%;
height:900px;
float:center;
`

export const DivForCurrentPhotoDivPhone = styled.img`
width:100%;
height:500px;
float:center;

@media only screen and (max-width: 820px) {
    height:700px;
}

@media only screen and (max-width: 768px) {
    width:100%;
    height:700px;
    float:center;
}

@media only screen and (max-width: 767px) {
    width:100%;
    height:500px;
    float:center;
}
`

export const DivForProductDetails = styled.div`
width:100%;
background:white;
`

export const DivForProductDetailsPhone = styled.div`
width:100%;
background:black;
position:relative;
// margin-left:10px;

`


export const ProductDetailsContainer = styled.div`
width:100%;
height:auto;
min-height:100%;
background:white;
`

export const ProductDetailsContainerPhone = styled.div`
width:100%;
height:auto;
min-height:100%;
background:white;
position:relative;
`
export const ProductDetailsTitle = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
padding-right:80px;
padding-top:10px;
font-size: 14px;
text-transform: none;
font-weight: 400;
word-break: break-word;
`

export const ProductDetailsTitlePhone = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
padding-right:10px;
padding-top:10px;
font-size: 14px;
text-transform: none;
font-weight: 400;
word-break: break-word;
`

export const ProductDetailsSubTitle = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 12px;
color:grey;
text-transform: none;
font-weight: 400;
word-break: break-word;
padding-right:80px;
padding-top:5px;
`


export const ProductDetailsSubTitlePhone = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 12px;
color:grey;
text-transform: none;
font-weight: 400;
word-break: break-word;
padding-right:10px;
padding-top:5px;
`

export const SpanStars = styled.span`
position:relative;
top:-3px;
// right:10px;
font-size:12px;
padding-right:3px;
color:#facf19;
transform: rotate(180deg);
`

export const ProductDetailsPrice = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 24px;
color:black;
text-transform: none;
font-weight: 800;
word-break: break-word;
padding-right:80px;
padding-top:10px;
`

export const ProductDetailsPricePhone = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 20px;
color:black;
text-transform: none;
font-weight: 800;
word-break: break-word;
padding-right:10px;
padding-top:10px;
`

export const ProductDetailsHr = styled.div`
width:88%;
background:grey;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:left;
text-align:center;
position:relative;
height:1px;
padding-right:80px;
// padding-top:10px;
margin-top:40px;
font-weight: 800;
word-break: break-word;
opacity:0.2;
margin-bottom:30px;
`

export const ProductDetailsHrPhone = styled.div`
width:100%;
background:grey;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:left;
text-align:center;
position:relative;
height:1px;
padding-right:10px;
// padding-top:10px;
margin-top:20px;
font-weight: 800;
word-break: break-word;
opacity:0.2;
margin-bottom:30px;
`


export const DivWrapperForColor = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
display:flex;
grid-template-columns: 200px 200px;
grid-gap:30px;
text-align:right;
position:relative;
// right:30px;
font-size: 24px;
color:black;
text-transform: none;
font-weight: 800;
word-break: break-word;
padding-right:80px;
padding-top:10px;

`

export const DivWrapperForColorPhone = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
display:flex;
grid-template-columns: 200px 200px;
grid-gap:30px;
text-align:right;
position:relative;
// right:30px;
font-size: 24px;
color:black;
text-transform: none;
font-weight: 800;
word-break: break-word;
padding-right:10px;
padding-top:10px;

`

export const DivWrapperForColorTitle = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
display: inline-block;
word-break: break-word;
padding-right:80px;
padding-top:0px;
margin-bottom:5px;
`

export const DivWrapperForColorTitlePhone = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
display: inline-block;
word-break: break-word;
padding-right:10px;
padding-top:0px;
margin-bottom:5px;
`

export const ColorDiv = styled.div`
width:30px;
height:30px;
border-radius:50%;
// background:blue;
opacity:0.9;
border:1px solid black;
cursor:pointer;

&:hover{
    border:2px solid red;
}
`

export const DivWrapperForSize = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
display: inline-block;
word-break: break-word;
padding-right:80px;
padding-top:30px;
margin-bottom:10px;
`

export const DivWrapperForSizeTitle = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
display: inline-block;
word-break: break-word;
padding-right:10px;
padding-top:30px;
margin-bottom:10px;
`



export const DivWrapperForSizeGrid = styled.div`
width:100%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
// float:right;
display:flex;
grid-template-columns: auto auto auto auto;
grid-gap:13px;
text-align:center;
justify-content:right;
text-align:right;
align-items:right;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
// display: inline-block;
word-break: break-word;
padding-right:80px;
padding-top:0px;
margin-bottom:5px;

`

export const DivWrapperForSizePhone = styled.div`
width:100%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
// float:right;
display:flex;
grid-template-columns: auto auto auto auto;
grid-gap:13px;
text-align:center;
justify-content:right;
text-align:right;
align-items:right;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
// display: inline-block;
word-break: break-word;
padding-right:10px;
padding-top:0px;
margin-bottom:5px;

`


export const DivSize = styled.div`
width:65px;
height:33px;
background:white;
border:1px solid grey;
display:flex;
// font-size:12px;
border-radius:30px;
justify-content:center;
align-items:center;
text-align:center;
cursor:pointer;
color:grey;
max-width: 100%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 12px;
font-weight:400;


&:hover{
    border:2px solid black;
}
`


export const DivInstractionSizes = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 13px;
color:#007cb9;
text-transform: none;
font-weight: 600;
display: inline-block;
word-break: break-word;
padding-right:80px;
padding-top:10px;
margin-bottom:10px;
cursor:pointer;

&:hover{
    text-decoration: underline;
}
`

export const DivInstractionSizesPhone = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 13px;
color:#007cb9;
text-transform: none;
font-weight: 600;
display: inline-block;
word-break: break-word;
padding-right:10px;
padding-top:10px;
margin-bottom:10px;
cursor:pointer;

&:hover{
    text-decoration: underline;
}
`


export const DivButton = styled.button`
width:60%;
background:black;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
// text-align:right;
position:relative;
right:80px;
color:white;
font-size: 20px;
text-transform: none;
font-weight: 500;
display: inline-block;
word-break: break-word;
// padding-right:80px;
padding-top:10px;
padding-bottom:10px;
margin-bottom:10px;
margin-top:20px;
transition:0.5s;
// border:1px solid black;

&:hover{
    transition:0.5s;
    background:#efecec;
    color:black;
    // border:1px solid white;
}

`


export const DivButtonPhone = styled.button`
width:60%;
background:black;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:center;
// text-align:right;
position:relative;
// left:50px;
color:white;
font-size: 20px;
text-transform: none;
font-weight: 500;
display: inline-block;
word-break: break-word;
// padding-right:80px;
padding-top:10px;
padding-bottom:10px;
margin-bottom:10px;
margin-top:20px;
transition:0.5s;
border:1px solid black;

&:hover{
    transition:0.5s;
    background:#efecec;
    color:black;
    border:1px solid black;
}

`


export const TlosPointes = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 12px;
color:grey;
text-transform: none;
font-weight: 400;
word-break: break-word;
padding-right:80px;
padding-top:5px;
`

export const TlosPointesPhone = styled.div`
width:80%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 12px;
color:grey;
text-transform: none;
font-weight: 400;
word-break: break-word;
padding-right:10px;
padding-top:5px;
`

export const DivForDeliveryPolicy = styled.div`
width:75%;
background:#f2f2f2;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
// float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
display: inline-block;
word-break: break-word;
// padding-right:20px;
// padding-top:20px;
// padding-bottom:20px;
padding:20px;
margin-bottom:10px;
position:relative;
right:10px;

`

export const DivForDeliveryPolicyPhone = styled.div`
width:90%;
background:#f2f2f2;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
// float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
display: inline-block;
word-break: break-word;
// padding-right:20px;
// padding-top:20px;
// padding-bottom:20px;
padding:20px;
margin-bottom:10px;
position:relative;
right:0px;

`

export const DivForDelivery = styled.div`
width:100%;
// height:100%;
// background:white;
// margin-bottom:5px;
display:flex;
`

export const DivForDeliveryIcon = styled.span`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:#2b4353;
font-size:25px;
`

export const DivForDeliveryTitle = styled.span`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:black;
font-size:12px;
position:relative;
top:-2px;
`

export const DivForDeliveryQuestionIcon = styled.span`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:black;
font-size:12px;
position:relative;
top:-2px;
font-size:15px;
color:#9ba6a5;
cursor:pointer;
`

export const DivForDeliveryDetails = styled.span`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:black;
font-size:12px;
position:relative;
top:0px;
// font-size:15px;
color:#9ba6a5;
position:relative;
right:33px;
top:-10px;
// padding-right:10px;
`

export const DivForDeliveryDetailsEstimateDate = styled.div`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:black;
font-size:12px;
position:relative;
top:0px;
// font-size:15px;
color:#9ba6a5;
position:relative;
right:33px;
top:-10px;
// padding-right:10px;
direction:rtl;
`


export const DivForPolicy = styled.div`
width:100%;
// height:100%;
// background:white;
// margin-bottom:5px;
margin-top:0px;
`


export const DivForPolicyIcon = styled.span`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:#2b4353;
font-size:25px;
`

export const DivForPolicyTitle = styled.span`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:black;
font-size:12px;
position:relative;
top:-2px;
`

export const DivForPolicyQuestionIcon = styled.span`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:black;
font-size:12px;
position:relative;
top:-2px;
font-size:15px;
color:#9ba6a5;
cursor:pointer;
`

export const DivForPolicyDetails = styled.span`
width:100%;
// height:100%;
// background:black;
// margin-bottom:15px;
color:black;
font-size:12px;
position:relative;
top:0px;
// font-size:15px;
color:black;
position:relative;
right:33px;
top:-10px;
// padding-right:10px;

`

export const DivForDescriptionGrid = styled.div`
width:75%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
// float:right;
text-align:right;
position:relative;
// right:50px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
// display: inline-block;
word-break: break-word;
padding-top:15px;
padding-bottom:10px;
padding-left:10px;
padding-right:5px;
margin-bottom:10px;
position:relative;
left:60px;
display:flex;
grid-template-columns: 20px 80% 20px;
grid-gap:10px;
cursor:pointer;
border-bottom:1px solid #f5f5f5 ;
`



export const DivForDescriptionGridPhone = styled.div`
width:85%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
// float:right;
text-align:right;
position:relative;
// right:50px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
// display: inline-block;
word-break: break-word;
padding-top:15px;
padding-bottom:10px;
padding-left:10px;
padding-right:5px;
margin-bottom:10px;
position:relative;
left:30px;
display:flex;
grid-template-columns: 20px 80% 20px;
grid-gap:10px;
cursor:pointer;
border-bottom:1px solid #f5f5f5 ;
`

export const DivForDescriptionText = styled.div`
width:120%;
background:white;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
font-size:16px;
`


export const DivForDescriptionIcon = styled.div`
width:80%;
background:white;
text-align:left;
justify-content:left;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
font-size:15px;

`


export const DivForOpenDesDownProduct = styled.div`
width:75%;
background:white;
letter-spacing: normal!important;
font-family: Cairo,Arial,Helvetica,sans-serif!important;
direction:rtl;
// float:right;
text-align:right;
position:relative;
// right:30px;
font-size: 18px;
color:black;
text-transform: none;
font-weight: 700;
display: inline-block;
word-break: break-word;
// padding-right:20px;
// padding-top:20px;
// padding-bottom:20px;
padding:20px;
margin-bottom:10px;
position:relative;
right:10px;
transition:0.8s;
color:black;
`

export const DivForDescriptionDownGird = styled.div`
width:100%;
padding-top:10px;
background:white;
display:flex;

`

export const DivForDescriptionDownGird1 = styled.div`
width:100%;
padding:2px;
// margin:2px;
background:white;
// display:flex;
direction:rtl;
font-size:13px;
font-weight:200;
line-height:1.7;
`

export const DivForDescriptionDownGird2 = styled.div`
width:100%;
padding:0px;
background:white;
// display:flex;
direction:rtl;
font-size:13px;
font-weight:200;
line-height:1.7;
`


