import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {ItemContainer,DivForHeader,ItemWrapper,ItemDivPhotosListDiv,DivForCurrentPhoto,DivForProductDetails,ItemListPhotoDiv,
    DivForSomething,DivForSomethingWrapper,DivForSomethingH1,DivForCurrentPhotoDiv,
    PageLinkContainer,PageLingWrapper,LinkItemDiv , SplitLineLinks,ProductDetailsContainer,
    ProductDetailsTitle,ProductDetailsSubTitle,SpanStars,ProductDetailsPrice,ProductDetailsHr,DivWrapperForColor,
    ColorDiv,DivWrapperForColorTitle,DivWrapperForSize,DivWrapperForSizeGrid,DivSize,DivInstractionSizes,DivButton
    ,TlosPointes,DivForDeliveryPolicy,DivForDelivery,DivForPolicy,DivForDeliveryIcon,DivForDeliveryTitle,DivForDeliveryQuestionIcon
,DivForDeliveryDetails,DivForDeliveryDetailsEstimateDate,DivForPolicyIcon,DivForPolicyTitle,DivForPolicyQuestionIcon
,DivForPolicyDetails,DivForDescriptionGrid,DivForDescriptionText,DivForDescriptionIcon,DivForOpenDesDownProduct
,DivForDescriptionDownGird,DivForDescriptionDownGird1,DivForDescriptionDownGird2,
ItemContainerPhone,DivForCurrentPhotoDivPhone,ItemDivPhotosListDivPhone,ItemDivPhotosListWrapperPhone,DivForProductDetailsPhone,
ProductDetailsContainerPhone,DivWrapperForSizePhone,DivButtonPhone,ProductDetailsTitlePhone,ProductDetailsSubTitlePhone,ProductDetailsPricePhone
,ProductDetailsHrPhone,DivWrapperForColorTitlePhone,DivWrapperForColorPhone,DivWrapperForSizeTitle,DivInstractionSizesPhone,TlosPointesPhone,
DivForDeliveryPolicyPhone,DivForDescriptionGridPhone} from './SpecificItemElements'
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiQuestionFill } from 'react-icons/ri';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { BiDownArrow } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import CommentUsers from './comment-users';




interface RouteParam{
    id: number;
}


function SpecificItem(){
    
    

    const param = useParams();

    function getItemId(){
        // console.log(param.id);
    }
    getItemId()

    const [currentPhotoId, setCurrentPhotoId] = useState("1");

    function setCurrentPhoto(id : string){
        if(id === "1"){
            setCurrentPhotoId("1")
        }else if(id === "2"){
            setCurrentPhotoId("2")
        }else if(id === "3"){
            setCurrentPhotoId("3")
        }else if(id === "4"){
            setCurrentPhotoId("4")
        }else if(id === "5"){
            setCurrentPhotoId("5")
        }
    }

    const [policyLearnMore, setPolicyLearnMore] = useState(false);
    const [descriptionFlag, setDescriptionFlag] = useState(false);
    const [onCollectionFlag, setOnCollectionFlag] = useState(false);
    const [sizeDownPageFlag, setSizeDownPageFlag] = useState(false);


    function learnMoreClick(){
        setPolicyLearnMore(!policyLearnMore)
    }

    function FlagFunction(str:string){
        if(str === "description"){
            setDescriptionFlag(!descriptionFlag)
        }else if(str === "collection"){
            setOnCollectionFlag(!onCollectionFlag)
        }else if(str === "size"){
            setSizeDownPageFlag(!sizeDownPageFlag)
        }
    }

    

    return(
        <div>
            <DivForHeader>

            </DivForHeader>
            {/* <PageLinkContainer>     
                <PageLingWrapper>
                    <LinkItemDiv><Link style={{"textDecoration":"none","color":"#767676"}} to=""> specific item </Link></LinkItemDiv>
                        <SplitLineLinks>/</SplitLineLinks>
                    <LinkItemDiv><Link style={{"textDecoration":"none","color":"#767676"}} to="/Item-page/Dresses"> {param.title} </Link></LinkItemDiv>
                        <SplitLineLinks>/</SplitLineLinks>
                    <LinkItemDiv><Link style={{"textDecoration":"none","color":"#767676"}} to="/">Home-page</Link></LinkItemDiv>
                </PageLingWrapper>
            </PageLinkContainer> */}


            <DivForSomething>
                <DivForSomethingWrapper>
                    <DivForSomethingH1>IL Women Hot Sale</DivForSomethingH1>
                </DivForSomethingWrapper>
            </DivForSomething>

            <ItemContainer>
                <ItemWrapper>
                    <DivForProductDetails>
                        <ProductDetailsContainer>
                            <ProductDetailsTitle>SHEIN EZwear ???????? ???????? ????'?????? ?????????? ????</ProductDetailsTitle>
                            <ProductDetailsSubTitle>SKU: sw2211035915191404 &nbsp;<SpanStars> <BsStarFill style={{"transform":"rotateY(-180deg)"}}/>   </SpanStars> <SpanStars> <BsStarFill style={{"transform":"rotateY(-180deg)"}}/></SpanStars> <SpanStars> <BsStarFill style={{"transform":"rotateY(-180deg)"}}/></SpanStars> <SpanStars> <BsStarFill style={{"transform":"rotateY(-180deg)"}}/></SpanStars> <SpanStars><BsStarHalf style={{"transform":"rotateY(-180deg)"}}/></SpanStars> &nbsp; <span style={{"color":"#facf19","fontSize":"13px","position":"relative","top":"-2px","cursor":"pointer"}}>(96 ??????????????)</span></ProductDetailsSubTitle>
                            <ProductDetailsPrice>???39.00</ProductDetailsPrice>
                            <ProductDetailsHr></ProductDetailsHr>
                            <DivWrapperForColorTitle>??????: <span style={{"fontWeight":"400"}}>????????</span></DivWrapperForColorTitle>
                            <DivWrapperForColor>
                                <ColorDiv style={{"background":"black","padding":"1px"}}></ColorDiv>
                                <ColorDiv style={{"background":"blue","padding":"0px"}}></ColorDiv>
                            </DivWrapperForColor>
                            <DivWrapperForSize>???????? </DivWrapperForSize>
                            <DivWrapperForSizeGrid>
                                <DivSize>
                                    XS
                                </DivSize>
                                <DivSize>
                                    S
                                </DivSize>
                                <DivSize>
                                    M
                                </DivSize>
                                <DivSize>
                                    L
                                </DivSize>
                            </DivWrapperForSizeGrid>
                            <DivInstractionSizes>?????????? ????????????</DivInstractionSizes>
                            <DivInstractionSizes style={{"paddingTop":"1px"}}><span style={{"color":"grey", "fontWeight":"400"}}>???? ?????????? ???????</span>??????\?? ???? ???? ?????????? ??????</DivInstractionSizes>
                            <DivButton>???????? ??????</DivButton>
                            <TlosPointes style={{"marginBottom":"15px","marginTop":"-5px"}}>Earn up to <span style={{"color":"#ff5757", "fontWeight":"400"}}>4</span> TLOS Points calculated at checkout.</TlosPointes>
                            <DivForDeliveryPolicy>
                                
                                <DivForDelivery>
                                    <DivForDeliveryIcon><TbTruckDelivery/> <DivForDeliveryTitle>?????????? ???????? </DivForDeliveryTitle> <DivForDeliveryQuestionIcon> <RiQuestionFill/> </DivForDeliveryQuestionIcon></DivForDeliveryIcon>
                                </DivForDelivery>

                                <DivForDeliveryDetails>?????????? ?????????????? ???????? ???? ???????????? ?????? ???160.00 </DivForDeliveryDetails>
                                <DivForDeliveryDetailsEstimateDate>???????????? ???????????? ?? 02/07/2023 - 02/09/2023.</DivForDeliveryDetailsEstimateDate>
                                
                                <DivForPolicy>
                                    <DivForPolicyIcon> <MdOutlinePrivacyTip/> </DivForPolicyIcon> <DivForPolicyTitle> ?????????????? ????????????</DivForPolicyTitle> <DivForPolicyQuestionIcon> <RiQuestionFill/> </DivForPolicyQuestionIcon>
                                </DivForPolicy>
                                {!policyLearnMore ? 
                                    <DivForPolicyDetails style={{"cursor":"pointer",color:"#9ba6a5"}} onClick={() => learnMoreClick()}>?????? ???????? <span style={{"fontSize":"22px","position":"relative","top":"2px","color":"#7dd87d"}}> <IoMdArrowDropdown/> </span> </DivForPolicyDetails> 
                                :
                                <DivForPolicyDetails style={{"cursor":"pointer",color:"#9ba6a5"}} onClick={() => learnMoreClick()}>?????? ???????? <span style={{"fontSize":"20px","position":"relative","top":"2px","color":"#7dd87d"}}> <IoMdArrowDropup/> </span> </DivForPolicyDetails> }
                                {policyLearnMore ?
                                    <div style={{"lineHeight":"1.2"}}>                                
                                        <DivForPolicyDetails> ???????? ???????? ???????????? ?????????? ?????????????? ???????????? !</DivForPolicyDetails>
                                        <div><DivForPolicyDetails> ??????????????: </DivForPolicyDetails></div>
                                        <div><DivForPolicyDetails> 1. ???????????? ???????????? ???????????? ???? 60 ?????? ???????? ???????????? </DivForPolicyDetails></div>
                                        <div><DivForPolicyDetails> 2. ?????????????? ???????????? ???????????? ?????? ??????????, ?????? ?????????? ???????????????? ?????????????? </DivForPolicyDetails></div> 
                                    </div>
                                :""}
                            </DivForDeliveryPolicy>
                            <DivForDescriptionGrid onClick={() => FlagFunction("description")}>
                                    <DivForDescriptionText>
                                        ??????????
                                    </DivForDescriptionText>
                                    <DivForDescriptionIcon>
                                        {descriptionFlag ? <AiOutlineMinus/> :<AiOutlinePlus/>}
                                    </DivForDescriptionIcon>
                            </DivForDescriptionGrid>
                            {descriptionFlag ? 
                                <DivForOpenDesDownProduct>
                                    <DivForDescriptionDownGird>
                                        <DivForDescriptionDownGird1>
                                            <div>??????:</div>
                                            <div>??????????:</div>
                                            <div>?????? ??????????:</div>
                                            <div>???? ??????????:</div>
                                            <div>??????????:</div>
                                            <div>???????? ??????????:</div>
                                            <div>????????:</div>
                                            <div>?????? ??????????:</div>
                                            <div>????:</div>
                                            <div>????????:</div>
                                            <div>???????? ????:</div>
                                            <div>???????????? ??????????:</div>
                                            <div>????????:</div>
                                        </DivForDescriptionDownGird1>
                                        <DivForDescriptionDownGird2>
                                            <div>????????</div>
                                            <div>????'??????</div>
                                            <div>????????</div>
                                            <div>?????????? ????????</div>
                                            <div>?????????????? ????????????</div>
                                            <div>?????? ??????????????</div>
                                            <div>????????</div>
                                            <div>?????????? ??????????</div>
                                            <div>?????????? ??????</div>
                                            <div>????</div>
                                            <div>100% ????????????????</div>
                                            <div>?????????? ?????????? ???? ?????????? ?????? ????????????</div>
                                            <div>????</div>
                                        </DivForDescriptionDownGird2>
                                    </DivForDescriptionDownGird>
                                </DivForOpenDesDownProduct>
                                :
                            ""}


                            <DivForDescriptionGrid onClick={() => FlagFunction("collection")}>
                                    <DivForDescriptionText>
                                        ???? ????????????????
                                    </DivForDescriptionText>
                                    <DivForDescriptionIcon>
                                    {onCollectionFlag ? <AiOutlineMinus/> :<AiOutlinePlus/>}
                                    </DivForDescriptionIcon>
                            </DivForDescriptionGrid>
                            {onCollectionFlag ? 
                                <DivForOpenDesDownProduct>
                                
                                </DivForOpenDesDownProduct>
                                :
                            ""}

                            <DivForDescriptionGrid onClick={() => FlagFunction("size")} >
                                    <DivForDescriptionText>
                                        ????????
                                    </DivForDescriptionText>
                                    <DivForDescriptionIcon >
                                        {sizeDownPageFlag ? <AiOutlineMinus/> :<AiOutlinePlus/>}
                                    </DivForDescriptionIcon>
                            </DivForDescriptionGrid>

                            {sizeDownPageFlag ? 
                                <DivForOpenDesDownProduct>
                                
                                </DivForOpenDesDownProduct>
                                :
                            ""}

                        </ProductDetailsContainer>
                    </DivForProductDetails>
                    <DivForCurrentPhoto>
                        {currentPhotoId === "1"? 
                        <DivForCurrentPhotoDiv src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648646746849c7693e9a8d10fc76a36e183206d_thumbnail_900x.webp"/>
                        :
                        currentPhotoId === "2"?
                        <DivForCurrentPhotoDiv src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486474f349cbf89d8528d9637c3d28c5c780c3_thumbnail_900x.webp"/>

                        :currentPhotoId === "3"?
                        <DivForCurrentPhotoDiv src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648648262f3ff4047c640fae535a6c5b5f1e01b_thumbnail_220x293.webp"/>

                        :currentPhotoId === "4"?
                        <DivForCurrentPhotoDiv src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486489158eb1ad720d06f7c54bcfa713381703_thumbnail_220x293.webp"/>

                        :currentPhotoId === "5"?
                        <DivForCurrentPhotoDiv src="https://img.ltwebstatic.com/images3_pi/2021/03/23/16164864941456291fb2aa34c8419b92a47ce422e6_thumbnail_900x.webp"/>
                        :""}
                    </DivForCurrentPhoto>
                    <ItemDivPhotosListDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "1"? 
                            <img  src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648646746849c7693e9a8d10fc76a36e183206d_thumbnail_220x293.webp" width="100%" height="70px"  style={{"border":"1px solid black" ,"padding":"2px"}} />
                        :
                            <img onClick={() => setCurrentPhoto("1")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648646746849c7693e9a8d10fc76a36e183206d_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}} />}
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "2"? 
                            <img src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486474f349cbf89d8528d9637c3d28c5c780c3_thumbnail_220x293.webp" width="100%" height="70px"  style={{"border":"1px solid black" ,"padding":"2px"}}/>
                        :   
                            <img onClick={() => setCurrentPhoto("2")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486474f349cbf89d8528d9637c3d28c5c780c3_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}} />
                        }
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "3"? 
                            <img src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648648262f3ff4047c640fae535a6c5b5f1e01b_thumbnail_220x293.webp" width="100%" height="70px" style={{"border":"1px solid black" ,"padding":"2px"}} />
                        :
                            <img onClick={() => setCurrentPhoto("3")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648648262f3ff4047c640fae535a6c5b5f1e01b_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}}/>}
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "4"? 
                            <img  src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486489158eb1ad720d06f7c54bcfa713381703_thumbnail_220x293.webp" width="100%" height="70px" style={{"border":"1px solid black" ,"padding":"2px"}}/>
                        :
                            <img onClick={() => setCurrentPhoto("4")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486489158eb1ad720d06f7c54bcfa713381703_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}}/>
                        }
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "5"? 
                            <img  src="https://img.ltwebstatic.com/images3_pi/2021/03/23/16164864941456291fb2aa34c8419b92a47ce422e6_thumbnail_220x293.webp" width="100%" height="70px" style={{"border":"1px solid black" ,"padding":"2px"}}/>
                        :
                            <img onClick={() => setCurrentPhoto("5")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/16164864941456291fb2aa34c8419b92a47ce422e6_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}}/>}
                        </ItemListPhotoDiv>
                    </ItemDivPhotosListDiv>
                </ItemWrapper>
            </ItemContainer>
            <ItemContainerPhone>
                    <DivForCurrentPhoto>
                        {currentPhotoId === "1"? 
                        <DivForCurrentPhotoDivPhone src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648646746849c7693e9a8d10fc76a36e183206d_thumbnail_900x.webp"/>
                        :
                        currentPhotoId === "2"?
                        <DivForCurrentPhotoDivPhone src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486474f349cbf89d8528d9637c3d28c5c780c3_thumbnail_900x.webp"/>

                        :currentPhotoId === "3"?
                        <DivForCurrentPhotoDivPhone src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648648262f3ff4047c640fae535a6c5b5f1e01b_thumbnail_220x293.webp"/>

                        :currentPhotoId === "4"?
                        <DivForCurrentPhotoDivPhone src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486489158eb1ad720d06f7c54bcfa713381703_thumbnail_220x293.webp"/>

                        :currentPhotoId === "5"?
                        <DivForCurrentPhotoDivPhone src="https://img.ltwebstatic.com/images3_pi/2021/03/23/16164864941456291fb2aa34c8419b92a47ce422e6_thumbnail_900x.webp"/>
                        :""}
                    </DivForCurrentPhoto>

                    <ItemDivPhotosListDivPhone>
                        <ItemDivPhotosListWrapperPhone>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "1"? 
                            <img  src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648646746849c7693e9a8d10fc76a36e183206d_thumbnail_220x293.webp" width="100%" height="70px"  style={{"border":"1px solid black" ,"padding":"2px"}} />
                        :
                            <img onClick={() => setCurrentPhoto("1")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648646746849c7693e9a8d10fc76a36e183206d_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}} />}
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "2"? 
                            <img src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486474f349cbf89d8528d9637c3d28c5c780c3_thumbnail_220x293.webp" width="100%" height="70px"  style={{"border":"1px solid black" ,"padding":"2px"}}/>
                        :   
                            <img onClick={() => setCurrentPhoto("2")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486474f349cbf89d8528d9637c3d28c5c780c3_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}} />
                        }
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "3"? 
                            <img src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648648262f3ff4047c640fae535a6c5b5f1e01b_thumbnail_220x293.webp" width="100%" height="70px" style={{"border":"1px solid black" ,"padding":"2px"}} />
                        :
                            <img onClick={() => setCurrentPhoto("3")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648648262f3ff4047c640fae535a6c5b5f1e01b_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}}/>}
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "4"? 
                            <img  src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486489158eb1ad720d06f7c54bcfa713381703_thumbnail_220x293.webp" width="100%" height="70px" style={{"border":"1px solid black" ,"padding":"2px"}}/>
                        :
                            <img onClick={() => setCurrentPhoto("4")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/1616486489158eb1ad720d06f7c54bcfa713381703_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}}/>
                        }
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "5"? 
                            <img  src="https://img.ltwebstatic.com/images3_pi/2021/03/23/16164864941456291fb2aa34c8419b92a47ce422e6_thumbnail_220x293.webp" width="100%" height="70px" style={{"border":"1px solid black" ,"padding":"2px"}}/>
                        :
                            <img onClick={() => setCurrentPhoto("5")} src="https://img.ltwebstatic.com/images3_pi/2021/03/23/16164864941456291fb2aa34c8419b92a47ce422e6_thumbnail_220x293.webp" width="100%" height="70px" style={{"padding":"2px"}}/>}
                        </ItemListPhotoDiv>
                        </ItemDivPhotosListWrapperPhone>
                    </ItemDivPhotosListDivPhone>

                    <DivForProductDetailsPhone>
                        <ProductDetailsContainerPhone>
                            <ProductDetailsTitlePhone>SHEIN EZwear ???????? ???????? ????'?????? ?????????? ????</ProductDetailsTitlePhone>
                            <ProductDetailsSubTitlePhone>SKU: sw2211035915191404 &nbsp;<SpanStars> <BsStarFill style={{"transform":"rotateY(-180deg)"}}/>   </SpanStars> <SpanStars> <BsStarFill style={{"transform":"rotateY(-180deg)"}}/></SpanStars> <SpanStars> <BsStarFill style={{"transform":"rotateY(-180deg)"}}/></SpanStars> <SpanStars> <BsStarFill style={{"transform":"rotateY(-180deg)"}}/></SpanStars> <SpanStars><BsStarHalf style={{"transform":"rotateY(-180deg)"}}/></SpanStars> &nbsp; <span style={{"color":"#facf19","fontSize":"13px","position":"relative","top":"-2px","cursor":"pointer"}}>(96 ??????????????)</span></ProductDetailsSubTitlePhone>
                            <ProductDetailsPricePhone>???39.00</ProductDetailsPricePhone>
                            <ProductDetailsHrPhone></ProductDetailsHrPhone>
                            <DivWrapperForColorTitlePhone>??????: <span style={{"fontWeight":"400"}}>????????</span></DivWrapperForColorTitlePhone>
                            <DivWrapperForColorPhone>
                                <ColorDiv style={{"background":"black","padding":"1px"}}></ColorDiv>
                                <ColorDiv style={{"background":"blue","padding":"0px"}}></ColorDiv>
                            </DivWrapperForColorPhone>
                            <DivWrapperForSizeTitle>???????? </DivWrapperForSizeTitle>
                            <DivWrapperForSizePhone>
                                <DivSize>
                                    XS
                                </DivSize>
                                <DivSize>
                                    S
                                </DivSize>
                                <DivSize>
                                    M
                                </DivSize>
                                <DivSize>
                                    L
                                </DivSize>
                            </DivWrapperForSizePhone>
                            <DivInstractionSizesPhone>?????????? ????????????</DivInstractionSizesPhone>
                            <DivInstractionSizesPhone style={{"paddingTop":"1px"}}><span style={{"color":"grey", "fontWeight":"400"}}>???? ?????????? ???????</span>??????\?? ???? ???? ?????????? ??????</DivInstractionSizesPhone>
                            <br />
                            <br />
                            <br />
                            <div style={{"background":"white","width":"100%","display":"flex","justifyContent":"center","alignItems":"center"}}>
                            <DivButtonPhone>???????? ??????</DivButtonPhone>
                            </div>
                            <TlosPointesPhone style={{"marginBottom":"15px","marginTop":"-5px"}}>Earn up to <span style={{"color":"#ff5757", "fontWeight":"400"}}>4</span> TLOS Points calculated at checkout.</TlosPointesPhone>
                            <DivForDeliveryPolicyPhone>
                                
                                <DivForDelivery>
                                    <DivForDeliveryIcon><TbTruckDelivery/> <DivForDeliveryTitle>?????????? ???????? </DivForDeliveryTitle> <DivForDeliveryQuestionIcon> <RiQuestionFill/> </DivForDeliveryQuestionIcon></DivForDeliveryIcon>
                                </DivForDelivery>

                                <DivForDeliveryDetails>?????????? ?????????????? ???????? ???? ???????????? ?????? ???160.00 </DivForDeliveryDetails>
                                <DivForDeliveryDetailsEstimateDate>???????????? ???????????? ?? 02/07/2023 - 02/09/2023.</DivForDeliveryDetailsEstimateDate>
                                
                                <DivForPolicy>
                                    <DivForPolicyIcon> <MdOutlinePrivacyTip/> </DivForPolicyIcon> <DivForPolicyTitle> ?????????????? ????????????</DivForPolicyTitle> <DivForPolicyQuestionIcon> <RiQuestionFill/> </DivForPolicyQuestionIcon>
                                </DivForPolicy>
                                {!policyLearnMore ? 
                                    <DivForPolicyDetails style={{"cursor":"pointer",color:"#9ba6a5"}} onClick={() => learnMoreClick()}>?????? ???????? <span style={{"fontSize":"22px","position":"relative","top":"2px","color":"#7dd87d"}}> <IoMdArrowDropdown/> </span> </DivForPolicyDetails> 
                                :
                                <DivForPolicyDetails style={{"cursor":"pointer",color:"#9ba6a5"}} onClick={() => learnMoreClick()}>?????? ???????? <span style={{"fontSize":"20px","position":"relative","top":"2px","color":"#7dd87d"}}> <IoMdArrowDropup/> </span> </DivForPolicyDetails> }
                                {policyLearnMore ?
                                    <div style={{"lineHeight":"1.2"}}>                                
                                        <DivForPolicyDetails> ???????? ???????? ???????????? ?????????? ?????????????? ???????????? !</DivForPolicyDetails>
                                        <div><DivForPolicyDetails> ??????????????: </DivForPolicyDetails></div>
                                        <div><DivForPolicyDetails> 1. ???????????? ???????????? ???????????? ???? 60 ?????? ???????? ???????????? </DivForPolicyDetails></div>
                                        <div><DivForPolicyDetails> 2. ?????????????? ???????????? ???????????? ?????? ??????????, ?????? ?????????? ???????????????? ?????????????? </DivForPolicyDetails></div> 
                                    </div>
                                :""}
                            </DivForDeliveryPolicyPhone>
                            <DivForDescriptionGridPhone onClick={() => FlagFunction("description")}>
                                    <DivForDescriptionText>
                                        ??????????
                                    </DivForDescriptionText>
                                    <DivForDescriptionIcon>
                                        {descriptionFlag ? <AiOutlineMinus/> :<AiOutlinePlus/>}
                                    </DivForDescriptionIcon>
                            </DivForDescriptionGridPhone>
                            {descriptionFlag ? 
                                <DivForOpenDesDownProduct>
                                    <DivForDescriptionDownGird>
                                        <DivForDescriptionDownGird1>
                                            <div>??????:</div>
                                            <div>??????????:</div>
                                            <div>?????? ??????????:</div>
                                            <div>???? ??????????:</div>
                                            <div>??????????:</div>
                                            <div>???????? ??????????:</div>
                                            <div>????????:</div>
                                            <div>?????? ??????????:</div>
                                            <div>????:</div>
                                            <div>????????:</div>
                                            <div>???????? ????:</div>
                                            <div>???????????? ??????????:</div>
                                            <div>????????:</div>
                                        </DivForDescriptionDownGird1>
                                        <DivForDescriptionDownGird2>
                                            <div>????????</div>
                                            <div>????'??????</div>
                                            <div>????????</div>
                                            <div>?????????? ????????</div>
                                            <div>?????????????? ????????????</div>
                                            <div>?????? ??????????????</div>
                                            <div>????????</div>
                                            <div>?????????? ??????????</div>
                                            <div>?????????? ??????</div>
                                            <div>????</div>
                                            <div>100% ????????????????</div>
                                            <div>?????????? ?????????? ???? ?????????? ?????? ????????????</div>
                                            <div>????</div>
                                        </DivForDescriptionDownGird2>
                                    </DivForDescriptionDownGird>
                                </DivForOpenDesDownProduct>
                                :
                            ""}


                            <DivForDescriptionGridPhone onClick={() => FlagFunction("collection")}>
                                    <DivForDescriptionText>
                                        ???? ????????????????
                                    </DivForDescriptionText>
                                    <DivForDescriptionIcon>
                                    {onCollectionFlag ? <AiOutlineMinus/> :<AiOutlinePlus/>}
                                    </DivForDescriptionIcon>
                            </DivForDescriptionGridPhone>
                            {onCollectionFlag ? 
                                <DivForOpenDesDownProduct>
                                
                                </DivForOpenDesDownProduct>
                                :
                            ""}

                            <DivForDescriptionGridPhone onClick={() => FlagFunction("size")} >
                                    <DivForDescriptionText>
                                        ????????
                                    </DivForDescriptionText>
                                    <DivForDescriptionIcon >
                                        {sizeDownPageFlag ? <AiOutlineMinus/> :<AiOutlinePlus/>}
                                    </DivForDescriptionIcon>
                            </DivForDescriptionGridPhone>

                            {sizeDownPageFlag ? 
                                <DivForOpenDesDownProduct>
                                
                                </DivForOpenDesDownProduct>
                                :
                            ""}

                        </ProductDetailsContainerPhone>
                    </DivForProductDetailsPhone>

            </ItemContainerPhone>

            <CommentUsers productId={new Number(param.id).valueOf()}/>
            
        </div>
    )
}

export default SpecificItem;