import React, { useEffect, useReducer } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import Tab from "./component/Tab.js"
import useDbData from './data/useDbData.js';
import { StoreNameContext, initialState, storeReducer } from './context/storeName-context.js';
import openMyDB from './data/openMyDB.js';
import { fakeData } from './data/fakeData.js';


const App = () => {
  
  const [state, dispatch] =  useReducer(storeReducer, initialState);
 console.log(state)
  const info = useDbData(state.store);

  function parameterDB(state, info){
    let one = state.store;
    let two = info;
    return ({one, two});
  }  

  useEffect(() =>{
    openMyDB(parameterDB(state, info))
  },[state, info])

  return (
    <StoreNameContext.Provider value={{dispatch,state}}>
      <Tab />
    </StoreNameContext.Provider>
  )
  
}

export default App;
