import React from "react";
import { Layout, Menu } from "antd";
import { ThunderboltFilled, LineChartOutlined , RadarChartOutlined } from '@ant-design/icons';
import storeNameDB from "../component/storeNameDB.js"
import { useContext } from "react";
import { StoreNameContext } from "../context/storeName-context.js";

const {Sider} = Layout;

export default function SiderPanel() {

    
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
                <Menu.Item name={"temperature"} key="1" icon={<LineChartOutlined />} onSelect={storeNameDB(this.name)}>
                    Температура
                </Menu.Item>
                <Menu.Item name={"precipitation"} key="2" icon={<ThunderboltFilled />} onSelect={storeNameDB(this.name)}>
                    Осадки
                </Menu.Item>
                <Menu.Item name={"two param"} key="3" icon={<RadarChartOutlined />} onSelect={storeNameDB(this.name)}>
                    Соотношение
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
