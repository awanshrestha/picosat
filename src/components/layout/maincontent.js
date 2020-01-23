import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Settings from '../settings/settings';
import About from '../about/about';
import Home from '../home/home'
import Data from '../data/data'
import Live from '../live/live';
import { Layout,message } from 'antd';
import Graph from '../graph/graph';
const { Content } = Layout;
 
class MainContent extends React.Component {
    constructor(){
        super()
        this.state = {
            cityid: 1282950
        }
        this.changeid = this.changeid.bind(this);
    }

    changeid = (val) => {
        message.success("Location updated...");
        this.setState({ cityid: val });
    }

    render() {
        return (
                <Content style={{ padding: "10px", minHeight: "100vh",paddingTop: "100px", margin: "0px",                     backgroundColor: "#F6F6F6", marginLeft: 70 }}>
                <Switch>
                    <Route path='/' exact render = { props => <Home cityid = {this.state.cityid}/>} />
                    <Route path='/data' component={Data} />
                    <Route path='/graph' component={Graph} />
                    <Route path='/live' component={Live} />
                    <Route path='/about' exact component={About} />
                    <Route path='/settings' render = { props => <Settings changeid = {this.changeid} cityid =                           {this.state.cityid}/> } />
                </Switch>
            </Content>
        );
    }
  }
  
export default MainContent;
  