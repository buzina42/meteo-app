import React, {useContext} from "react";
import { Layout, Menu } from "antd";
import NewMenuItem from "./NewMenuItem.js";
import { menuName } from "./menuName.js";
import { StoreNameContext } from "../context/storeName-context.js";

const {Sider} = Layout;

export default function SiderPanel() {
    const {state, dispatch} = useContext(StoreNameContext);

    const tapMenu = (props) =>{dispatch({
        type: props,
        payload: {
            store: props
        }
      })
      console.log(props)
    }

    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
            console.log(broken);
        } }
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        } }
        >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            {/* <Menu.Item key="1" icon={menuName[0].icon} onClick={()=>tapMenu(menuName[0].name)}>
            {menuName[0].paragraph}
            </Menu.Item>
            <Menu.Item key="2" icon={menuName[1].icon} onClick={()=>tapMenu(menuName[1].name)}>
              {menuName[1].paragraph}
            </Menu.Item> */}
            
            {menuName.map(({name, icon, paragraph}) => (
                <NewMenuItem
                icon={icon}
                tapMenu={tapMenu}
                paragraph={paragraph}
                key={name}
                name={name}
                /> 
            ))}
        </Menu>
        </Sider>
    )
}
