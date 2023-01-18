import UserModel from '../Models/UserModel'

export class UserAppState{
    public user: UserModel = null;
    public constructor(){
        const storedUser = JSON?.parse(localStorage?.getItem('user'));
        if(storedUser) {
            this.user = storedUser;
        }
    }
}

export enum UserActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}


export interface UserAction {
    type: UserActionType;
    payload?: any; 
}


export function registerAction(user: UserModel): UserAction {
    return { type: UserActionType.Register,payload:user };
}

export function loginAction(user: UserModel): UserAction {
    return { type: UserActionType.Login ,payload:user};
}

export function logoutAction(): UserAction {
    return { type: UserActionType.Logout};
}


export function userReducer(currentState: UserAppState = new UserAppState(),
                            action:UserAction): UserAppState{
    

    const newState = {...currentState} 
    switch(action.type){
        case UserActionType.Register: 
            newState.user = action.payload;
            localStorage.setItem("user",JSON.stringify(newState.user)); 
            break;
        case UserActionType.Login:
            newState.user = action.payload;
            localStorage.setItem("user",JSON.stringify(newState.user)); 
            break;
        case UserActionType.Logout:
            newState.user = null;
            localStorage.removeItem("user");
            break;
            
    }
    return newState;
    
}

export default userReducer;