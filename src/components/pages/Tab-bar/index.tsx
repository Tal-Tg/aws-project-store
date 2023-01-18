import React, { useState } from 'react';
import {TabContainer,TabDivForHeader,TabWrapper,TabItemsDiv,TabActiveItemDiv,TestSpan} from './TabElements'
import './tabcss.css'



export const TabBar = ({text="",light={}}) =>{
    const [activeId,setActiveId] = useState(0);

    function Active(id:number){
        setActiveId(id)

    }



    return(
        <div>
            <TabDivForHeader></TabDivForHeader>
            <TabContainer>
                <TabWrapper>
                    {/* {activeId == 1 ? 
                        <TabActiveItemDiv>
                            Sale
                        </TabActiveItemDiv>
                    :                    
                    <TabItemsDiv onClick={() =>{Active(1)}}>
                        Sale
                    </TabItemsDiv>
                    } */}
                    <TabItemsDiv >
                        Sale
                    </TabItemsDiv>
                    {/* <TabItemsDiv onClick={() =>{Active(1)}}>
                        Sale
                    </TabItemsDiv> */}
                    <TabItemsDiv>
                        New in
                    </TabItemsDiv>
                    <TabItemsDiv>
                        Shoes
                    </TabItemsDiv>
                    <TabItemsDiv>
                        Accessories
                    </TabItemsDiv>
                    <TabItemsDiv>
                        S` Clocks
                    </TabItemsDiv>
                    <TabItemsDiv>
                        Brands
                    </TabItemsDiv>
                    <TabItemsDiv>
                        Outlet
                    </TabItemsDiv>
                </TabWrapper>
            </TabContainer>
        </div>
    )
}