import UserModel from '../Models/UserModel'
import { UserAppState } from './UserRedux';
// import Stomp from 'stompjs';
// import SockJS from 'sockjs-client'
import store from './store';


export class SocketAppState {
    // socket = new SockJS('http://localhost:8080/application-endpoint');
    // appSocket ?: Stomp.Client = Stomp.over(this.socket);
    // stompClient = Stomp.over(new SockJS('http://localhost:8080/application-endpoint'));
    
    // = Stomp.over(new SockJS('http://localhost:8080/application-endpoint'));
    // public constructor(){
    //     const storedUser = JSON.parse(localStorage.getItem('user'));
    //     if(storedUser) {
    //         this.user = storedUser;
    //     }
    // }
}

export enum SocketActionType {
    connect = "Connect",
    disconnect = "Disconnect"
}


export interface SocketAction {
    type: SocketActionType;
    payload?: any; 
}


export function connectAction(): SocketAction {
    // var socket = new SockJS('http://localhost:8080/stomp-endpoint');
    // var appSocket = Stomp.over(socket);
    // appSocket.connect({}, function(frame){
    //     console.log(frame);
    // });
    // console.log("connect");
    return { type: SocketActionType.connect};
}

export function disconnectAction(): SocketAction {
    return { type: SocketActionType.disconnect};
}



export function socketReducer(currentState: SocketAppState = new SocketAppState(),action:SocketAction): SocketAppState{
    const newState = {...currentState} 
    switch(action.type){
        case SocketActionType.connect: 
            // newState.appSocket = action.payload;
            break;
        case SocketActionType.disconnect:
            // newState.appSocket=action.payload;
            break;
    }
    return newState;
}

export default socketReducer;