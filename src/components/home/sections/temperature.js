import React from 'react';
import './temperature.css';
import TempChart from './tempchart';

class Temperature extends React.Component{
    render(){
        
        return(
            <div className="wrapper-temperature">
                <h1>Temperature</h1>
                <div className="temperature-container">
                    <TempChart temperature = {this.props.temperature}/>
                </div>  
            </div>
        )
    }
}

export default Temperature;