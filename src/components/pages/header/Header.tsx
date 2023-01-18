import React, { useEffect, useState } from 'react';
import Search from '../../Search/search';
import {HeaderContainer,HeaderWrapperGrid,LogoDivPart1,SearchDivPart2,IconsDivPart3,LogoText,IconsDivPart3Wrapper,
    IconsDivForFriendsReq,IconsDivForMessages,IconsDivForAlerts,DivForUserPhoto,IconFriendsReq,IconMessages
,IconAlerts,DivForUserPhotoWrapper,UserPhoto,MenuDivForIcon,MenuIcon,HeaderLogoImage} from './HeaderElements'
import { BsFillPersonFill } from 'react-icons/bs'
import { RiMessengerFill } from 'react-icons/ri'
import { MdNotifications } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'

import { AiOutlineHeart } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'

import { setTest } from '../main-page';
import { NavLink, useNavigate } from "react-router-dom";
import store from '../../../Redux/store';
import logo from '../../../photos/Logo.jpg'
import AccountMenu from '../../../components/pages/parts-page/menu-down/index';

function Header() {

    // const navigate = useNavigate();

    const [toggleMenuFlag, setToggleMenuFlag ] = useState(false);


    const toggleMenu = () => {
        setToggleMenuFlag(!toggleMenuFlag);
        setTest(toggleMenuFlag);
    }

    const goHome = () =>{
        // navigate("/")
    }

    const [flagMenuDown, setFlagMenuDown] = useState(false);
    const clickMenuDown = () => {
        console.log(flagMenuDown);
        setFlagMenuDown(!flagMenuDown)
    }

    


    return(
        <div>
            <HeaderContainer>
                <HeaderWrapperGrid>
                <LogoDivPart1>
                    <LogoText onClick={() => goHome()}>TLOS</LogoText>
                    {/* <HeaderLogoImage src={logo} /> */}
                </LogoDivPart1>
                <SearchDivPart2>
                    <Search/>
                </SearchDivPart2>
                <IconsDivPart3>
                    <IconsDivPart3Wrapper>
                    <AccountMenu icon={"BsFillPersonFill"} />
                    <AccountMenu icon={"BiShoppingBag"} />
                    <AccountMenu icon={"AiOutlineHeart"} />
                    {/* <AccountMenu /> */}
                    {/* <AccountMenu />  */}
                        {/* <IconsDivForFriendsReq>
                            <IconFriendsReq><BsFillPersonFill onClick={() => clickMenuDown()}/> </IconFriendsReq>
                        </IconsDivForFriendsReq>
                        <IconsDivForMessages>
                            <IconMessages><AiOutlineHeart/></IconMessages>
                        </IconsDivForMessages>
                        <IconsDivForAlerts>
                            <IconAlerts><BiShoppingBag/></IconAlerts>
                        </IconsDivForAlerts> */}
                        {/* {store.getState().userReducer?.user != null ?
                            <DivForUserPhoto>
                                <DivForUserPhotoWrapper>
                                    <UserPhoto src="https://www.bing.com/th?id=OIP.p5aepZh8OpbpDE8YlmVtWgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
                                </DivForUserPhotoWrapper>   
                            </DivForUserPhoto>:""} */}
                    </IconsDivPart3Wrapper>
                </IconsDivPart3>
                </HeaderWrapperGrid>
                
            </HeaderContainer>
        </div>
    )
}


export default Header;