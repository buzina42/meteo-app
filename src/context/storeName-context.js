import React from "react";


export const StoreNameContext = React.createContext();

export const initialState = {
        store: 'temperature'
};

export const storeReducer = (state, action) => {
    switch(action.type) {
        case "temperature":
            return {
                ...action.payload
            }
        case "precipitation":
            return {
                ...action.payload
            }
        case "temperature,precipitation":
            return {
                ...action.payload
                };
        default:
            return state
    }
};