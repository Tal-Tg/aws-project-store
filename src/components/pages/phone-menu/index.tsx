import React, { useState, useEffect } from "react";
import {MenuContainer,MenuWrapper,ItemMenuDiv,
    ItemAnimationDiv ,ItemAnimationTitle,ItemAnimationDivBack,ItemAnimationTitleNonActive} from './MenuElements'
import {AiOutlineHome} from 'react-icons/ai'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiShoppingCart} from 'react-icons/hi'
import { useNavigate } from "react-router";



function PhoneMenu(){
    const gate = useNavigate()
    const [activeItemId, setItemActiveId] = useState(0);
    const [test , setTest] = useState(true);

    const handleActivePage = (id:number) =>{
        setItemActiveId(id)
    }
    

        const ItemIdHandle = (id: string) => {
        switch(id){
            case "0":
                setItemActiveId(0)
                handleActivePage(0)
                gate("/")
                break;
            case "1":
                setItemActiveId(1)
                handleActivePage(1)
                gate("/Item-page/all")
                break;
            case "2":
                setItemActiveId(2)
                handleActivePage(2)
                gate("/Wishes")
                break;
            case "3":
                setItemActiveId(3)
                handleActivePage(3)
                gate("/Search")
                break;
        }
    }

    function clickmetest(id:number){
        switch(id){
            case 0:
                // document.location.href = "/"
                break;
            case 1:
                // document.location.href = "/Item-page/Dresses"
                break;
            case 2:
    
                break;
            case 3:
    
                break;
            case 4:
                break;
        }
        
    }

    





    const MenuItemList = [
        {
            id:"0",
            title:"home"
        },
        {
            id:"1",
            title:"shop"
        },
        {
            id:"2",
            title:"wish"
        },
        {
            id:"3",
            title:"search"
        }
    ]
    

    return(
        <div>
            <MenuContainer>
                    <MenuWrapper>
                        {MenuItemList.map((value,id)=>
                        <div key={value.id} onClick={() => ItemIdHandle(value.id)} >
                            <ItemMenuDiv style={{"background":"white"}}>
                                <div>
                                    {id === 0? 
                                        <div style={{position:"relative",top:"2px;"}}>{activeItemId ===  id ? 
                                                <ItemAnimationDiv>
                                                    <AiOutlineHome style={{"position":"relative",fontSize:"27px"}}/>
                                                    
                                                    {/* <AiTwotoneHome style={{"position":"relative",fontSize:"27px"}} /> */}
                                                </ItemAnimationDiv>
                                            : 
                                                <ItemAnimationDivBack>
                                                    <AiOutlineHome style={{"position":"relative",fontSize:"27px"}} onClick={() => clickmetest(0)}/>
                                                </ItemAnimationDivBack>
                                            } 
                                        </div>
                                    :
                                    id === 1? 
                                    <div>
                                        {activeItemId === id ? 
                                        <ItemAnimationDiv >
                                            <AiOutlineShoppingCart style={{"position":"relative",fontSize:"27px"}}/>
                                            {/* <HiShoppingCart style={{"position":"relative",fontSize:"27px"}}/> */}
                                        </ItemAnimationDiv>
                                    : 
                                        <ItemAnimationDivBack >
                                            <AiOutlineShoppingCart style={{"position":"relative",fontSize:"27px",color:"grey"}} onClick={() => clickmetest(1)}/>
                                        </ItemAnimationDivBack>
                                    } 
                                    </div>
                                            
                                    :
                                    id === 2? 
                                        <div>
                                        {activeItemId === id ? 
                                            <ItemAnimationDiv >
                                                <AiOutlineHeart style={{"position":"relative",fontSize:"27px"}} />
                                                {/* <HiShoppingCart style={{"position":"relative",fontSize:"27px"}}/> */}
                                            </ItemAnimationDiv>
                                            : 
                                            <ItemAnimationDivBack >
                                                <AiOutlineHeart style={{"position":"relative",fontSize:"27px",color:"grey"}} onClick={() => clickmetest(2)}/>
                                            </ItemAnimationDivBack>
                                        } 
                                        </div>
                                    :
                                    id === 3? 
                                        <div>
                                            {activeItemId === id ? 
                                                <ItemAnimationDiv >
                                                    <AiOutlineSearch style={{"position":"relative",fontSize:"27px"}}/>
                                                </ItemAnimationDiv>
                                            : 
                                                <ItemAnimationDivBack >
                                                    <AiOutlineSearch style={{"position":"relative",fontSize:"27px",color:"grey"}} onClick={() => clickmetest(3)}/>
                                                </ItemAnimationDivBack>
                                            } 
                                        </div>
                                    :
                                    ""}
                                </div>
                                <div style={{"position":"relative",fontSize:"15px",top:"-10px"}}>
                                {activeItemId === id ? 
                                    <ItemAnimationTitle >
                                        {value.title}
                                    </ItemAnimationTitle>
                                    :
                                    <ItemAnimationTitleNonActive >
                                        {value.title}
                                        {/* <Link to="">{value.title}</Link> */}
                                    </ItemAnimationTitleNonActive>}
                                    
                                </div>
                            </ItemMenuDiv >
                        </div>
                        )}
                    </MenuWrapper>
            </MenuContainer>
        </div>
    )
}

export default PhoneMenu


                        {/* <AiOutlineHome style={{"position":"relative"}}/>
                        <span style={{"fontSize":"15px"}}>home</span> */}