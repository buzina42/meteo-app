import React, { useEffect, useReducer, useState } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import Tab from "./component/Tab.js"
import useDbData from './data/useDbData.js';
import { ParameterGraphContext, initialState, paramReducer } from './context/parameter-context.js';
import openMyDB from './data/openMyDB.js';
import { getCountStore, getDataIntervalForDB } from './data/getForDB.js';

const App = () => {

  const [state, dispatch] =  useReducer(paramReducer, initialState);
  const periodArr = (props) => {dispatch({
    type: "periodArr",
    payload: {
      periodData: props
    }
  })} 
  
  const info = useDbData(state.store); 

  useEffect(() => { 
    openMyDB();  
    getCountStore(state.store, info);
  },[state.store, info])

  const [interval, setInterval] = useState([]);
  console.log(state.periodData);
  useEffect(()=>{
    getDataIntervalForDB(state.store, state.startDate, state.endDate)
      .then(resp => setInterval(resp));
  },[state.startDate, state.endDate,state.store])
  useEffect(()=>{
    periodArr(interval);
  },[interval])

  return (
    <ParameterGraphContext.Provider value={{dispatch, state}}>
      <Tab />
    </ParameterGraphContext.Provider>
  )
  
}

export default App;