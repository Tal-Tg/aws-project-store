import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import ResetPasswordReq from '../../../Models/resetPasswordReqModel';
import tokenAxios from '../../../services/Interceptor';
import {ResetContainer,ResetWrapper,ResetLogoText,ResetLogoSubText,ResetDetailsDiv,ResetInputUserName,ResetInputPassword,ResetSubmitButton
    ,ResetForgotPasswordLink,ResetCreateNewAccountButton,SpanErrorUserNameFix,SpanErrorPasswordFix,ResetHeader,
    SpanErrorEmailFix} from './resetElements'
    

function ResetPassword(){

    var navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ResetPasswordReq>({
        mode: "onTouched"
    });

    async function resetPassword(){
        try {
            const response  = await tokenAxios.post("")
            console.log(response.data);
        } catch (error) {
            
        }
    } 

    const signIn = () =>{
        navigate("/login")
    }


    return(
        <div>
            <ResetContainer>
                <ResetWrapper>
                    <form onSubmit={handleSubmit(resetPassword)}>
                        <ResetLogoText>Talbook</ResetLogoText>
                        <ResetLogoSubText>Connect with friends and the world  <br /> arround you on talbook </ResetLogoSubText>
                        <ResetDetailsDiv>
                            <ResetHeader>Reset password</ResetHeader>
                            <ResetInputUserName type="text" placeholder="Email" 
                            {...register("email", { required: { value: true, message: "missing email" }, minLength: { value: 4, message: "email is to short" }, maxLength: { value: 30, message: "email is to long" } })}/>
                            <SpanErrorEmailFix>{errors.email?.message}</SpanErrorEmailFix>
                            {/* <ResetInputPassword type="text" placeholder="Password" */}
                            {/* {...register("password", { required: { value: true, message: "missing password" }, minLength: { value: 4, message: " password is to short" }, maxLength: { value: 10, message: "password is to long" } })}/> */}
                            {/* <SpanErrorPasswordFix>{errors.password?.message}</SpanErrorPasswordFix> */}
                            <ResetSubmitButton type="submit">Reset</ResetSubmitButton>
                            {/* <ResetForgotPasswordLink><NavLink style={{ textDecoration: 'none' }} to="/password_reset">Forgot Password?</NavLink></ResetForgotPasswordLink> */}
                            <ResetCreateNewAccountButton onClick={() => signIn()}>Sign In</ResetCreateNewAccountButton>
                        </ResetDetailsDiv>
                    </form>
                </ResetWrapper>
            </ResetContainer>
        </div>
    )
}

export default ResetPassword;