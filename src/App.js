import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'antd/dist/antd.min.css';
import './index.css';
import Tab from "./component/Tab"

const temperature = ()=>{
  return (
    <h1>Temp</h1>
  )
};

const precipitation = ()=>{
  return (
    <h1>Prec</h1>
  )
};

const App = () => {

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
