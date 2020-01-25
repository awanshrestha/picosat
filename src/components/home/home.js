import React from 'react';
import { message, Row, Col } from 'antd';
import "./home.css";
import Altitude from './sections/altitude';
import PressureBox from './sections/pressure';
import HumidityBox from './sections/humidity';
import TemperatureBox from './sections/temperature';
import CompBox from './sections/compbox';
import History from './sections/history';

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
                             _id: data._id,
                             int: x
                         }
                     })
                     message.success('update');
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
                    </Col>
                    <Col span={21}>
                        <Row>
                            <Col span={12}>
                                <CompBox cityid = {this.props.cityid}/>
                            </Col> 
                            <Col span={6} className="cool">
                                <HumidityBox humidity = {this.state.humidity}/>
                            </Col>
                            <Col span={6}>
                                <PressureBox pressure = {this.state.pressure}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <History/>
                            </Col>
                            <Col span={16} className="cool">
                                <TemperatureBox temperature = {this.state.temperature} cityid =  {this.props.cityid} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Home;