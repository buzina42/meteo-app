import React from "react";
import { Layout, Menu } from "antd";
import { ThunderboltFilled, LineChartOutlined , RadarChartOutlined } from '@ant-design/icons';

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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<LineChartOutlined />}>
                Температура
            </Menu.Item>
            <Menu.Item key="2" icon={<ThunderboltFilled />}>
                Осадки
            </Menu.Item>
            <Menu.Item key="3" icon={<RadarChartOutlined />}>
                Соотношение
            </Menu.Item>
        </Menu>
        </Sider>
    )
}
