import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import SignUpModel from "../../../Models/signUpReqModel";
import tokenAxios from "../../../services/Interceptor";
import {SignContainer,SignHeader,SignWrapper,SignLogoText,SignLogoSubText,SignDetailsDiv,SignInputUserName
    ,SignInputPassword,SignSubmitButton,SignForgotPasswordLink,SignCreateNewAccountButton,SpanErrorFirstNameFix,
    SignInputFirstName,SignInputLastName,SignInputDate,SignInputEmail,SpanErrorEmailFix,
    SpanErrorUserNameFix,SpanErrorPasswordFix} from './signElements'
    import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import notify from "../../../services/Notification";

function SignUp(){

    const navigate = useNavigate();
    const [dateValue, setDateValue] = useState(new Date())

    const { register, handleSubmit, formState: { errors }, reset } = useForm<SignUpModel>({
        mode: "onTouched"
    });

    
    const signIn = () =>{
        navigate("/login")
    }

    async function signUp(signUpModel : any){
        const booleanTest = validate(signUpModel.email);
        if(booleanTest){
            console.log(signUpModel);
            signUpModel.birthOfDate = dateValue
            try {
                const response = await tokenAxios.post("http://localhost:8080/user/sign-up",signUpModel)
                console.log(response.data);
                signIn();
            } catch (error) {
            }
        }else{
            console.log("no");
        }
    }


    const handleDateChange = (newValue:any) => {
        setDateValue(newValue);
    };


    const validate = (email:string) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }






    return(
        <div>
            <SignContainer>
                <SignWrapper>
                    <form onSubmit={handleSubmit(signUp)}>
                        <SignLogoText>Talbook</SignLogoText>
                        <SignLogoSubText>Connect with friends and the world  <br /> arround you on talbook </SignLogoSubText>
                        <SignDetailsDiv>
                            <SignHeader>Sign up</SignHeader>
                            <SignInputFirstName type="text" placeholder="First name" 
                            {...register("firstName", { required: { value: true, message: "missing first name" }, minLength: { value: 2, message: "first name is to short" }, maxLength: { value: 30, message: "first name is to long" } })}/>
                            <SpanErrorFirstNameFix>{errors.firstName?.message}</SpanErrorFirstNameFix>
                            <SignInputLastName type="text" placeholder="last name" 
                            {...register("lastName", { required: { value: true, message: "missing last name" }, minLength: { value: 2, message: "last name is to short" }, maxLength: { value: 30, message: "last name is to long" } })}/>
                            <SpanErrorFirstNameFix>{errors.lastName?.message}</SpanErrorFirstNameFix>
                            <SignInputEmail type="email" placeholder="Email" 
                            {...register("email", { required: { value: true, message: "missing email" }, minLength: { value: 4, message: "email is to short" }, maxLength: { value: 30, message: "email is to long" } })}/>
                            <SpanErrorEmailFix>{errors.email?.message}</SpanErrorEmailFix>
                            <SignInputDate>
                                <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DesktopDatePicker 
                                            
                                            label="Birth of date"
                                            inputFormat="MM/dd/yyyy"
                                            value={dateValue}
                                            onChange={handleDateChange}
                                            renderInput={(params) => <TextField {...params} 
                                            {...register("birthOfDate", { required: { value: true, message: "missing birth of date" }, minLength: { value: 4, message: "birth of date is to short" }, maxLength: { value: 30, message: "birth of date is to long" } })}/>}/> 
                                </LocalizationProvider>
                            </SignInputDate>
                            {/* {...register("firstName", { required: { value: true, message: "missing first name" }, minLength: { value: 4, message: "first name is to short" }, maxLength: { value: 30, message: "first name is to long" } })}/> */}
                            {/* <SpanErrorFirstNameFix>{errors.birthOfDate?.message}</SpanErrorFirstNameFix> */}
                            <SignInputUserName type="text" placeholder="User name" 
                            {...register("userName", { required: { value: true, message: "missing user name" }, minLength: { value: 4, message: "user name is to short" }, maxLength: { value: 30, message: "user name is to long" } })}/>
                            <SpanErrorUserNameFix>{errors.userName?.message}</SpanErrorUserNameFix>
                            <SignInputPassword type="password" placeholder="password" 
                            {...register("password", { required: { value: true, message: "missing password" }, minLength: { value: 4, message: "password is to short" }, maxLength: { value: 30, message: "password is to long" } })}/>
                            <SpanErrorPasswordFix>{errors.password?.message}</SpanErrorPasswordFix>
                            {/* <ResetInputPassword type="text" placeholder="Password" */}
                            {/* {...register("password", { required: { value: true, message: "missing password" }, minLength: { value: 4, message: " password is to short" }, maxLength: { value: 10, message: "password is to long" } })}/> */}
                            {/* <SpanErrorPasswordFix>{errors.password?.message}</SpanErrorPasswordFix> */}
                            <SignSubmitButton type="submit">Sign Up</SignSubmitButton>
                            {/* <ResetForgotPasswordLink><NavLink style={{ textDecoration: 'none' }} to="/password_reset">Forgot Password?</NavLink></ResetForgotPasswordLink> */}
                            <SignCreateNewAccountButton onClick={() => signIn()}>Sign In</SignCreateNewAccountButton>
                        </SignDetailsDiv>
                    </form>
                </SignWrapper>
            </SignContainer>
        </div>   
    )
}

export default SignUp;


