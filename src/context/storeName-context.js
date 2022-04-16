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
        case "percepication":
            return {
                
                ...action.payload
            }
        case "temperature,percepication":
                return {
                    
                    ...action.payload
                };
        default:
            return state
    }
};