import React from 'react';
import {Icon} from 'antd';
import './history.css';

class History extends React.Component{
    render(){
        const chartStyle = {
            height: 250,
          }
        return(
            <div className="wrapper-history-home">
                <h1> Past 24 Hours Data:</h1>
                <div className="history-home-box">
                    <div className="history-home-icon-box">
                        <Icon type="picture" theme="filled" style={{ fontSize: '40px', color: '#F17361' }} />
                    </div>
                    <div className="history-home-title">
                        <h4>Temperature</h4>
                    </div>
                    <div className="history-home-right-box">
                        <h4>
                        10 - 12 °C
                        </h4>
                    </div>
                </div>

                <div className="history-home-box">
                    <div className="history-home-icon-box">
                        <Icon type="cloud" theme="filled" style={{ fontSize: '40px', color: '#7ECFFF' }} />
                    </div>
                    <div className="history-home-title">
                        <h4>Humidity</h4>
                    </div>
                    <span style={{width:"25px"}}></span>
                    <div className="history-home-right-box" style={{backgroundColor:"#7ECFFF", borderColor: "#7ECFFF"}}>
                        <h4>
                        10 - 12 %
                        </h4>
                    </div>
                </div>

                <div className="history-home-box">
                    <div className="history-home-icon-box">
                        <Icon type="dashboard" theme="filled" style={{ fontSize: '40px', color: '#7768E5' }} />
                    </div>
                    <div className="history-home-title">
                        <h4>Pressure</h4>
                    </div>
                    <span style={{width:"30px"}}></span>
                    <div className="history-home-right-box" style={{backgroundColor:"#7768E5", borderColor: "#7768E5"}}>
                        <h4>
                        1000-11000 Pascal
                        </h4>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default History;