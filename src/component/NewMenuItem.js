import React from "react"
import 'antd/dist/antd.min.css';
import { Menu } from "antd";


export default function NewMenuItem({name, icon, tapMenu, paragraph}) {
    return(
        <Menu.Item
          icon={icon}
          onClick={()=>tapMenu(name)}
        >  
          {paragraph}
        </Menu.Item>
    )
  }