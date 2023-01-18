import { combineReducers, createStore } from "redux";
// import { postReducer } from "./PostRedux";
import userReducer from '../Redux/UserRedux'
import socketReducer from "./appSocketReducer";

// postReducer: postReducer

const reducers = combineReducers({userReducer: userReducer, socketReducer: socketReducer});
const store = createStore(reducers)
    
export default store;