import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";
import store from "../../../Redux/store";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Routing from "../../route/routing";
import {MenuWrapper,MenuIcon,MenuExitIcon,MenuWrapperReverse,TabMenu,TabMenuItem,MenuItemsWrapperGrid,
    MenuGridItem} from './MainPageElements'



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
                            MEN
                        </TabMenuItem>
                        <TabMenuItem>
                            MEN
                        </TabMenuItem>
                    </TabMenu>
                    <br />
                        <br />
                        <br />
                    <MenuItemsWrapperGrid>
                    <MenuGridItem>
                        <h2>Menu coming Soon</h2>
                    </MenuGridItem>
                    <MenuGridItem>

                    </MenuGridItem>
                    <MenuGridItem>

                    </MenuGridItem>
                    <MenuGridItem>

                    </MenuGridItem>
                    <MenuGridItem>

                    </MenuGridItem>
                    </MenuItemsWrapperGrid>
                </MenuWrapper>
            :!toggleMenuFlag?
            <MenuWrapperReverse>
            </MenuWrapperReverse>:""}
            <BrowserRouter>
                <Routing/>
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