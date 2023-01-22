import React, { useState } from 'react';
import { useParams } from 'react-router';
import {ItemContainer,DivForHeader,ItemWrapper,ItemDivPhotosListDiv,DivForCurrentPhoto,DivForProductDetails,ItemListPhotoDiv,
    DivForSomething,DivForSomethingWrapper,DivForSomethingH1} from './SpecificItemElements'


interface RouteParam{
    id: number;
}


function SpecificItem(){
    
    

    const param = useParams();

    function getItemId(){
        console.log(param.id);
    }
    getItemId()

    const [currentPhotoId, setCurrentPhotoId] = useState("1");

    function setCurrentPhoto(id : string){
        if(id === "1"){
            setCurrentPhotoId("1")
        }else if(id === "2"){
            setCurrentPhotoId("2")
        }else if(id === "3"){
            setCurrentPhotoId("3")
        }else if(id === "4"){
            setCurrentPhotoId("4")
        }else if(id === "5"){
            setCurrentPhotoId("5")
        }
    }


    return(
        <div>
            <DivForHeader>

            </DivForHeader>
            
            <DivForSomething>
                <DivForSomethingWrapper>
                    <DivForSomethingH1>IL Women Hot Sale</DivForSomethingH1>
                </DivForSomethingWrapper>
            </DivForSomething>
            <ItemContainer>
                <ItemWrapper>
                    <DivForProductDetails>
                        a
                    </DivForProductDetails>
                    <DivForCurrentPhoto>
                        a
                    </DivForCurrentPhoto>
                    <ItemDivPhotosListDiv>
                        <ItemListPhotoDiv>
                            {currentPhotoId === "1"? 
                                <img  src="https://img.ltwebstatic.com/images3_pi/2022/11/17/1668646905113905790f8317101d5540e9450d5774_thumbnail_405x552.webp" width="45%" height="70px"  style={{"border":"1px solid black" ,"padding":"2px"}} />
                            :
                                <img onClick={() => setCurrentPhoto("1")} src="https://img.ltwebstatic.com/images3_pi/2022/11/17/1668646905113905790f8317101d5540e9450d5774_thumbnail_405x552.webp" width="45%" height="70px" style={{"padding":"2px"}} />}
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "2"? 
                            <img src="https://img.ltwebstatic.com/images3_pi/2022/08/03/165949059305be4bb78bcd7bc57c23c23460b8a034_thumbnail_405x552.webp" width="45%" height="70px"  style={{"border":"1px solid black" ,"padding":"2px"}}/>
                        :   
                            <img onClick={() => setCurrentPhoto("2")} src="https://img.ltwebstatic.com/images3_pi/2022/08/03/165949059305be4bb78bcd7bc57c23c23460b8a034_thumbnail_405x552.webp" width="45%" height="70px" style={{"padding":"2px"}} />
                        }
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                        {currentPhotoId === "3"? 
                        <img src="https://img.ltwebstatic.com/images3_pi/2021/10/09/1633770637ba74c10c0bb1ccf2d38877fa1616c29c_thumbnail_405x552.webp" width="45%" height="70px" style={{"border":"1px solid black" ,"padding":"2px"}} />
                        :
                        <img onClick={() => setCurrentPhoto("3")} src="https://img.ltwebstatic.com/images3_pi/2021/10/09/1633770637ba74c10c0bb1ccf2d38877fa1616c29c_thumbnail_405x552.webp" width="45%" height="70px" style={{"padding":"2px"}}/>}
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                            <img onClick={() => setCurrentPhoto("4")} src="https://img.ltwebstatic.com/images3_pi/2022/10/18/166606960381821acba2ac362c75769f079f67b932_thumbnail_405x552.webp" width="45%" height="70px" style={{"padding":"2px"}}/>
                        </ItemListPhotoDiv>
                        <ItemListPhotoDiv>
                            <img onClick={() => setCurrentPhoto("5")} src="https://img.ltwebstatic.com/images3_pi/2021/09/17/1631842134c7696c6b897527cd65a2f72573c60f10_thumbnail_405x552.webp" width="45%" height="70px" style={{"padding":"2px"}}/>
                        </ItemListPhotoDiv>
                    </ItemDivPhotosListDiv>
                </ItemWrapper>
            </ItemContainer>
            <br />
        </div>
    )
}

export default SpecificItem;