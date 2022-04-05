import React, { useContext, useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import Tab from "./component/Tab.js"
import useDbData from './data/useDbData.js';
import openMyDB from './data/openMyDB.js';
import { storeName, StoreNameContext } from './context/storeName-context.js';

const App = () => {
  const [name, setName] = useState(null);

  const info = useDbData();

  useContext(StoreNameContext)

  useEffect(() =>{
    openMyDB(info,name)
  })
  return (
    <StoreNameContext.Provider value={{name, setName}}>
      <Tab/>
    </StoreNameContext.Provider>
  )
}

export default App;
