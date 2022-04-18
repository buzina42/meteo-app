import React from "react"
import 'antd/dist/antd.min.css';
import { Menu } from "antd";


export const NewMenuItem = ({name, icon, tapMenu, paragraph}) => {
    return(
        <Menu.Item
          key={name}
          icon={icon}
          onClick={()=>tapMenu(name)}
        >  
          {paragraph}
        </Menu.Item>
    )
  }