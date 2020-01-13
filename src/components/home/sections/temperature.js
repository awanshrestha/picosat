import React from 'react';
import './temperature.css';

class Temperature extends React.Component{
    render(){
        const chartStyle = {
            height: 250,
          }
        return(
            <div className="wrapper-temperature">
                <h1>Temperature</h1>
                <div className="temperature-container">
                    
                </div>  
            </div>
        )
    }
}

export default Temperature;