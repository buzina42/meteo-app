import React, {useContext} from "react";
import { Layout, Menu } from "antd";
import { menuName } from "./menuName.js";
import { ParameterGraphContext } from "../context/parameter-context.js";

const {Sider} = Layout;

export default function SiderPanel() {
    const {dispatch} = useContext(ParameterGraphContext);

    const tapMenu = (props) =>{dispatch({
        type: props.name,
        payload: {
            store: props.name,
            paragraph: props.paragraph
        }
      })
      console.log(`диспатч из меню ${props.name}`)
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['temperature']} >              
                {menuName.map(props => 
                    <Menu.Item
                        key={props.name}
                        icon={props.icon}
                        onClick={()=>tapMenu(props)}
                    >  
                        {props.paragraph}
                    </Menu.Item>
                )}
            </Menu>
        </Sider>
    )
}
