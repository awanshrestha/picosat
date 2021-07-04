import React from 'react';
import './temperaturenumber.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function Temperature(props) {
    let kelvin = Math.round((props.temperature + 273.15) * 1000) / 1000;
    return (
        <div className="wrapper-temperaturenumber">
            <h1>Temperature</h1>
            <div className="temperaturenumber-container">
                <Tabs tabPosition={"bottom"}>
                    <TabPane tab="° C" key="1">
                        <h4 className="temperaturenumber">{props.temperature}</h4>
                    </TabPane>
                    <TabPane tab="Kelvin" key="2">
                        <h4 className="temperaturenumber">{kelvin}</h4>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Temperature;