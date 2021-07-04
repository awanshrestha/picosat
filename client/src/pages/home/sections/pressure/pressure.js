import React from 'react';
import './pressure.css';
import {Tabs} from 'antd';
const { TabPane } = Tabs;

class Pressure extends React.Component{
    render(){

        let atm = Math.round(this.props.pressure * 0.00000986923 * 1000) / 1000;
        return(
            <div className="wrapper-pressure">
                <h1>Pressure</h1>
                <div className="pressure-container">
                    <Tabs tabPosition={"bottom"}>
                        <TabPane tab="Pascal" key="1">
                           <h4 className="pressure">{this.props.pressure}</h4>
                        </TabPane>
                        <TabPane tab="Atm" key="2">
                        <h4 className="pressure">{atm}</h4>
                        </TabPane>
                    </Tabs>
                </div>  
            </div>
        )
    }
}

export default Pressure;