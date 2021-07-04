import React, { useState, useEffect } from 'react';

import TemperatureChart from './temphistorychart';
import HumidityChart from './humhistorychart';
import PressureChart from './prehistorychart';
import GasChart from './gashistorychart';
import PollutionChart from './pollhistorygraph';
import { Select, message } from 'antd';
import './historygraph.css';

const { Option } = Select;

function History() {
    const [data, setData] = useState(
        {
            timeArr: [],
            tempArr: [],
            humArr: [],
            pressArr: [],
            gasArr: [],
            pollutionArr: [],
            timestring: "1 minute"
        }
    );
    const [timeforapi, setTimeforapi] = useState(1);

    useEffect(() => {
        fetch('https://ensatserver.herokuapp.com/gethistorydata/' + timeforapi)
            .then((response) => response.json())
            .then(data => {
                var say;
                if (timeforapi === "1") {
                    say = "1 Minute";
                }
                else if (timeforapi === "5") {
                    say = "5 Minutes";
                }
                else if (timeforapi === "10") {
                    say = "10 Minutes";
                }
                else if (timeforapi === "60") {
                    say = "1 Hour";
                }
                else if (timeforapi === "120") {
                    say = "2 Hours";
                }
                else if (timeforapi === "300") {
                    say = "5 Hours";
                }
                else if (timeforapi === "1440") {
                    say = "1 Day";
                }
                else {
                    say = "1 minute";
                }

                let timeArray = data.time;
                let temperatureArray = data.temperaturehistory;
                let humidityArray = data.humidityhistory;
                let pressureArray = data.pressurehistory;
                let gasArray = data.gashistory;
                let pollutionArray = data.pollutionhistory;

                return {
                    timeArr: timeArray,
                    tempArr: temperatureArray,
                    humArr: humidityArray,
                    pressArr: pressureArray,
                    gasArr: gasArray,
                    pollutionArr: pollutionArray,
                    timestring: say
                }
            })
            .then(setData)
            .catch(function (error) {
                message.error('Error Connecting to database');
            });
    }, [timeforapi]);

    function handleChange(value) {
        setTimeforapi(value)
    }

    return (
        <div>
            <div className="historygraph-heading">
                <h1>Environment Data History</h1>
                <div>
                    <span>
                        Show data of last :
                    </span>
                    &nbsp;
                    <Select style={{ width: 120 }} placeholder="1 minute" onChange={handleChange}>
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
            <div className="history-graph-container">
                <h2>Temperature of Last {data.timestring} (°C)</h2>
                <TemperatureChart data={data.tempArr} graphtime={data.timeArr} />
            </div>
            <div style={{ height: "30px" }}></div>
            <div className="history-graph-container">
                <h2>Humidity of Last {data.timestring} (%)</h2>
                <HumidityChart data={data.humArr} graphtime={data.timeArr} />
            </div>
            <div style={{ height: "30px" }}></div>
            <div className="history-graph-container">
                <h2>Pressure of Last {data.timestring} (Pascal)</h2>
                <PressureChart data={data.pressArr} graphtime={data.timeArr} />
            </div>
            <div style={{ height: "30px" }}></div>

            <div className="history-graph-container">
                <h2>Gas Data of Last {data.timestring}</h2>
                <GasChart data={data.gasArr} graphtime={data.timeArr} />
            </div>
            <div style={{ height: "30px" }}></div>

            <div className="history-graph-container">
                <h2>Pollution Data of Last {data.timestring} (μg/m^3)</h2>
                <PollutionChart data={data.pollutionArr} graphtime={data.timeArr} />
            </div>
            <div style={{ height: "30px" }}></div>
        </div>
    )
}

export default History;
