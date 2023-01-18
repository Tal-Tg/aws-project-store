import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../../../Redux/store';
import { logoutAction } from '../../../Redux/UserRedux';
// import store from '../../redux/store';
// import { logoutAction } from '../../redux/UserRedux';
// import globals from '../../services/Global';
import tokenAxios from '../../../services/Interceptor';
import notify from '../../../services/Notification';

function Logout() {

    const navigate = useNavigate();

    // async function sendLogout(){
    //     try {
    //         const response = await tokenAxios.post(globals.urls.logout, store.getState().userReducer.user);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    useEffect(() =>{
        store.dispatch(logoutAction());
        store.getState().userReducer.user = null;
        // store.getState().socketReducer.stompClient = null
        // store.getState().socketReducer.stompClient?.disconnect(function(){ 
        //     console.log("disconnect successfully");
        // })
        return navigate("/login")
    })

    // useEffect(() =>{
    //     return store.getState().userReducer.user = null;
    // })

    // useEffect(() =>{
    //     return store.getState().appSocketReducer.appSocket?.stompClient.disconnect()
    // })

    return (
        <></>
    );

}

export default Logout;