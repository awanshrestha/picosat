import React, {useState, useEffect} from 'react';
import './compbox.css';
import Clock from 'react-digital-clock';
import Draggable from 'react-draggable';
import { message } from 'antd';

function Compbox(props) {
    let  id  = props.cityid; 
    const [data, setData] = useState(
        {
            location: "..............................",
            apitemp: 0,
            apihum:0,
            apipre:0
        }
    );

    useEffect(() => {

        fetch('https://api.openweathermap.org/data/2.5/weather?id='+ id +'&appid=bbc5f477a5886eafe02dd98387d2503f')
        .then((response) => response.json())
        .then(data=>{
                let newlocation = data.name
                let newtemp = ((data.main.temp -273).toFixed(2));
                let newpre = data.main.pressure;
                let newhum = data.main.humidity;
                return {
                    location: newlocation,
                    apitemp: newtemp,
                    apihum: newhum,
                    apipre: newpre
                }
        })
        .then(setData)
        .catch(function(error) {
            message.error('Error Connecting to Openweathermap api');
        });
    }, [id]);

    return(
        <div className="wrapper-compbox">
            <h1>EnSat Location: {data.location} </h1>
            <Draggable>
            <div className="compbox-container">
                <h3>OpenWeatherMap's Data:</h3>
                <h4>Temperature: {data.apitemp} °C</h4>
                <h4>Humidity: {data.apihum} %</h4>
                <h4>Pressure: {data.apipre * 100} Pascal </h4>
            </div>  
            </Draggable>
            <Draggable>
            <div className="compbox-container-date">
                <h3><Clock  />  </h3>  
            </div>
            </Draggable>
        </div>
    )
}

export default Compbox;