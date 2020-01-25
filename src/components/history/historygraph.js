import React from 'react';
import TemperatureChart from './temphistorychart';
import HumidityChart from './humhistorychart';
import PressureChart from './prehistorychart';
import {Select, message} from 'antd';
import './historygraph.css';

const {Option} = Select;

class History extends React.Component{
    constructor(){
        super();
        this.state = {
            timeArr: [],
            tempArr: [],
            humArr: [],
            pressArr: [],
            timestring: "1 minute"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {

            fetch('/gethistorydata/' + value)
            .then((response) => response.json())
            .then(data=>{
                var say;
                    if(value == 1){
                        say = "1 Minute";
                    }
                    else if(value == 5){
                        say = "5 Minutes";
                    }
                    else if(value == 10){
                        say = "10 Minutes";
                    }
                    else if(value == 60){
                        say = "1 Hour";
                    }
                    else if(value == 120){
                        say = "2 Hours";
                    }
                    else if(value == 300){
                        say = "5 Hours";
                    }
                    else if(value == 1440){
                        say = "1 Day";
                    }
                    else{
                        say = "1 minute";
                    }
                    let timeArray = data.time;
                    let temperatureArray = data.temperaturehistory;
                    let humidityArray = data.humidityhistory;
                    let pressureArray = data.pressurehistory;
                    this.setState(()=>{
                        return {
                            timeArr: timeArray,
                            tempArr: temperatureArray,
                            humArr: humidityArray,
                            pressArr: pressureArray,
                            timestring: say
                        }
                    })
            })
            .catch(function(error) {
                message.error('Error Connecting to database');
                // console.log("Error connecting to api");
            });
    }

    componentDidMount(){
            let timeforapi = 1;
            fetch('/gethistorydata/' + timeforapi)
            .then((response) => response.json())
            .then(data=>{
                    let timeArray = data.time;
                    let temperatureArray = data.temperaturehistory;
                    let humidityArray = data.humidityhistory;
                    let pressureArray = data.pressurehistory;
                    this.setState(()=>{
                        return {
                            timeArr: timeArray,
                            tempArr: temperatureArray,
                            humArr: humidityArray,
                            pressArr: pressureArray,
                        }
                    })
            })
            .catch(function(error) {
                message.error('Error Connecting to database');
                // console.log("Error connecting to api");
            });
    }

    render(){
        
        return(
            <div>
                <div className="historygraph-heading">
                    <h1>Environment Data History</h1>
                    <div>
                        <span>
                            Show data of last :
                        </span>
                        &nbsp;  
                        <Select style={{ width: 120 }} placeholder="1 minute" onChange={this.handleChange}>
                            <Option value="1">1 Minutes</Option>
                            <Option value="5">5 Minutes</Option>
                            <Option value="10">10 Minutes</Option>
                            <Option value="60">1 Hour</Option>
                            <Option value="120">2 Hour</Option>
                            <Option value="300">5 Hour</Option>
                            <Option value="1440">24 Hour</Option>
                        </Select>
                    </div>
                </div>
                <div className = "history-graph-container">
                    <h2>Temperature of Last {this.state.timestring} (°C)</h2>
                    <TemperatureChart data = {this.state.tempArr}  graphtime= {this.state.timeArr}/>
                </div>
                <div style={{height:"30px"}}></div>
                <div className = "history-graph-container">
                    <h2>Humidity of Last {this.state.timestring} (%)</h2>
                    <HumidityChart data = {this.state.humArr}  graphtime= {this.state.timeArr}/>
                </div>
                <div style={{height:"30px"}}></div>
                <div className = "history-graph-container">
                    <h2>Pressure of Last {this.state.timestring} (Pascal)</h2>
                    <PressureChart data = {this.state.pressArr  }  graphtime= {this.state.timeArr}/>
                </div>
                <div style={{height:"30px"}}></div>
            </div>
        )
    }
}

export default History;
