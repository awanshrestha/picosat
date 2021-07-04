import React from 'react';
import './gas.css';
import {Tabs} from 'antd';
const { TabPane } = Tabs;

class Gas extends React.Component{
    render(){

        return(
            <div className="wrapper-gas">
                <h1>Gas</h1>
                <div className="gas-container">
                    <Tabs tabPosition={"bottom"}>
                        <TabPane tab="ARQ" key="1">
                           <h4 className="gas">{this.props.gas}</h4>
                        </TabPane>
                    </Tabs>
                </div>  
            </div>
        )
    }
}

export default Gas;