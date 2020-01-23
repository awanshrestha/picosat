import React from 'react';
import './graph.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class Graph extends React.Component{
    render(){
        return(
            <div className= 'graph-wrapper'>
                <Tabs type="line">
                    <TabPane tab="Live Data" key="1">
                        yoo
                    </TabPane>
                    <TabPane tab="History" key="2">
                        yo yoo
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Graph;