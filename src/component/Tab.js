import React from 'react';
import { Layout} from 'antd';
import SelectDate from './SelectDate.js';
import Graph from './Graph.js';
import SiderPanel from './SiderPanel.js';

const { Header, Content, Footer} = Layout;

export default function Tab() {

    return (
        <Layout>
            <SiderPanel />
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Graph/>
                        <SelectDate/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}