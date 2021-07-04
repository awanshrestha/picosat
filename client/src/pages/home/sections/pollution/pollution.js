import React from 'react';
import './pollution.css';
import {Tabs} from 'antd';
const { TabPane } = Tabs;

class Pollution extends React.Component{
    render(){

        return(
            <div className="wrapper-pollution">
                <h1>Pollution</h1>
                <div className="pollution-container">
                    <Tabs tabPosition={"bottom"}>
                        <TabPane tab="μg/m³" key="1">
                           <h4 className="pollution">{this.props.pollution}</h4>
                        </TabPane>
                    </Tabs>
                </div>  
            </div>
        )
    }
}

export default Pollution;
