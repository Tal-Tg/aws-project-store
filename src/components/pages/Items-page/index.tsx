import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ActionAreaCard from "./item-card/Item";
import {ItemsContainer , DivForHeader, ItemsWrapper, ItemsMenuFilter,ItemsGridContainer, 
    PageLinkContainer,PageLingWrapper,LinkItemDiv , SplitLineLinks,ItemMenuList,DivForSomething,
    ItemMenuListOpen,ItemMenuStyleClose,ItemMenuStyleCloseText,ItemMenuStyleCloseIconDiv,ItemMenuStyleOpen,ItemMenuDivSeparate,
    ItemMenuDivContainerList,ItemMenuDivLIList,ItemMenuListOpenItemDiv,ItemMenuListOpenItemDivText,ItemMenuListOpenItemDivIcon,
    ItemMenuListOpenItemDivInput,SubItemOpenDiv3Items,SubItemOpenDiv4Items,SubItemsOpenDivSize,SubItemsOpenDivSizeItem,SubItemsOpenDivColorItem,SubItemsOpenDivColor,
    SubItemsOpenDivColorItemImg,SebShowMoreDiv,DivForSomethingWrapper,DivForSomethingH1} from './ItemsElemnts'
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import PriceRange from "../parts-page/price-range-item";




interface RouteParam{
    title: string;
}


const ItemGrid: React.FC = (): JSX.Element => {

    const param = useParams();
    const [categoryClick , setCategoryClick] = useState(false);
    const [categoryTiShirt , setCategoryTiShirt] = useState(false);
    const [category2 , setCategory2] = useState(false);
    const [firstTimeHereNow , setFirstTimeHereNow] = useState(true);
    
    var navigate = useNavigate();

    useEffect(() => {
        if(firstTimeHereNow){
            window.scrollTo(0, 0)
            setFirstTimeHereNow(false)
        }
    })

    const [sizeClick , setSizeClick] = useState(false);
    const [colorClick , setColorClick] = useState(false);
    const [materialClick , setMaterialClick] = useState(false);
    const [ materialShowMoreClick , setMaterialShowMoreClick ] = useState(false)
    const [styleClick, setStyleClick] = useState(false)
    const [typeCheck, setTypeCheck] = useState(false)

    function showMore(str: string) {
        if(str == "material"){
            setMaterialShowMoreClick(!materialShowMoreClick);
        }
        
    }
    

    function clickTest(str : string){
        if(str === "1"){
            setCategoryClick(!categoryClick)
            setCategoryTiShirt(false)
            setCategory2(false)
        }else if(str === "1:1"){
            setCategoryTiShirt(!categoryTiShirt)
        }else if(str === "1:2"){
            setCategory2(!category2)
        }else if(str === "2"){
            setSizeClick(!sizeClick)
        }else if(str === "3"){
            setColorClick(!colorClick)
        }else if(str === "4"){
            setMaterialClick(!materialClick)
            setMaterialShowMoreClick(false);
        }
    }


    function toggle(source:any) {
        if(categoryTiShirt && source == "טופים, חולצות, וחולצות טי"){
            document.getElementById("טופים").click();
            document.getElementById("חולצות").click();
            document.getElementById("חולצות טי").click();
        }else if(category2 && source == "סווטשירט לנשים"){
            document.getElementById("חצאיות לנשים").click();
            document.getElementById("מכנסיים לנשים").click();
            document.getElementById("טייצים לנשים").click();
            document.getElementById("שוטסרט לנשים").click();
        }
    }



    function sendToSpecificItem(id:any){
        navigate("/Item-page/"+param.title+"/staus%uservarification-Ytdjpawiew-dasfdsfds-gfdgdf@@!!2eoplkhgn/"+String(id))
        // if(id == 1){
        //     navigate("/Item-page/"+param.title+"/staus%uservarification-Ytdjpawiew-dasfdsfds-gfdgdf@@!!2eoplkhgn/")
        // }else if(id == 2){
        //     navigate("/Item-page/"+param.title+"/staus%uservarification-Ytdjpawiew-dasfdsfds-gfdgdf@@!!2eoplkhgn/")
        // }else if(id == 3){
        //     navigate("/Item-page/"+param.title+"/staus%uservarification-Ytdjpawiew-dasfdsfds-gfdgdf@@!!2eoplkhgn/")
        // }else if(id == 4){

        // }else if(id == 5){

        // }else if(id == 6){

        // }else if(id == 7){

        // }else if(id == 8){

        // }else if(id == 9){

        // }else if(id == 10){

        // }else if(id == 11){

        // }else if(id == 12){

        // }else if(id == 13){

        // }else if(id == 14){

        // }else if(id == 15){

        // }else if(id == 16){

        // }else if(id == 17){

        // }else if(id == 18){

        // }
    }


    return(
        <div>
            <DivForHeader></DivForHeader>
            <PageLinkContainer>
                <PageLingWrapper>
                <LinkItemDiv><Link style={{"textDecoration":"none","color":"#767676"}} to="/"> {param.title} </Link></LinkItemDiv>
                    <SplitLineLinks>/</SplitLineLinks>
                    <LinkItemDiv><Link style={{"textDecoration":"none","color":"#767676"}} to="/">Home-page</Link></LinkItemDiv>
                </PageLingWrapper>
            </PageLinkContainer>

            <DivForSomething>
                <DivForSomethingWrapper>
                    <DivForSomethingH1>IL Women Hot Sale</DivForSomethingH1>

                </DivForSomethingWrapper>
            </DivForSomething>

            <ItemsContainer>
                <ItemsWrapper>


                    <ItemsGridContainer>
                        <div onClick={() => sendToSpecificItem(1)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/17/1668646905113905790f8317101d5540e9450d5774_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(2)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/08/03/165949059305be4bb78bcd7bc57c23c23460b8a034_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(3)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/10/09/1633770637ba74c10c0bb1ccf2d38877fa1616c29c_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(4)}>
                        <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/10/18/166606960381821acba2ac362c75769f079f67b932_thumbnail_405x552.webp" />
                        </div>
                        <div onClick={() => sendToSpecificItem(5)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/09/17/1631842134c7696c6b897527cd65a2f72573c60f10_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(6)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/09/27/1632707526ed7b433d058f1ae67d78658e28ea9dd0_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(7)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/03/23/161648646746849c7693e9a8d10fc76a36e183206d_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(8)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/10/08/16651917604ff0b53bf9cad1134aa03fc9bd6390ac_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(9)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/10/18/1634546933a87556d949df5bc621878bf440a6b540_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(10)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/18/1668739527a6d87e7541bc47909860d52a88256da1_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(11)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/09/06/16309093294415d1d89aeec7aafce60fd87df55158_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(12)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/08/17/1629155701c844dc7721f06d10e688aadc98ff12d5_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(13)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/08/17/1629155701c844dc7721f06d10e688aadc98ff12d5_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(14)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2020/09/16/16002297627696d9dec1e2774d111599fe64c703bd_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(15)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/04/26/1619410880e22fe80383ceceec1d86ab95ee1d9eaf_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(16)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/09/27/166426089559348f18e90f172bcd0bd97951d5550b_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(17)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/09/26/16641564703895d5603cf721c07aa65bc78686593d_thumbnail_405x552.webp"/>
                        </div>
                        <div onClick={() => sendToSpecificItem(18)}>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/09/06/1630902321c6135e7c84a11e54f3fb5c228735265c_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/10/1668074236556cdd1c929df590e69690465568d781_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/17/166866572110aa3c29db2d1a9eeb39961a33241eaa_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/17/16686549799fca4e745ecdedd85568ce1bca36a38e_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/08/10/1628568743a719acbad074122ef92106f06bfef6ae_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2020/10/22/16033460875577fa76fd0bf1e46ac8674763d1ce54_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2021/09/26/163263419581ae5eed8cee2c901447ac0a41c341ae_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/10/29/16670236510d60fb768cb6ae33d34f6c3ac1ce42d8_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/10/24/16666089128751c271b909d291fba2eddc51e5680a_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2022/11/24/16692530253a472f9d52cc9019282633fc78fdcd4c_thumbnail_405x552.webp"/>
                        </div>
                        <div>
                            <ActionAreaCard imgSrc="https://img.ltwebstatic.com/images3_pi/2020/09/25/160102682024d5f509f990b7345c16258a5a9a7e2f_thumbnail_405x552.webp"/>
                        </div>
                    </ItemsGridContainer>


                    <ItemsMenuFilter>
                        {categoryClick ? 
                        <ItemMenuListOpen >
                            <ItemMenuStyleOpen>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlineMinus onClick={() => clickTest("1")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("1")}>
                                    קטגוריה     
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleOpen>
                            <ItemMenuListOpenItemDiv>
                                <ItemMenuListOpenItemDivInput>
                                    <input type="checkbox" id="שמלות" name="שמלות"></input>
                                    <ItemMenuListOpenItemDivText htmlFor="שמלות"> שמלות</ItemMenuListOpenItemDivText>
                                </ItemMenuListOpenItemDivInput>
                            </ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDiv>
                                <ItemMenuListOpenItemDivInput>
                                    <input type="checkbox" id="טופים,חולצות,וחולצות טי" name="טופים,חולצות,וחולצות טי" ></input>
                                    <ItemMenuListOpenItemDivText htmlFor="טופים,חולצות,וחולצות טי" onClick={()=> toggle("טופים, חולצות, וחולצות טי")}>טופים, חולצות, וחולצות טי</ItemMenuListOpenItemDivText>
                                </ItemMenuListOpenItemDivInput>
                                <ItemMenuListOpenItemDivIcon>
                                    {!categoryTiShirt ? <AiOutlinePlus fontSize="12px" fontWeight="bold" color="#767676" onClick={() => clickTest("1:1")}/> : <AiOutlineMinus fontSize="12px" fontWeight="bold" color="#767676" onClick={() => clickTest("1:1")} />}
                                </ItemMenuListOpenItemDivIcon>
                                {categoryTiShirt ? 
                                <div style={{"background":"white","height":"100px"}}>
                                    <SubItemOpenDiv3Items>
                                        <ItemMenuListOpenItemDivInput>
                                            <input type="checkbox" id="טופים" name="טופים"  ></input>
                                            <ItemMenuListOpenItemDivText htmlFor="טופים" id="טופים"> טופים</ItemMenuListOpenItemDivText>
                                        </ItemMenuListOpenItemDivInput>
                                        <ItemMenuListOpenItemDivInput>
                                            <input type="checkbox" id="חולצות"  name="חולצות" ></input>
                                            <ItemMenuListOpenItemDivText htmlFor="חולצות" id="חולצות"> חולצות</ItemMenuListOpenItemDivText>
                                        </ItemMenuListOpenItemDivInput>
                                        <ItemMenuListOpenItemDivInput>
                                            <input type="checkbox" id="חולצות טי" name="חולצות טי" ></input>
                                            <ItemMenuListOpenItemDivText htmlFor="חולצות טי" id="חולצות טי"> חולצות טי</ItemMenuListOpenItemDivText>
                                        </ItemMenuListOpenItemDivInput>
                                    </SubItemOpenDiv3Items>
                                </div>:""}
                                    
                            </ItemMenuListOpenItemDiv>

                            <ItemMenuListOpenItemDiv>
                                <ItemMenuListOpenItemDivInput>
                                    <input type="checkbox" id="vehicle3" name="vehicle1" ></input>
                                    <ItemMenuListOpenItemDivText htmlFor="vehicle3"> חלק תחתון לנשים</ItemMenuListOpenItemDivText>
                                </ItemMenuListOpenItemDivInput>
                            </ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDiv>
                                <ItemMenuListOpenItemDivInput>
                                    <input type="checkbox" id="vehicle4" name="vehicle4"  ></input>
                                    <ItemMenuListOpenItemDivText htmlFor="vehicle4" onClick={()=> toggle("סווטשירט לנשים")}> סווטשירט לנשים</ItemMenuListOpenItemDivText>
                                </ItemMenuListOpenItemDivInput>
                                <ItemMenuListOpenItemDivIcon>
                                {!category2 ? <AiOutlinePlus fontSize="12px" fontWeight="bold" color="#767676" onClick={() => clickTest("1:2")}/> : <AiOutlineMinus fontSize="12px" fontWeight="bold" color="#767676" onClick={() => clickTest("1:2")} />}
                                </ItemMenuListOpenItemDivIcon>

                                {category2 ? 
                                <div style={{"background":"white","height":"auto"}}>
                                    <SubItemOpenDiv4Items>
                                        <ItemMenuListOpenItemDivInput>
                                            <input type="checkbox" id="חצאיות לנשים" name="חצאיות לנשים" ></input>
                                            <ItemMenuListOpenItemDivText htmlFor="חצאיות לנשים" id="חצאיות לנשים"> חצאיות לנשים</ItemMenuListOpenItemDivText>
                                        </ItemMenuListOpenItemDivInput>
                                        <ItemMenuListOpenItemDivInput>
                                            <input type="checkbox" id="מכנסיים לנשים"  name="מכנסיים לנשים" ></input>
                                            <ItemMenuListOpenItemDivText htmlFor="מכנסיים לנשים" id="מכנסיים לנשים"> מכנסיים לנשים</ItemMenuListOpenItemDivText>
                                        </ItemMenuListOpenItemDivInput>
                                        <ItemMenuListOpenItemDivInput>
                                            <input type="checkbox" id="טייצים לנשים" name="טייצים לנשים" ></input>
                                            <ItemMenuListOpenItemDivText htmlFor="טייצים לנשים" id="טייצים לנשים"> טייטצים לנשים</ItemMenuListOpenItemDivText>
                                        </ItemMenuListOpenItemDivInput>
                                        <ItemMenuListOpenItemDivInput>
                                            <input type="checkbox" id="שוטסרט לנשים" name="שוטסרט לנשים" ></input>
                                            <ItemMenuListOpenItemDivText htmlFor="שוטסרט לנשים" id="שוטסרט לנשים">שוטסרט לנשים</ItemMenuListOpenItemDivText>
                                        </ItemMenuListOpenItemDivInput>
                                    </SubItemOpenDiv4Items>
                                </div>:""}

                            </ItemMenuListOpenItemDiv>
                            <SebShowMoreDiv onClick={() => showMore("")}>
                                הצג עוד+
                            </SebShowMoreDiv>
                        </ItemMenuListOpen>
                        
                        :

                        <ItemMenuList onClick={() => clickTest("1")}>
                            <ItemMenuStyleClose>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlinePlus onClick={() => clickTest("1")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText>
                                    קטגוריה     
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleClose>
                        </ItemMenuList>}

                        <ItemMenuDivSeparate></ItemMenuDivSeparate>

                        {sizeClick ? 
                        <ItemMenuListOpen >
                            <ItemMenuStyleOpen>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlineMinus onClick={() => clickTest("2")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("2")}>
                                    מידה     
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleOpen>
                            <SubItemsOpenDivSize>
                                <SubItemsOpenDivSizeItem>
                                <ItemMenuListOpenItemDivInput>
                                <ItemMenuListOpenItemDivText htmlFor="XXS" >XXS</ItemMenuListOpenItemDivText>
                                <input type="checkbox" id="XXS" name="XXS"/>
                                </ItemMenuListOpenItemDivInput>
                                </SubItemsOpenDivSizeItem>
                                <SubItemsOpenDivSizeItem>
                                <ItemMenuListOpenItemDivInput>
                                <ItemMenuListOpenItemDivText htmlFor="מידה אחת" >מידה אחת</ItemMenuListOpenItemDivText>
                                <input type="checkbox" id="מידה אחת"  />
                                </ItemMenuListOpenItemDivInput>
                                </SubItemsOpenDivSizeItem>
                                <SubItemsOpenDivSizeItem>
                                <ItemMenuListOpenItemDivInput>
                                <ItemMenuListOpenItemDivText htmlFor="S">S</ItemMenuListOpenItemDivText>
                                <input type="checkbox" id="S" name="S" />
                                </ItemMenuListOpenItemDivInput>
                                </SubItemsOpenDivSizeItem>
                                <SubItemsOpenDivSizeItem>
                                <ItemMenuListOpenItemDivInput>
                                <ItemMenuListOpenItemDivText htmlFor="XS" >XS</ItemMenuListOpenItemDivText>
                                    <input type="checkbox" id="XS" name="XS" />
                                </ItemMenuListOpenItemDivInput>
                                </SubItemsOpenDivSizeItem>
                                <SubItemsOpenDivSizeItem>
                                <ItemMenuListOpenItemDivInput>
                                <ItemMenuListOpenItemDivText htmlFor="L" >L</ItemMenuListOpenItemDivText>
                                    <input type="checkbox" id="L" />
                                </ItemMenuListOpenItemDivInput>
                                </SubItemsOpenDivSizeItem>
                                <SubItemsOpenDivSizeItem>
                                <ItemMenuListOpenItemDivInput>
                                <ItemMenuListOpenItemDivText htmlFor="M" >M</ItemMenuListOpenItemDivText>
                                    <input type="checkbox" id="M" />
                                </ItemMenuListOpenItemDivInput>
                                </SubItemsOpenDivSizeItem>
                            </SubItemsOpenDivSize>
                        </ItemMenuListOpen>

                        :

                        <ItemMenuList >
                            <ItemMenuStyleClose>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlinePlus onClick={() => clickTest("2")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("2")}>
                                    מידה         
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleClose>
                        </ItemMenuList>}

                        <ItemMenuDivSeparate></ItemMenuDivSeparate>

                        {colorClick ? 
                        <ItemMenuListOpen >
                            <ItemMenuStyleOpen>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlineMinus onClick={() => clickTest("3")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("3")}>
                                    צבע     
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleOpen>
                                <SubItemsOpenDivColor>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/158555620619e714eac6cf4d24523635af030c0012.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/1585556301bc3664cc0e59b223bf78e4155f30ff0b.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/15855563461db451bd5692c5bebd52c6bac56eafbb.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/15855564343707ae1547770b64d8a08fde15076d18.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/15855564026fcf3d3a93350ff7bb921f512c2795ce.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/1585556500fea3c570a8cdd3df14f20815c348872f.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/1585556531965e5d98ef5a432eab61147c16af31c6.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/15855565738cdcca3acceaef88d76f86a453c1d082.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/1585556145d5570e831d3df08f4c1803af0efa030d.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/158555664362acf943db9d324e60e9a112625dfc3e.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/15855566827f622f6ea3c8d230d1655bad7f114f67.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/15855567198bad4ed15088ca01365c8f69ea77b49c.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                    <SubItemsOpenDivColorItem>
                                        <SubItemsOpenDivColorItemImg src="https://img.ltwebstatic.com/images3_pi/2020/03/30/15855567509ceff4ce13de7e8706a63fad7ee459d5.webp"  alt="" />
                                    </SubItemsOpenDivColorItem>
                                </SubItemsOpenDivColor>
                        </ItemMenuListOpen>

                        :

                        <ItemMenuList >
                            <ItemMenuStyleClose>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlinePlus onClick={() => clickTest("3")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("3")}>
                                    צבע     
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleClose>
                        </ItemMenuList>}

                        <ItemMenuDivSeparate></ItemMenuDivSeparate>

                        {materialClick ? 
                        <ItemMenuListOpen >
                            <ItemMenuStyleOpen>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlineMinus onClick={() => clickTest("4")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("4")}> 
                                    חומר     
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleOpen>
                            {!materialShowMoreClick?
                                <div>
                            <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="מטאלי" name="מטאלי" />
                                <ItemMenuListOpenItemDivText htmlFor="מטאלי"> מטאלי</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="תחרה" name="תחרה" />
                                <ItemMenuListOpenItemDivText htmlFor="תחרה"> תחרה</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="סטן" name="סטן" />
                                <ItemMenuListOpenItemDivText htmlFor="סטן"> סטן</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="שיפון" name="שיפון" />
                                <ItemMenuListOpenItemDivText htmlFor="שיפון"> שיפון</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="קורדרוי" name="קורדרוי" />
                                <ItemMenuListOpenItemDivText htmlFor="קורדרוי"> קורדרוי</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="עור פוליאוריתן" name="עור פוליאוריתן" />
                                <ItemMenuListOpenItemDivText htmlFor="עור פוליאוריתן"> עור פוליאוריתן</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="טוויד" name="טוויד" />
                                <ItemMenuListOpenItemDivText htmlFor="טוויד"> טוויד</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        </div>
                        
                        :
                        
                        <div>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="מטאלי" name="מטאלי" />
                            <ItemMenuListOpenItemDivText htmlFor="מטאלי"> מטאלי</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="תחרה" name="תחרה" />
                            <ItemMenuListOpenItemDivText htmlFor="תחרה"> תחרה</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="סטן" name="סטן" />
                            <ItemMenuListOpenItemDivText htmlFor="סטן"> סטן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="שיפון" name="שיפון" />
                            <ItemMenuListOpenItemDivText htmlFor="שיפון"> שיפון</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="קורדרוי" name="קורדרוי" />
                            <ItemMenuListOpenItemDivText htmlFor="קורדרוי"> קורדרוי</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="עור פוליאוריתן" name="עור פוליאוריתן" />
                            <ItemMenuListOpenItemDivText htmlFor="עור פוליאוריתן"> עור פוליאוריתן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="טוויד" name="טוויד" />
                                <ItemMenuListOpenItemDivText htmlFor="טוויד"> טוויד</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פייטים" name="פייטים" />
                            <ItemMenuListOpenItemDivText htmlFor="פייטים"> פייטים</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פרווה מלאכוותית" name="פרווה מלאכוותית" />
                            <ItemMenuListOpenItemDivText htmlFor="פרווה מלאכוותית"> פרווה מלאכוותית</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="מוהר" name="מוהר" />
                            <ItemMenuListOpenItemDivText htmlFor="מוהר"> מוהר</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="דנים" name="דנים" />
                            <ItemMenuListOpenItemDivText htmlFor="דנים"> דנים</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="אורגנזה" name="אורגנזה" />
                            <ItemMenuListOpenItemDivText htmlFor="אורגנזה"> אורגנזה</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פשתן" name="פשתן" />
                            <ItemMenuListOpenItemDivText htmlFor="פשתן"> פשתן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="בד דמוי צמר" name="בד דמוי צמר" />
                            <ItemMenuListOpenItemDivText htmlFor="בד דמוי צמר"> בד דמוי צמר </ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="בד ארוג" name="בד ארוג" />
                            <ItemMenuListOpenItemDivText htmlFor="בד ארוג"> בד ארוג</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="זמש" name="זמש" />
                            <ItemMenuListOpenItemDivText htmlFor="זמש"> זמש</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                    </ItemMenuListOpenItemDiv>
                    </div>
                    }
                            
                            {!materialShowMoreClick?
                            <SebShowMoreDiv onClick={() => showMore("material")}>
                                הצג עוד+
                            </SebShowMoreDiv>:""}
                        </ItemMenuListOpen>

                        
                        :

                        <ItemMenuList >
                            <ItemMenuStyleClose>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlinePlus onClick={() => clickTest("4")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("4")}>
                                    חומר     
                                </ItemMenuStyleCloseText>

                            </ItemMenuStyleClose>
                        </ItemMenuList>}
                        <ItemMenuDivSeparate></ItemMenuDivSeparate>
                        
                        {styleClick ? 
                        <ItemMenuListOpen >
                            <ItemMenuStyleOpen>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlineMinus onClick={() => clickTest("4")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("4")}> 
                                סגנון     
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleOpen>
                            {!materialShowMoreClick?
                                <div>
                            <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="מטאלי" name="מטאלי" />
                                <ItemMenuListOpenItemDivText htmlFor="מטאלי"> מטאלי</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="תחרה" name="תחרה" />
                                <ItemMenuListOpenItemDivText htmlFor="תחרה"> תחרה</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="סטן" name="סטן" />
                                <ItemMenuListOpenItemDivText htmlFor="סטן"> סטן</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="שיפון" name="שיפון" />
                                <ItemMenuListOpenItemDivText htmlFor="שיפון"> שיפון</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="קורדרוי" name="קורדרוי" />
                                <ItemMenuListOpenItemDivText htmlFor="קורדרוי"> קורדרוי</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="עור פוליאוריתן" name="עור פוליאוריתן" />
                                <ItemMenuListOpenItemDivText htmlFor="עור פוליאוריתן"> עור פוליאוריתן</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="טוויד" name="טוויד" />
                                <ItemMenuListOpenItemDivText htmlFor="טוויד"> טוויד</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        </div>

                        :

                        <div>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="מטאלי" name="מטאלי" />
                            <ItemMenuListOpenItemDivText htmlFor="מטאלי"> מטאלי</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="תחרה" name="תחרה" />
                            <ItemMenuListOpenItemDivText htmlFor="תחרה"> תחרה</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="סטן" name="סטן" />
                            <ItemMenuListOpenItemDivText htmlFor="סטן"> סטן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="שיפון" name="שיפון" />
                            <ItemMenuListOpenItemDivText htmlFor="שיפון"> שיפון</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="קורדרוי" name="קורדרוי" />
                            <ItemMenuListOpenItemDivText htmlFor="קורדרוי"> קורדרוי</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="עור פוליאוריתן" name="עור פוליאוריתן" />
                            <ItemMenuListOpenItemDivText htmlFor="עור פוליאוריתן"> עור פוליאוריתן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="טוויד" name="טוויד" />
                                <ItemMenuListOpenItemDivText htmlFor="טוויד"> טוויד</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פייטים" name="פייטים" />
                            <ItemMenuListOpenItemDivText htmlFor="פייטים"> פייטים</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פרווה מלאכוותית" name="פרווה מלאכוותית" />
                            <ItemMenuListOpenItemDivText htmlFor="פרווה מלאכוותית"> פרווה מלאכוותית</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="מוהר" name="מוהר" />
                            <ItemMenuListOpenItemDivText htmlFor="מוהר"> מוהר</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="דנים" name="דנים" />
                            <ItemMenuListOpenItemDivText htmlFor="דנים"> דנים</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="אורגנזה" name="אורגנזה" />
                            <ItemMenuListOpenItemDivText htmlFor="אורגנזה"> אורגנזה</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פשתן" name="פשתן" />
                            <ItemMenuListOpenItemDivText htmlFor="פשתן"> פשתן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="בד דמוי צמר" name="בד דמוי צמר" />
                            <ItemMenuListOpenItemDivText htmlFor="בד דמוי צמר"> בד דמוי צמר </ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="בד ארוג" name="בד ארוג" />
                            <ItemMenuListOpenItemDivText htmlFor="בד ארוג"> בד ארוג</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="זמש" name="זמש" />
                            <ItemMenuListOpenItemDivText htmlFor="זמש"> זמש</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        </div>
                        }
                            
                            {!materialShowMoreClick?
                            <SebShowMoreDiv onClick={() => showMore("style")}>
                                הצג עוד+
                            </SebShowMoreDiv>:""}
                        </ItemMenuListOpen>


                        :

                        <ItemMenuList >
                            <ItemMenuStyleClose>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlinePlus onClick={() => clickTest("5")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("5")}>
                                    סגנון     
                                </ItemMenuStyleCloseText>

                            </ItemMenuStyleClose>
                        </ItemMenuList>}

                        <ItemMenuDivSeparate></ItemMenuDivSeparate>

                        {typeCheck ? 
                        <ItemMenuListOpen >
                            <ItemMenuStyleOpen>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlineMinus onClick={() => clickTest("6")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("6")}> 
                                    סוג      
                                </ItemMenuStyleCloseText>
                            </ItemMenuStyleOpen>
                            {!materialShowMoreClick?
                                <div>
                            <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="מטאלי" name="מטאלי" />
                                <ItemMenuListOpenItemDivText htmlFor="מטאלי"> מטאלי</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="תחרה" name="תחרה" />
                                <ItemMenuListOpenItemDivText htmlFor="תחרה"> תחרה</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="סטן" name="סטן" />
                                <ItemMenuListOpenItemDivText htmlFor="סטן"> סטן</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="שיפון" name="שיפון" />
                                <ItemMenuListOpenItemDivText htmlFor="שיפון"> שיפון</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="קורדרוי" name="קורדרוי" />
                                <ItemMenuListOpenItemDivText htmlFor="קורדרוי"> קורדרוי</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="עור פוליאוריתן" name="עור פוליאוריתן" />
                                <ItemMenuListOpenItemDivText htmlFor="עור פוליאוריתן"> עור פוליאוריתן</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="טוויד" name="טוויד" />
                                <ItemMenuListOpenItemDivText htmlFor="טוויד"> טוויד</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        </div>

                        :

                        <div>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="מטאלי" name="מטאלי" />
                            <ItemMenuListOpenItemDivText htmlFor="מטאלי"> מטאלי</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="תחרה" name="תחרה" />
                            <ItemMenuListOpenItemDivText htmlFor="תחרה"> תחרה</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="סטן" name="סטן" />
                            <ItemMenuListOpenItemDivText htmlFor="סטן"> סטן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="שיפון" name="שיפון" />
                            <ItemMenuListOpenItemDivText htmlFor="שיפון"> שיפון</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="קורדרוי" name="קורדרוי" />
                            <ItemMenuListOpenItemDivText htmlFor="קורדרוי"> קורדרוי</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="עור פוליאוריתן" name="עור פוליאוריתן" />
                            <ItemMenuListOpenItemDivText htmlFor="עור פוליאוריתן"> עור פוליאוריתן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                            <ItemMenuListOpenItemDivInput>
                                <input type="checkbox" id="טוויד" name="טוויד" />
                                <ItemMenuListOpenItemDivText htmlFor="טוויד"> טוויד</ItemMenuListOpenItemDivText>
                            </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פייטים" name="פייטים" />
                            <ItemMenuListOpenItemDivText htmlFor="פייטים"> פייטים</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פרווה מלאכוותית" name="פרווה מלאכוותית" />
                            <ItemMenuListOpenItemDivText htmlFor="פרווה מלאכוותית"> פרווה מלאכוותית</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="מוהר" name="מוהר" />
                            <ItemMenuListOpenItemDivText htmlFor="מוהר"> מוהר</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="דנים" name="דנים" />
                            <ItemMenuListOpenItemDivText htmlFor="דנים"> דנים</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="אורגנזה" name="אורגנזה" />
                            <ItemMenuListOpenItemDivText htmlFor="אורגנזה"> אורגנזה</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="פשתן" name="פשתן" />
                            <ItemMenuListOpenItemDivText htmlFor="פשתן"> פשתן</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="בד דמוי צמר" name="בד דמוי צמר" />
                            <ItemMenuListOpenItemDivText htmlFor="בד דמוי צמר"> בד דמוי צמר </ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="בד ארוג" name="בד ארוג" />
                            <ItemMenuListOpenItemDivText htmlFor="בד ארוג"> בד ארוג</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDiv>
                        <ItemMenuListOpenItemDivInput>
                            <input type="checkbox" id="זמש" name="זמש" />
                            <ItemMenuListOpenItemDivText htmlFor="זמש"> זמש</ItemMenuListOpenItemDivText>
                        </ItemMenuListOpenItemDivInput>
                        </ItemMenuListOpenItemDiv>
                        </div>
                        }
                            
                            {!materialShowMoreClick?
                            <SebShowMoreDiv onClick={() => showMore("material")}>
                                הצג עוד+
                            </SebShowMoreDiv>:""}
                        </ItemMenuListOpen>


                        :

                        <ItemMenuList >
                            <ItemMenuStyleClose>
                                <ItemMenuStyleCloseIconDiv>
                                    <AiOutlinePlus onClick={() => clickTest("6")}/>
                                </ItemMenuStyleCloseIconDiv>
                                <ItemMenuStyleCloseText onClick={() => clickTest("6")}>
                                    סוג     
                                </ItemMenuStyleCloseText>

                            </ItemMenuStyleClose>
                        </ItemMenuList>}

                        <ItemMenuDivSeparate></ItemMenuDivSeparate>
                        <ItemMenuDivSeparate></ItemMenuDivSeparate>

                        {/* price Range Here */}
                        <PriceRange />
                        {/* price Range Here */}

                        <ItemMenuDivSeparate></ItemMenuDivSeparate>
                        <ItemMenuDivSeparate></ItemMenuDivSeparate>
                    </ItemsMenuFilter>
                </ItemsWrapper>
                
            </ItemsContainer>

            <ItemMenuDivSeparate></ItemMenuDivSeparate>

        </div>
    )
}

export default ItemGrid