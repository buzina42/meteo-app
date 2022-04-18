import React, { useEffect, useReducer } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import Tab from "./component/Tab.js"
import useDbData from './data/useDbData.js';
import OpenMyDB from './data/OpenMyDB.js';
import { StoreNameContext, initialState, storeReducer } from './context/storeName-context.js';

const App = () => {
  
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const info = useDbData(state);

  // useEffect(() =>{
  //   OpenMyDB(info)
  // })
  return (
    <StoreNameContext.Provider value={{dispatch, state}}>
      <Tab/>
    </StoreNameContext.Provider>
  )
}

export default App;
