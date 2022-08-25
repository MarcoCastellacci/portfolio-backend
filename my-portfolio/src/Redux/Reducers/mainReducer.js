import { combineReducers } from "redux";
import tecnoReducer from "../Reducers/tecnoReducers";
import pagesReducer from "../Reducers/pagesReducer";

const mainReducer = combineReducers({tecnoReducer, pagesReducer});

export default mainReducer;