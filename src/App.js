import React, { useEffect, useReducer } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import Tab from "./component/Tab.js"
import useDbData from './data/useDbData.js';
import { ParameterGraphContext, initialState, paramReducer } from './context/parameter-context.js';
import openMyDB from './data/openMyDB.js';
//import { fakeData } from './data/fakeData.js';
import { getCountStore, useGetDataIntervalForDB } from './data/getForDB.js';

const App = () => {

  const [state, dispatch] =  useReducer(paramReducer, initialState);
  console.log(state);

  const argumentDB = (name, info, info2=1) => {
    let store = name;
    let data = info;
    let data2 = info2
    return {store, data, data2};
  }  

  const info = useDbData(state.store); 
  const interval = useGetDataIntervalForDB(argumentDB(state.store, state.startDate, state.endDate));

  useEffect(() => {
  
    openMyDB();  
    getCountStore(argumentDB(state.store, info));
    
  },[state.store, info])

  return (
    <ParameterGraphContext.Provider value={{dispatch, state}}>
      <Tab />
    </ParameterGraphContext.Provider>
  )
  
}

export default App;