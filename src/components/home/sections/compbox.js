import React from 'react';
import './compbox.css';
import Clock from 'react-digital-clock';
import Draggable from 'react-draggable';

class Temperature extends React.Component{
    render(){
        return(
            <div className="wrapper-compbox">
                <h1>Current PicoSat Location: .................................</h1>
                <Draggable>
                <div className="compbox-container">
                    <h3>OpenWeatherMap's Data:</h3>
                    <h4>Temperature: 17 C</h4>
                    <h4>Humidity: 45 %</h4>
                    <h4>Pressure: 1500 Pascal </h4>
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
}

export default Temperature;