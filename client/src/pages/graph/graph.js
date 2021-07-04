import React, {useState, useEffect} from 'react';
import { message } from 'antd';
import './graph.css';
import Graphbox from './graphbox';

function Graph() {
    const [data, setData] = useState(
        {
            temperature: 0,
            humidity: 0,
            pressure: 0,
            gas:0,
            pollution:0, 
        }
    );

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('https://ensatserver.herokuapp.com/getalldata')
            .then((response) => response.json())
            .then(data=>{
                return {
                    temperature: data.temperature,
                    humidity: data.humidity,
                    pressure: data.pressure,
                    gas: data.gas,
                    pollution: data.pollution
                }          
            })
            .then(setData)
            .catch(function(error) {
                message.error('Error Connecting to database');
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="graph-wrapper">                 
            <Graphbox 
                picotemperature = {data.temperature}
                picohumidity = {data.humidity} 
                picopressure = {data.pressure}
                picogas = {data.gas}
                picopollution = {data.pollution}  
            />      
        </div>
    )
}     

export default Graph;