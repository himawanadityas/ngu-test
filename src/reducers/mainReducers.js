import ThemeOptions from './ThemeOptions';
import axios from "axios";

import {GET_DATA_LIST, GET_IMAGE, POST_DATA} from "./action/index";

const globalState = {
    cardData: [],
    imageData: false
}

const mainReducers = (state = globalState, action) => {
    switch (action.type) {
        case GET_DATA_LIST:
            return {
                ...state,
                cardData: action.payload.data
            };
        case GET_IMAGE:
            return {
                ...state,
                imageData: action.payload.data
            };
        case POST_DATA:
            return {
                ...state,
            }
    }
}


export default mainReducers;