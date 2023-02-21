import React, { useState } from 'react';
import {CarousellaContainer,CarousellaWrapper,DivNextButton,DivBackButton,DivNextButtonIcon,
    DivBackButtonIcon,DivForGridPhotos,CarousellaItemDiv,CarousellaItemsGridAnimationRight,CarousellaItemsGridAnimationLeft,ImageItem
,CarousellaContainerAfter1000px,DivForGridPhotosAfter1000px,CarousellaItemsGridAfter100px,HeaderItem} from './CarusellaElements'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'


function CarouselOwnMade(){

    const [currentId,setCurrentId] = useState(1);
    const [textTest , setTextTest] = useState("next");

    var endCaroaselIndex = 2;

    function CurrentId(str:string){
        if(str === "next" && currentId<endCaroaselIndex){
            setTextTest("next")
            setCurrentId(currentId+1)
        }else if(str === "back" && currentId-1 ){
            setCurrentId(currentId-1)
            setTextTest("back")
        }
        
    }

    const handleChangeText = (str:string)=>{

    }



const carousellaElements = [
    {id:1,
        texts:[
            {id:1,text:"a"},{id:2,text:"a"},{id:3,text:"a"},{id:4,text:"a"},{id:5,text:"a"}
        ],
    img:""},

    {id:2,
        texts:[
            {id:1,text:"b"},{id:2,text:"b"},{id:3,text:"b"},{id:4,text:"b"},{id:5,text:"b"}
        ],
    img:""},

    {id:3,
        texts:[
            {id:1,text:"c"},{id:2,text:"c"},{id:3,text:"c"},{id:4,text:"c"},{id:5,text:"c"}
        ],
    img:""}
]


    return(
        <div>
            <CarousellaContainer>
                <CarousellaWrapper>
                    <DivBackButton> <DivBackButtonIcon> {currentId != 1 ? <AiOutlineLeft  onClick={() => CurrentId("back")}/> :""}</DivBackButtonIcon></DivBackButton>
                    <DivForGridPhotos>
                    {carousellaElements?.map((i,v) => 
                        <div>
                        {textTest == "next" && currentId == i.id ?
                            <CarousellaItemsGridAnimationLeft>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/11/30/1669779806f841a6910f6c784716b43a21fd884d1e_thumbnail_405x552.webp" alt="" /><HeaderItem>₪29.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/12/08/1670478072ca9d11b3b2c8ec21abf536a771c666ee_thumbnail_405x552.webp" alt="" /><HeaderItem>₪19.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/06/24/1656044742ec9ef932419b98172390729b157e11a8_thumbnail_405x552.webp" alt=""/><HeaderItem>₪49.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2023/01/12/16735048521c27d6228274421f214b4f0ebb61cf45_thumbnail_405x552.webp" alt="" /><HeaderItem>₪39.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/10/17/1665978481adcc25d07531a388527479c3d0c1e4f4_thumbnail_405x552.webp" alt=""/><HeaderItem>₪39.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/12/13/16709383606171353bae01ad131b8f251c28616dc4_thumbnail_405x552.webp" alt="" /><HeaderItem>₪69.43</HeaderItem></CarousellaItemDiv>
                            </CarousellaItemsGridAnimationLeft>
                        :textTest == "back" && currentId == i.id ?
                            <CarousellaItemsGridAnimationRight>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/10/13/166565421037050a2527d95a79bd4060fb7c948c72_thumbnail_405x552.webp" alt="" /><HeaderItem>₪19.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/12/09/167056243522a55d24e68f9835f2013a582d20fdd7_thumbnail_405x552.webp" alt="" /><HeaderItem>₪19.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/12/30/16723839470b4aa5c5b290e8dc1166bf6c43e75c97_thumbnail_405x552.webp" alt="" /><HeaderItem>₪29.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/08/02/16594433021dd25026aee2129a182cf554e1708632_thumbnail_405x552.webp" alt=""/><HeaderItem>₪39.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/10/18/1666056648e653fba49dab172de1e2e5755ccf9697_thumbnail_405x552.webp" alt="" /><HeaderItem>₪29.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/03/29/16485451510ef98882300e84a8df43ae146b65e154_thumbnail_405x552.webp" alt=""/><HeaderItem>₪69.43</HeaderItem></CarousellaItemDiv>
                            </CarousellaItemsGridAnimationRight>
                        :""} 
                        </div>
                    )}
                    </DivForGridPhotos>
                    <DivNextButton> <DivNextButtonIcon><AiOutlineRight onClick={() => CurrentId("next")} /> </DivNextButtonIcon></DivNextButton>
                </CarousellaWrapper>
            </CarousellaContainer>
            <CarousellaContainerAfter1000px>
                        <DivForGridPhotosAfter1000px>
                            <CarousellaItemsGridAfter100px>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/11/30/1669779806f841a6910f6c784716b43a21fd884d1e_thumbnail_405x552.webp" alt="" /><HeaderItem>₪29.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/12/08/1670478072ca9d11b3b2c8ec21abf536a771c666ee_thumbnail_405x552.webp" alt="" /><HeaderItem>₪19.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/06/24/1656044742ec9ef932419b98172390729b157e11a8_thumbnail_405x552.webp" alt=""/><HeaderItem>₪49.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2023/01/12/16735048521c27d6228274421f214b4f0ebb61cf45_thumbnail_405x552.webp" alt="" /><HeaderItem>₪39.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/10/17/1665978481adcc25d07531a388527479c3d0c1e4f4_thumbnail_405x552.webp" alt=""/><HeaderItem>₪39.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/12/13/16709383606171353bae01ad131b8f251c28616dc4_thumbnail_405x552.webp" alt="" /><HeaderItem>₪69.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/10/13/166565421037050a2527d95a79bd4060fb7c948c72_thumbnail_405x552.webp" alt="" /><HeaderItem>₪19.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/12/09/167056243522a55d24e68f9835f2013a582d20fdd7_thumbnail_405x552.webp" alt="" /><HeaderItem>₪19.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/12/30/16723839470b4aa5c5b290e8dc1166bf6c43e75c97_thumbnail_405x552.webp" alt="" /><HeaderItem>₪29.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/08/02/16594433021dd25026aee2129a182cf554e1708632_thumbnail_405x552.webp" alt=""/><HeaderItem>₪39.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/10/18/1666056648e653fba49dab172de1e2e5755ccf9697_thumbnail_405x552.webp" alt="" /><HeaderItem>₪29.43</HeaderItem></CarousellaItemDiv>
                                <CarousellaItemDiv><ImageItem src="https://img.ltwebstatic.com/images3_pi/2022/03/29/16485451510ef98882300e84a8df43ae146b65e154_thumbnail_405x552.webp" alt=""/><HeaderItem>₪69.43</HeaderItem></CarousellaItemDiv>
                            </CarousellaItemsGridAfter100px>
                        </DivForGridPhotosAfter1000px>
                    </CarousellaContainerAfter1000px>
        </div>
    )
}

export default CarouselOwnMade



{/* <CarousellaItemDiv><img src="https://img.ltwebstatic.com/images3_ach/2023/01/30/16750599975741ab32c0479311f5be8e723f4ce6b7.gif" alt="" width="100%" height="300px"/></CarousellaItemDiv>
<CarousellaItemDiv><img src="https://img.ltwebstatic.com/images3_ach/2023/01/09/16732462553a681c2e2740a7841e3a93b5b09369ef.gif" alt="" width="100%" height="300px"/></CarousellaItemDiv>
<CarousellaItemDiv><img src="https://img.ltwebstatic.com/images3_ach/2023/01/30/1675060655d8fc9045d4f40a59e5381ffc96df46ff.gif" alt="" width="100%" height="300px"/></CarousellaItemDiv>
<CarousellaItemDiv><img src="https://img.ltwebstatic.com/images3_ach/2023/01/09/16732462553a681c2e2740a7841e3a93b5b09369ef.gif" alt="" width="100%" height="300px"/></CarousellaItemDiv>
<CarousellaItemDiv><img src="https://img.ltwebstatic.com/images3_ach/2023/01/09/16732462553a681c2e2740a7841e3a93b5b09369ef.gif" alt="" width="100%" height="300px"/></CarousellaItemDiv>
<CarousellaItemDiv><img src="https://img.ltwebstatic.com/images3_ach/2023/01/09/16732462553a681c2e2740a7841e3a93b5b09369ef.gif" alt="" width="100%" height="300px"/></CarousellaItemDiv> */}