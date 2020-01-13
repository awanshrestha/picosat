import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Settings from '../settings/settings';
import About from '../about/about';
import Home from '../home/home'
import Data from '../data/data'
import Live from '../live/live';
import { Layout } from 'antd';
const { Content } = Layout;
 
class MainContent extends React.Component {
    render() {
        return (
                <Content style={{ padding: "10px", minHeight: "100vh",paddingTop: "100px", margin: "0px",                     backgroundColor: "#F6F6F6", marginLeft: 70 }}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/data' component={Data} />
                    <Route path='/live' component={Live} />
                    <Route path='/about' exact component={About} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </Content>
        );
    }
  }
  
export default MainContent;
  