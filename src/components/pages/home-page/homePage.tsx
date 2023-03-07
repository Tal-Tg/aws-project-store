import React, { useEffect, useState } from "react";
import { NewPostContainer,PostsSections,HomePageContainer,HomePageWrapper,HomePageTab,
    TabItemDiv,HomePageWrapperTab,DiscountGifDiv,GridContainer,GridItems,GridWrapper,
    GridItemPhoto,GridHeader,CarusellaContainer,CarusellaWrapper,StyledGalleryContainer,
    TabStyleGalleryContainer,ImageTestForGrid,ImageTestForGridKnitwear,ImageTestForGridSweatshirts,
    ImageTestForGridSweatTwoPieces,ImageTestForGridSweatBottoms,ImageTestForGridSweatJewelry,ImageTestForGridSweatShoes
} from './homePageElements'
import {TabBar} from '../Tab-bar/index'
import Carusella from "../../Carousella/carousella";
import Carusella2 from "../../CarousellaClothes";
import CarusellaCommercial from "../../CarousellaCommercial";
import CarusellaRelevent from "../../CarousellaCommercial";
import StyleGallery from '../../../components/pages/style-gallery/index' 
import TabStyleGallery from '../../../components/pages/style-gallery/tab-style-gallery/index'
import { useNavigate } from "react-router";
import {GiLargeDress} from 'react-icons/gi'
import phototest from './tshirt.jpg'
import knitwear from './knitwear.jpg'
import dresses2 from './dresses2.jpg'
import sweatshirts from './sweatshirts.jpg'
import outerwear from './outerwear.jpg'
import twopieces from './twopieces.jpg'
import bottoms from './bottoms.jpg'
import denim from './denim.jpg'
import jewelry from './jewelry.jpg'
import shoes from './shoes.jpg'
import CarouselOwnMade from "../CarusellaOwnMade";
import HomePageItemsGrid from "./home-page-grid-items";



function HomePage(){
    const navigate = useNavigate();
    




    // const clothestItemsList = [
    //     {
    //         id:1,
    //         image:"https://img.ltwebstatic.com/images3_pi/2022/12/01/1669824024900a46dd4ade193edb1b03001f4df687_thumbnail_405x552.webp",
    //         textLink: "Paisley Print Lantern Sleeve Wrap Split Thigh Dress",
    //         price:
    //     },
    //     {},
    //     {},
    //     {},
    //     {},
    //     {},
    //     {},
    //     {},
    //     {},
    //     {}


    // ]

    function Route(str:string){
        if(str === "ItemGrid/Dresses"){
            navigate("/Item-page/Dresses")
        }
    }

    const [firstTimeHereNow , setFirstTimeHereNow] = useState(true);

    useEffect(() => {
        if(firstTimeHereNow){
            window.scrollTo(0, 0)
            setFirstTimeHereNow(false)
        }
    })



    
    return (
        <div>
            <HomePageWrapperTab>
                {/* <TabBar text=""/> */}
                <br />
                <br />
                <br />
                {/* <br /> */}
            </HomePageWrapperTab>
            <HomePageContainer>
                <HomePageWrapper>
                    <br />
                    <DiscountGifDiv>
                        {/* <img src="https://img.ltwebstatic.com/images3_ach/2022/12/27/16721264934111d44967522e3f3cece8287e5b2b0a.gif"  */}
                        <img src="https://img.ltwebstatic.com/images3_ach/2023/02/17/16766182108cd486e653f71e6d8c5c6428760b7030.gif" 
                        width="100%" height="100%"/>
                    </DiscountGifDiv>
                    <GridHeader>
                        Shop By Category
                    </GridHeader>

                    <GridContainer>
                        <GridWrapper>
                            <GridItems onClick={() => Route("ItemGrid/Dresses")}>
                                {/* <GiLargeDress style={{"color":"#66bfbf" ,"position":"relative","right":"5px","fontSize":"28px"}} />Dresses */}
                                <ImageTestForGrid style={{"position":"relative","right":"5px","width":"35px","height":"40px"}} src={dresses2} />Dresses
                                
                            </GridItems>
                            <GridItems onClick={() => Route("Tops")}>
                                <ImageTestForGrid  src={phototest} />Tops
                            </GridItems>
                            <GridItems>
                            <ImageTestForGridKnitwear src={knitwear} />Knitwear
                            </GridItems>
                            <GridItems>
                            <ImageTestForGridSweatshirts src={sweatshirts} />Sweatshirts
                            </GridItems>
                            <GridItems>
                            <ImageTestForGridSweatshirts src={outerwear} />Outerwear
                            </GridItems>
                            <GridItems>
                                <ImageTestForGridSweatTwoPieces src={twopieces} />Two-pieces
                            </GridItems>
                            <GridItems>
                                <ImageTestForGridSweatBottoms src={bottoms} /> Bottoms
                            </GridItems>
                            <GridItems>
                                <ImageTestForGridSweatBottoms src={denim} /> Denim
                            </GridItems>
                            <GridItems>
                                <ImageTestForGridSweatJewelry src={jewelry}/> Jewelry
                            </GridItems>
                            <GridItems>
                                <ImageTestForGridSweatShoes src={shoes}/>Shoes
                            </GridItems>
                        </GridWrapper>
                    </GridContainer>

                    <GridHeader>
                        #TLOSsales
                    </GridHeader>

                    <CarusellaContainer>
                        <CarusellaWrapper>
                            <CarouselOwnMade />
                        </CarusellaWrapper>
                    </CarusellaContainer>
                    
                    <CarusellaContainer>
                        <CarusellaWrapper>
                            <CarusellaRelevent />
                        </CarusellaWrapper>
                    </CarusellaContainer>
                    <br />
                    <br />

                    {/* make it responsive for morephoto */}
                    <CarusellaContainer>
                        <CarusellaWrapper>
                            <CarouselOwnMade />
                        </CarusellaWrapper>
                    </CarusellaContainer>

                    <HomePageItemsGrid />

                    <GridHeader>
                        Style gallery
                    </GridHeader>
                    <StyledGalleryContainer>
                        <StyleGallery />
                    </StyledGalleryContainer>
                    <br />
                    <TabStyleGalleryContainer>
                        <TabStyleGallery/>
                    </TabStyleGalleryContainer>
                    <br />
                </HomePageWrapper>
            </HomePageContainer>
            
            <br />
            <br />
        </div>
    )
}

export default HomePage;


{/* <CarusellaCommercial /> */}