import React from 'react';
import './pollution.css';
import {Tabs} from 'antd';
const { TabPane } = Tabs;

function Pollution(props) {
    return(
        <div className="wrapper-pollution">
            <h1>Pollution</h1>
            <div className="pollution-container">
                <Tabs tabPosition={"bottom"}>
                    <TabPane tab="μg/m³" key="1">
                       <h4 className="pollution">{props.pollution}</h4>
                    </TabPane>
                </Tabs>
            </div>  
        </div>
    )
}

export default Pollution;
