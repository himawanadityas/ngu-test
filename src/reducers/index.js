import {combineReducers} from "redux";
import MainReducers from "./mainReducers";
import ThemeOptions from "../Layout/ThemeOptions";

export const rootReducers = combineReducers({
    MainReducers,
    ThemeOptions
})