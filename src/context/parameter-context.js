import React from "react";


export const ParameterGraphContext = React.createContext();

export const initialState = {
        store: 'temperature',
        paragraph: "Температура",
        startDate: '1881-01-01',
        endDate: '1881-01-31',
        periodData: []
};

export const paramReducer = (state, action) => {
    switch (action.type) {
        case "temperature":
            return {
                ...state,
                ...action.payload
            };
        case "precipitation":
            return {
                ...state,
                ...action.payload
            };
        case "temperature,precipitation":
            return {
                ...state,
                ...action.payload
            };
        case "dateInterval":
            return {
                ...state,
                ...action.payload  
            };
        case "periodArr":
            return {
                ...state,
                ...action.payload  
            };
        default:
            return state;
    }
}