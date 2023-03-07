import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/login/login";
import Logout from "../pages/logout/logout";
import MainPage from "../pages/main-page/index";
import HomePage from "../pages/home-page/homePage";
import ResetPassword from "../pages/reset-password";
import SignUp from "../pages/sign-up";
import ItemGrid from "../pages/Items-page";
import AccountMenu from "../pages/parts-page/menu-down";
import SpecificItem from "../pages/Specific-Item-Page";
import PhoneMenu from "../pages/phone-menu";
import ShopPage from "../pages/shop-page";


function Routing(){
    return(
        <div className="Routing">
            <Routes> 
                    <Route path="/" element={ <HomePage /> }></Route>
                    <Route  path="/login" element={ <Login /> } ></Route>
                    <Route  path="/Logout" element={ <Logout /> } ></Route>
                    <Route  path="/password_reset" element={ <ResetPassword /> } ></Route>
                    <Route  path="/sign_up" element={ <SignUp /> } ></Route>
                    <Route  path="/Item-page/Shop" element={ <ShopPage /> } ></Route>
                    <Route  path="/Item-page/:title" element={ <ItemGrid /> } ></Route>
                    {/* <Route  path="/d" element={ <PhoneMenu /> } ></Route> */}
                    {/* <Route  path="/Item-page/:title/staus%uservarification-Ytdjpawiew-dasfdsfds-gfdgdf@@!!2eoplkhgn/:id" element={ <SpecificItem /> } ></Route> */}
                    <Route  path="/Item-page/:title/:id" element={ <SpecificItem /> } ></Route>
                    {/* <Route  path="/" element={ <PhoneMenu /> } ></Route> */}
                    {/* <Route  path="/laskjdflkshfjksdnf" element={ <AccountMenu /> } ></Route> */}
                    {/* <Route  path="/phonemeny" element={ <PhoneMenu /> } ></Route> */}
                    {/* <Route  path="/phonemeny" element={ <PhoneMenu /> } ></Route> */}
                    {/*<Route  path="/otherUser/:otherUserId" element={ <OtherUserPager /> } ></Route>
                    <Route  path="/Logout" element={ <Logout /> } ></Route> */}
            </Routes>
        </div>
    )
}
export default Routing;