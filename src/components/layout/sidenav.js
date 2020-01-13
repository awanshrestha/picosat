import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import "./sidenav.css";
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Sidenav extends React.Component {
    render() {
        return (
            <Sider collapsible collapsed={true} trigger={null} 
                    collapsedWidth={70} theme={"light"} 
                    className="sider">
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="light"
                    style={{
                        width:"70px"
                    }}
                >
                    <Menu.Item key="1">
                        <Icon type="home" theme="filled" />
                        <Link to="/">
                        <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="pie-chart" theme="filled" />
                        <Link to="/data">
                        <span>Data</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="compass" theme="filled" />
                        <Link to="/live">
                        <span>Live</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="question-circle" theme="filled" />
                        <Link to="/about">
                        <span>About</span>
                        </Link>
                    </Menu.Item>
                    
                    <div className="hawa"></div>
                    <Menu.Item key="5" className ="settings">
                        <Icon type="setting" theme="filled" />
                        <Link to="/settings">
                        <span>Settings</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Sidenav;
