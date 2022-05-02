import React, { useEffect, useReducer } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import Tab from "./component/Tab.js"
import useDbData from './data/useDbData.js';
import { StoreNameContext, initialState, storeReducer } from './context/storeName-context.js';
import openMyDB from './data/openMyDB.js';
//import { fakeData } from './data/fakeData.js';
import { getCountStore, useGetDataIntervalForDB } from './data/getForDB.js';


const App = () => {
 
  const [state, dispatch] =  useReducer(storeReducer, initialState);

  const argumentDB = (state, info, info2=1) => {
    //console.log(state, info, info2)
    let store = state.store;
    let data = info;
    let data2 = info2
    return {store, data, data2};
  }  

  const info = useDbData(state.store); 
  const interval = useGetDataIntervalForDB(argumentDB(state, "1881-01-08","2006-01-15"))

  useEffect(() => {
  
    openMyDB();  
    getCountStore(argumentDB(state, info));
    
  },[state, info])

  return (
    <StoreNameContext.Provider value={{dispatch, state}}>
      <Tab />
    </StoreNameContext.Provider>
  )
  
}

export default App;