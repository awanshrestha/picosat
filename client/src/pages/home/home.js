import React, { useState, useEffect } from 'react';
import { message, Row, Col } from 'antd';

import "./home.css";
import Altitude from './sections/altitude/altitude';
import PressureBox from './sections/pressure/pressure';
import HumidityBox from './sections/humidity/humidity';
import TemperatureBox from './sections/comparebox/temperature';
import TemperatureNumberBox from './sections/temperature/temperaturenumber';
import Gas from './sections/gas/gas';
import Pollution from './sections/pollution/pollution';
import CompBox from './sections/comparebox/compbox';
import History from './sections/history/history';
import Rotator from './sections/spinner/homepagesat';

const kukologo = require('../../assets/images/home/kulogo.png');

function Home(props) {
    let cityid = props.cityid;
    const [data, setData] = useState(
        {
            timestamp: 1578646212212,
            temperature: 0,
            humidity: 0,
            pressure: 0,
            altitude: 0,
            gas: 0,
            pollution: 0,
            _id: "",
        }
    );

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('https://ensatserver.herokuapp.com/getalldata')
                .then((response) => response.json())
                .then(data => {
                    return {
                        timestamp: data.timestamp,
                        temperature: data.temperature,
                        humidity: data.humidity,
                        pressure: data.pressure,
                        altitude: data.altitude,
                        gas: data.gas,
                        pollution: data.pollution,
                        _id: data._id
                    }
                })
                .then(setData)
                .catch(function (error) {
                    message.error('Could not update the data...');
                });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Row type="flex" >
                <Col span={3}>
                    <Altitude altitud={data.altitude} />
                    <div className="kulogohome">
                        <img src={kukologo} alt="Pico Sat Logo" className="logo" />
                    </div>
                </Col>
                <Col span={21}>
                    <Row>
                        <Col span={9}>
                            <CompBox cityid={cityid} />
                        </Col>
                        <Col span={5} className="cool">
                            <Gas gas={data.gas} />
                        </Col>
                        <Col span={5} className="cool">
                            <Pollution pollution={data.pollution} />
                        </Col>
                        <Col span={5}>
                            <TemperatureNumberBox temperature={data.temperature} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <History />
                        </Col>
                        <Col span={16} className="cool">
                            <TemperatureBox temperature={data.temperature} cityid={cityid} />

                            <Row>
                                <Col span={8} className="cool">
                                    <HumidityBox humidity={data.humidity} />
                                </Col>
                                <Col span={8} className="cool">
                                    <PressureBox pressure={data.pressure} />
                                </Col>
                                <Col span={8}>
                                    <Rotator />
                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Home;