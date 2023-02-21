import React from 'react';
import ActionAreaCard from '../../Items-page/item-card/Item';
import {GridContainer , GridWrapper , ShowMoreButton} from './HomeItemsGrisElements'


function HomePageItemsGrid(){
    return(
        <div>
            <GridContainer>
                <GridWrapper>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/17/1668646905113905790f8317101d5540e9450d5774_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/08/03/165949059305be4bb78bcd7bc57c23c23460b8a034_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/10/09/1633770637ba74c10c0bb1ccf2d38877fa1616c29c_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/10/18/166606960381821acba2ac362c75769f079f67b932_thumbnail_405x552.webp" />
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/09/17/1631842134c7696c6b897527cd65a2f72573c60f10_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/09/27/1632707526ed7b433d058f1ae67d78658e28ea9dd0_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648646746849c7693e9a8d10fc76a36e183206d_thumbnail_405x552.webp"/>

                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/10/08/16651917604ff0b53bf9cad1134aa03fc9bd6390ac_thumbnail_405x552.webp"/>

                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/10/18/1634546933a87556d949df5bc621878bf440a6b540_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/08/17/1629155701c844dc7721f06d10e688aadc98ff12d5_thumbnail_405x552.webp"/>

                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/09/06/16309093294415d1d89aeec7aafce60fd87df55158_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2020/09/16/16002297627696d9dec1e2774d111599fe64c703bd_thumbnail_405x552.webp"/>
                        
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/04/26/1619410880e22fe80383ceceec1d86ab95ee1d9eaf_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/09/27/166426089559348f18e90f172bcd0bd97951d5550b_thumbnail_405x552.webp"/>
                    
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/09/26/16641564703895d5603cf721c07aa65bc78686593d_thumbnail_405x552.webp"/>                  
                    {/* <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/17/166866572110aa3c29db2d1a9eeb39961a33241eaa_thumbnail_405x552.webp"/>
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/17/166866572110aa3c29db2d1a9eeb39961a33241eaa_thumbnail_405x552.webp"/>
                    <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/17/166866572110aa3c29db2d1a9eeb39961a33241eaa_thumbnail_405x552.webp"/> */}
                </GridWrapper>
                <ShowMoreButton>
                    <span style={{"cursor":"pointer"}}>הצג עוד...</span>
                    
                </ShowMoreButton>
            </GridContainer>
        </div>
    )
}

export default HomePageItemsGrid;