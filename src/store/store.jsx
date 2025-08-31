import {applyMiddleware, createStore} from "redux";
import { cityReducer } from "../reducer/reducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'

// crete redux store
export const cityStore=createStore(cityReducer, composeWithDevTools(applyMiddleware(thunk)))
export const STORAGE_KEY="myCity";

export const getLocalStorage=(key)=>{
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) :null;
    } catch (error) {
        console.error("Error getting localStorage", error);
        return null;
    }
}

export const setLocalStorage=(key, value)=>{
    try {
        const data= JSON.stringify(value);
        localStorage.setItem(key, data);
    } catch (error) {
        console.error("Error setting localStorage", error);
    }
}
