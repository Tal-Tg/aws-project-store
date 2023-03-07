import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BrowserRouter, useNavigate } from "react-router-dom";
import store from "../../../Redux/store";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Routing from "../../route/routing";
import {MenuWrapper,MenuIcon,MenuExitIcon,MenuWrapperReverse,TabMenu,TabMenuItem,MenuItemsWrapperGrid,
    MenuGridItem,MenuGridItemWrapper,MenuCircleDiv} from './MainPageElements'
import newImg from './newinimg.jpg'
import saleimg from './saleimg.jpg'
import dressesimg from './dressesimg.jpg'
import {AiOutlineCaretDown} from "react-icons/ai";
import BEACHWEARimg from './BEACHWEARimg.jpg'
import DENIMimg from './DENIMimg.jpg'
import shoesimg from './shoesimg.jpg'
import bagsimg from './bagsimg.jpg'
import PhoneMenu from "../phone-menu";



var lla = false;




export function setTest(test:any) {
    lla = test;
    console.log("tal " +lla);
}





function MainPage(){

    const [checkUrl, setCheckUrl] = useState(false);

    const checkUrlFunction = () =>{
        var currentURL = window.location.href
        if(currentURL.includes("/login")){
            console.log("true");
            setCheckUrl(true)
        }else{
            setCheckUrl(false)
        }

    }

    
    var [stopFlagUrl, setStopFlagUrl] = useState(true);


    const [toggleMenuFlag, setToggleMenuFlag ] = useState(false);


    const toggleMenu = () => {
        setToggleMenuFlag(!toggleMenuFlag);
        setTest(toggleMenuFlag);
    }
    useEffect(()=>{
        checkUrlFunction();
    })





    return(
        <div>
            {checkUrl ?"":<Header />}
            {!toggleMenuFlag ? 
            <MenuIcon>
                <AiOutlineMenu onClick={()=>toggleMenu()}/>
            </MenuIcon>
            
            :
            <MenuIcon>
                <AiOutlineMenu onClick={()=>toggleMenu()}/>
            </MenuIcon>}
            {toggleMenuFlag? 
                <MenuWrapper>
                    <TabMenu>
                        <TabMenuItem style={{fontWeight:"bold",color:"black"}}>
                            WOMEN
                        </TabMenuItem>
                        <TabMenuItem>
                            KIDS
                        </TabMenuItem>
                        <TabMenuItem>
                            MEN
                        </TabMenuItem>
                        <TabMenuItem>
                            WOMEN
                        </TabMenuItem>
                        <TabMenuItem>
                            KIDS
                        </TabMenuItem>
                        <TabMenuItem>
                            MEN
                        </TabMenuItem>
                        <TabMenuItem>
                            WOMEN
                        </TabMenuItem>
                        <TabMenuItem>
                            KIDS
                        </TabMenuItem>
                        <TabMenuItem>
                            MEN
                        </TabMenuItem>
                    </TabMenu>
                    <hr />
                    <MenuItemsWrapperGrid>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                            <MenuCircleDiv><img src={newImg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>NEW IN</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={saleimg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>SALE</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={newImg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>CLOTHING</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={dressesimg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>DRESSES</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={BEACHWEARimg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>BEACHWEAR</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={DENIMimg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>DENIM</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={shoesimg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>SHOES</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={bagsimg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>BAGS & LUGGAGE</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={newImg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>BAGS & LUGGAGE</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={newImg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>BAGS & LUGGAGE</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={newImg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>BAGS & LUGGAGE</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={newImg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>BAGS & LUGGAGE</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={newImg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>BAGS & LUGGAGE</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    <MenuGridItem>
                        <MenuGridItemWrapper>
                        <MenuCircleDiv><img src={newImg} alt="" width="100%" height="100%"/></MenuCircleDiv>
                            <div>BAGS & LUGGAGE</div>
                            <div><AiOutlineCaretDown/></div>
                        </MenuGridItemWrapper>
                    </MenuGridItem>
                    </MenuItemsWrapperGrid>
                    
                </MenuWrapper>
            :!toggleMenuFlag?
            <MenuWrapperReverse>
                
            </MenuWrapperReverse>:""}
            <BrowserRouter>
                <Routing/>
                <PhoneMenu />
            </BrowserRouter>
            {checkUrl ? "" :<Footer/>}
            
        </div>
    )
}

export default MainPage;



            {/* {!toggleMenuFlag ? 
            <MenuIcon>
                <AiOutlineMenu onClick={()=>toggleMenu()}/>
            </MenuIcon>:
            <MenuIcon>
                <MenuExitIcon onClick={()=>toggleMenu()}>x</MenuExitIcon>
            </MenuIcon>} */}