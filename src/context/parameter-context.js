import React from "react";


export const ParameterGraphContext = React.createContext();

export const initialState = {
        store: 'temperature',
        startDate: '1881-01-08',
        endDate: '2006-12-31'
};

export const paramReducer = (state, action) => {
    switch (action.type) {
        case "temperature":
            return {
                ...action.payload
            };
        case "precipitation":
            return {
                ...action.payload
            };
        case "temperature,precipitation":
            return {
                ...action.payload
            };
        case "dateInterval":
            return {
                ...state,
                ...action.payload  
            };
        default:
            return state;
    }
}