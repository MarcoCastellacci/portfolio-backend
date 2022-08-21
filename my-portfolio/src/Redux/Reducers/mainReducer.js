import { combineReducers } from "redux";
import tecnoReducer from "../Reducers/tecnoReducers";

const mainReducer = combineReducers({tecnoReducer});

export default mainReducer;