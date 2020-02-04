import React from 'react';
import { message, Row, Col } from 'antd';
import "./home.css";
import Altitude from './sections/altitude';
import PressureBox from './sections/pressure';
import HumidityBox from './sections/humidity';
import TemperatureBox from './sections/temperature';
import TemperatureNumberBox from './sections/temperaturenumber';
import Gas from './sections/gas';
import Pollution from './sections/pollution';
import CompBox from './sections/compbox';
import History from './sections/history';
import Rotator from './sections/homepagesat';

const kukologo = require('./kulogo.png');

class Home extends React.Component{
    _isMounted = false;
    constructor(){
        super()
        this.state = {
            timestamp: 1578646212212,
            temperature: 0,
            humidity: 0,
            pressure: 0, 
            altitude: 1500,
            gas: 0,
            pollution: 0,
            _id: "",
            int: 0,
        }
    }


    componentDidMount(){
        this._isMounted = true;
        setTimeout(() => {
            fetch('/getalldata')
        .then((response) => response.json())
        .then(data=>{
            if(this._isMounted){
                this.setState(()=>{
                    return {
                        timestamp: data.timestamp,
                        temperature: data.temperature,
                        humidity: data.humidity,
                        pressure: data.pressure,
                        altitude: data.altitude,
                        gas: data.gas,
                        pollution: data.pollution,
                        _id: data._id,
                        int:0
                    }
                })
            }
        })
        .catch(function(error) {
            message.error('Error Connecting to database');
            // console.log("Error connecting to database");
        });
        }, 1000);
    }
    
    componentDidUpdate(){
        setTimeout(() => {
            fetch('/getalldata')
        .then((response) => response.json())
        .then(data=>{
            if(data._id !== this.state._id){
                if(this._isMounted){
                    this.setState((prev)=>{
                        var x = prev.int +1;
                         return {
                             timestamp: data.timestamp,
                             temperature: data.temperature,
                             humidity: data.humidity,
                             pressure: data.pressure,
                             altitude: data.altitude,
                             gas: data.gas,
                             pollution: data.pollution,
                             _id: data._id,
                             int: x
                         }
                     })
                    //  message.success('update');
                     console.log(this.state.int);
                }
            }
            else{
                message.error('Database not updating...');
            }
        })
        .catch(function(error) {
            message.error('Error Connecting to database');
            // console.log("Error connecting to database");
        });
        }, 6000);
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

    render(){
        return(
            <div>
                <Row type="flex" >
                    <Col span={3}>
                        <Altitude altitud = {this.state.altitude}/>
                        <div className="kulogohome">
                            <img src={kukologo} alt="Pico Sat Logo" className="logo" />
                        </div>
                    </Col>
                    <Col span={21}>
                        <Row>
                            <Col span={9}>
                                <CompBox cityid = {this.props.cityid}/>
                            </Col> 
                            <Col span={5} className="cool">
                                <Gas gas = {this.state.gas}/>
                            </Col>
                            <Col span={5} className="cool">
                                <Pollution pollution = {this.state.pollution}/>
                            </Col>
                            <Col span={5}>
                                <TemperatureNumberBox temperature = {this.state.temperature}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <History/>
                            </Col>
                            <Col span={16} className="cool">
                                <TemperatureBox temperature = {this.state.temperature} cityid =  {this.props.cityid} />

                                <Row>
                                <Col span={8} className="cool">
                                    <HumidityBox humidity = {this.state.humidity}/>
                                </Col>
                                <Col span={8} className="cool">
                                    <PressureBox pressure = {this.state.pressure}/>
                                </Col>
                                <Col span={8}>
                                    <Rotator/>
                                </Col>
                            </Row>

                            </Col>

                        </Row>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Home;