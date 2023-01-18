// import { useNavigate } from "react-router";
// import SockJS from "sockjs-client";
// import Stomp from 'stompjs';


class WebSocketModel{
}


// class WebSocketModel{
//     public socket = new SockJS('http://localhost:8080/application-endpoint');
//     public stompClient = Stomp.over(this.socket);

//     public constructor(){

//     }


//     public createNewSession(){
//         // var socket = new SockJS('http://localhost:8080/application-endpoint');
//         // var stompClient = Stomp.over(socket);
//         this.stompClient.connect({}, (frame) =>{
//             console.log(frame);
//         })
//     }

//     public disconnectSession(){
//         this.stompClient.disconnect(()=>{});
//     }
// }






export default WebSocketModel;