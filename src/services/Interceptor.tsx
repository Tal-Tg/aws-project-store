import axios from 'axios';
import store from '../Redux/store';



const tokenAxios = axios.create();

tokenAxios.interceptors.request.use((request:any) => {

    request.headers = {
        "authorization": store.getState().userReducer.user?.token
    };

    return request;
});

export default tokenAxios;