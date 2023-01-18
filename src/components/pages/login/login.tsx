import React, { useEffect, useRef, useState } from "react";
import {
    HeaderLogin, HeaderLoginIcon,
    LoginImage, LoginFooter, LoginDetailsContainer, LoginHeaderContainer, LoginHeaderH1,
    LoginContainerUserInput, LoginContainerPasswordInput,LoginContainerButton,SpanErrorUserName,SpanErrorPassword,LoginForgotPassword,LoginForgotPasswordLink
    ,LoginContainer,LoginWrapper,LoginLogoText,LoginLogoSubText,LoginDetailsDiv,LoginInputUserName,LoginInputPassword
    ,LoginSubmitButton,LoginCreateNewAccountButton,SpanErrorUserNameFix,SpanErrorPasswordFix,SpanLoading
    ,WrapperLoading} from './LoginElements'
import logo from '../header/logo.jpeg'
import loginPhoto from './loginPhoto.jpeg'
import { useForm } from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Interceptor from "../../../services/Interceptor";
import store from "../../../Redux/store"
import { loginAction } from "../../../Redux/UserRedux";
import notify from "../../../services/Notification";
import { Alert } from '@mui/material';
import { render } from "@testing-library/react";
// import SockJS from "sockjs-client";
// import Stomp from 'stompjs';
import { connectAction } from "../../../Redux/appSocketReducer";



function Login() {

    const navigate = useNavigate ();
    const [loading, setLoading] = useState(false);
    


    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserModel>({
        mode: "onTouched"
    });


    // async function Login(details: UserModel){
        
    //     try{ 
    //         const response = await Interceptor.post(globals.urls.login,details );
    //         store.dispatch(loginAction(response.data));
    //         notify.success("login successfully")
    //         console.log(response.data);
    //         navigate("/")
    //     }catch(err){
    //         notify.error("user name or password are incorrect")
    //     }
            // try{ 
        //     const response = await Interceptor.post("http://localhost:8080/user/login",details);
        //     // store.dispatch(loginAction(response.data));
        //     console.log(response.data);
        //     navigate("/")
        // }catch(err){
        //     notify.error("user name or password are incorrect")
        // }
    // }



    async function Login(details: UserModel){
        setLoading(true)
        try {
            const response = await Interceptor.post("http://localhost:8080/user/login",details);
            store.dispatch(loginAction(response.data));
            console.log(response.data);
            // store.getState().socketReducer.stompClient = Stomp.over(new SockJS('http://localhost:8080/application-endpoint'));
            // store.getState().socketReducer.stompClient.connect({},function(frame){
            //         console.log(frame);
            //         console.log("connect successfully");
            // })
            setTimeout(()=>{
                navigate("/")
                setLoading(false)
            },700)
            
        } catch (error) {
            console.log("user name or password are incorrect ");
        }
        //         try {
                    
        //     store.getState().socketReducer?.stompClient.disconnect(function() {
        //         console.log("STOMP client succesfully disconnected.");
        //     });
        // } catch (error) {
            
        // }
    }

    const createNewAccountNavigate = () =>{
        navigate("/sign_up")
    }

    return (
        <div>
            <LoginContainer>
                <LoginWrapper>
                    <form onSubmit={handleSubmit(Login)}>

                        <LoginLogoText>Talbook</LoginLogoText>
                        <LoginLogoSubText>Connect with friends and the world  <br /> arround you on talbook </LoginLogoSubText>
                        <LoginDetailsDiv>
                            <LoginInputUserName type="text" placeholder="User name" 
                            {...register("userName", { required: { value: true, message: "missing user name" }, minLength: { value: 4, message: " user name is to short" }, maxLength: { value: 14, message: "user name is to long" } })}/>
                            <SpanErrorUserNameFix>{errors.userName?.message}</SpanErrorUserNameFix>
                            <LoginInputPassword type="text" placeholder="Password"
                            {...register("password", { required: { value: true, message: "missing password" }, minLength: { value: 4, message: " password is to short" }, maxLength: { value: 10, message: "password is to long" } })}/>
                            <SpanErrorPasswordFix>{errors.password?.message}</SpanErrorPasswordFix>
                            <LoginSubmitButton type="submit">Log In</LoginSubmitButton>
                            <LoginForgotPasswordLink><NavLink style={{ textDecoration: 'none' }} to="/password_reset">Forgot Password?</NavLink></LoginForgotPasswordLink>
                            <LoginCreateNewAccountButton onClick={() => createNewAccountNavigate()}>Create a New Account</LoginCreateNewAccountButton>
                            {loading?
                            <div>
                                <WrapperLoading>
                                </WrapperLoading>
                                <SpanLoading>
                                </SpanLoading>
                            </div>

                            :""}
                        </LoginDetailsDiv>
                        
                    </form>
                </LoginWrapper>

            </LoginContainer>
            {/* <HeaderLogin>
            </HeaderLogin>
            <form onSubmit={handleSubmit(Login)}>
            <LoginDetailsContainer>
                <LoginHeaderContainer>
                    <LoginHeaderH1>Login</LoginHeaderH1>
                    <LoginContainerUserInput type="text" placeholder="User name" require outlined="true" 
                    {...register("userName", { required: { value: true, message: "missing user name" }, minLength: { value: 4, message: " user name is to short" }, maxLength: { value: 14, message: "user name is to long" } })}/>
                    <LoginContainerPasswordInput type="password" placeholder="Password" require 
                    {...register("password", { required: { value: true, message: "missing password" }, minLength: { value: 4, message: " password is to short" }, maxLength: { value: 10, message: "password is to long" } })}/>
                    <SpanErrorUserName>{errors.userName?.message}</SpanErrorUserName>
                    <SpanErrorPassword>{errors.password?.message}</SpanErrorPassword>
                    <LoginContainerButton type="submit">Login</LoginContainerButton>
                    <LoginForgotPassword>forgot your password ? <LoginForgotPasswordLink to="forgot-password" > click here</LoginForgotPasswordLink></LoginForgotPassword>
                </LoginHeaderContainer>
            </LoginDetailsContainer>
            </form>
            <LoginFooter>
            </LoginFooter> */}
        </div>
    )
}


export default Login;



                {/* <HeaderLoginIcon src={logo} /> */}
                {/* <LoginImage src={loginPhoto} /> */}