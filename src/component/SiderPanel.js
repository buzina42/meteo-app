import React, {useContext} from "react";
import { Layout, Menu } from "antd";
import { NewMenuItem }  from "./NewMenuItem.js";
import { menuName } from "./menuName.js";
import { StoreNameContext } from "../context/storeName-context.js";

const {Sider} = Layout;

export default function SiderPanel() {
    const {dispatch} = useContext(StoreNameContext);

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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >              
                {menuName.map(({icon, name, paragraph}) => 
                    <NewMenuItem
                    icon={icon}
                    tapMenu={tapMenu}
                    paragraph={paragraph}
                    key={name}
                    name={name}
                    /> 
                )}
            </Menu>
        </Sider>
    )
}
