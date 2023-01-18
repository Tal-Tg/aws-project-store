import react from 'react';
import {TabContainer,TabWrapper,TabItems} from './TabElements'

const TabStyleGallery = ( ) =>{
    return(
        <div>
            <TabContainer>
                <TabWrapper>
                    <TabItems style={{"background":"#233142"}}>
                        Date
                    </TabItems>
                    <TabItems style={{"background":"#854836"}}>
                        Street Style
                    </TabItems>
                    <TabItems style={{"background":"#e6d3a7"}}>
                        Weekend Getaway
                    </TabItems>
                    <TabItems style={{"background":"#f4aeba"}}>
                        Energetic Look
                    </TabItems>
                    <TabItems style={{"background":"#c7b198"}}>
                        Curve
                    </TabItems >
                    <TabItems style={{"background":"#b5591e"}}>
                        Girls Outing
                    </TabItems>
                    <TabItems  style={{"background":"#cb9bba"}}>
                        The Denim Guide
                    </TabItems>
                    <TabItems  style={{"background":"#e9e2d0"}}> 
                        Embrace Casual Style
                    </TabItems>
                    <TabItems   style={{"background":"#9f1e49"}}>
                        Fall & Winter
                    </TabItems>
                    <TabItems   style={{"background":"#113f67"}}>
                    Warm & Stylish
                    </TabItems>
                </TabWrapper>
            </TabContainer>
        </div>
    )
}


export default TabStyleGallery