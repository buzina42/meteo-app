import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'antd/dist/antd.min.css';
import './index.css';
import Tab from "./component/Tab.js"
import useDbData from './data/data.js';

const App = () => {

  const info = useDbData('temperature');
  
  return (
    
    <Tab/>
/*     <div>
      <BrowserRouter>
        <Route path='/temperature' component={temperature}/>
        <Route path='/precipitation' component={precipitation}/>
      </BrowserRouter>
    </div> */
  )
}

export default App;
