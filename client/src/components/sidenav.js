import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import "./sidenav.css";
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

function Sidenav() {
    const theSideNav = (
        <Sider collapsible
            collapsed={true}
            trigger={null}
            collapsedWidth={70} theme={"light"}
            className="sider"
            data-testid = 'my-sidenav'>
            
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="light"
                style={{
                    width: "70px"
                }}
            >
                <Menu.Item key="1">
                    <Icon type="home" theme="filled" />
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="database" theme="filled" />
                    <Link to="/data">
                        <span>Data</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="fund" theme="filled" />
                    <Link to="/graph">
                        <span>Graph</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="pie-chart" theme="filled" />
                    <Link to="/history">
                        <span>History</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Icon type="question-circle" theme="filled" />
                    <Link to="/about">
                        <span>About</span>
                    </Link>
                </Menu.Item>

                <div className="hawa"></div>
                <Menu.Item key="7" className="settings">
                    <Icon type="setting" theme="filled" />
                    <Link to="/settings">
                        <span>Settings</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
    return theSideNav;
}       

export default Sidenav;
