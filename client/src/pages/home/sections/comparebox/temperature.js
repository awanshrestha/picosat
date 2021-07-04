import React, {useState, useEffect} from 'react';
import './temperature.css';
import TempChart from './tempchart';

function Temperature(props) {
    let  id  = props.cityid;
    const [apitemp, setApitemp] = useState(0);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?id='+ id +'&appid=bbc5f477a5886eafe02dd98387d2503f')
        .then((response) => response.json())
        .then(data=>{
            let newtemp = ((data.main.temp -273).toFixed(2));
            return newtemp;    
        })
        .then(setApitemp)
        .catch(function(error) {
            console.log('Error Connecting to Openapi');
        });
    }, [id]);

    return(
        <div className="wrapper-temperature">
            <h1>Temperature</h1>
            <div className="temperature-container">
                <TempChart temperature = {props.temperature} owmtemperature =  {apitemp}/>
            </div>  
        </div>
    )
} 
   
export default Temperature;