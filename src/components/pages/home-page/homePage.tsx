import React, { useEffect, useState } from "react";
import { NewPostContainer,PostsSections,HomePageContainer,HomePageWrapper,HomePageTab,
    TabItemDiv,HomePageWrapperTab,DiscountGifDiv,GridContainer,GridItems,GridWrapper,
    GridItemPhoto,GridHeader,CarusellaContainer,CarusellaWrapper,StyledGalleryContainer,
    TabStyleGalleryContainer} from './homePageElements'
import {TabBar} from '../Tab-bar/index'
import Carusella from "../../Carusella/carusella";
import Carusella2 from "../../CarusellaClothes";
import CarusellaCommercial from "../../CarusellaCommercial";
import CarusellaRelevent from "../../CarusellaCommercial";
import StyleGallery from '../../../components/pages/style-gallery/index' 
import TabStyleGallery from '../../../components/pages/style-gallery/tab-style-gallery/index'
import { useNavigate } from "react-router";

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
                        <img src="https://img.ltwebstatic.com/images3_ach/2022/12/27/16721264934111d44967522e3f3cece8287e5b2b0a.gif" 
                        width="100%" height="100%"/>
                    </DiscountGifDiv>
                    <br />
                    <GridHeader>
                        Shop By Category
                    </GridHeader>
                    <br />
                    <GridContainer>
                        <GridWrapper>
                            <GridItems onClick={() => Route("ItemGrid/Dresses")}>
                                Dresses
                            </GridItems>
                            <GridItems onClick={() => Route("Tops")}>
                                Tops
                            </GridItems>
                            <GridItems>
                                Knitwear
                            </GridItems>
                            <GridItems>
                                Sweatshirts
                            </GridItems>
                            <GridItems>
                                Outerwear
                            </GridItems>
                            <GridItems>
                                Two-pieces
                            </GridItems>
                            <GridItems>
                                Bottoms
                            </GridItems>
                            <GridItems>
                                Denim
                            </GridItems>
                            <GridItems>
                                Jewelry
                            </GridItems>
                            <GridItems>
                                Shoes
                            </GridItems>
                        </GridWrapper>
                    </GridContainer>
                    <GridHeader>
                        #TLOSsales
                    </GridHeader>
                    <CarusellaContainer>
                        <CarusellaWrapper>
                            {/* <Carusella /> */}
                            <Carusella2/>
                        </CarusellaWrapper>
                    </CarusellaContainer>
                    <CarusellaContainer>
                        <CarusellaWrapper>
                            <CarusellaRelevent />
                        </CarusellaWrapper>
                    </CarusellaContainer>
                    <br />
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
        </div>
    )
}

export default HomePage;


{/* <CarusellaCommercial /> */}