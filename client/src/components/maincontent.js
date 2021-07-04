import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout, message } from 'antd';

import Settings from '../pages/settings/settings';
import About from '../pages/about/about';
import Home from '../pages/home/home'
import History from '../pages/history/historygraph';
import Data from '../pages/data/data'
import Graph from '../pages/graph/graph';
const { Content } = Layout;

function MainContent() {
    const [city, setCity] = useState(1282950);

    function changeid(val) {
        message.success("Location updated...");
        setCity(val)
    }

    const contentstyle = {
        padding: "10px",
        minHeight: "100vh",
        paddingTop: "100px",
        margin: "0px",
        backgroundColor: "#F6F6F6",
        marginLeft: 70
    }
    return (
        <Content style={contentstyle}  data-testid = 'my-sidenav'>
            <Switch>
                <Route path='/' exact render={props => <Home cityid={city} />} />
                <Route path='/data' component={Data} />
                <Route path='/graph' component={Graph} />
                <Route path='/history' component={History} />
                <Route path='/about' component={About} />
                <Route path='/settings' render={props => <Settings changeid={changeid} cityid={city} />} />
            </Switch>
        </Content>
    );
}

export default MainContent;
