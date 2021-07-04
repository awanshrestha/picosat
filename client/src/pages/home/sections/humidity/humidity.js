import React from 'react';
import './humidity.css';
import GaugeChart from 'react-gauge-chart'

function Humidity(props) {
    return(
        <div className="wrapper-humidity">
            <h1>Humidity</h1>
            <div className="humidity-container">
                <GaugeChart 
                id="gauge-chart1"
                percent = {props.humidity * 0.01}
                nrOfLevels={30} 
                colors={["#E7E7E7", "green"]} 
                textColor = "green"
                needleColor= "rgba(111, 231, 229, 0.548)" 
                needleBaseColor="#3FE2DC"
                />
            </div>  
        </div>
    )
}    

export default Humidity;