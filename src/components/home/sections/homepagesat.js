import React from 'react';
import './homepagesat.css';

const sat = require('./satellite.jpg');

class Rotator extends React.Component{
    render(){
        return(
                <div style={{perspective: "1200px", position:"relative", top:"20px", left: "30px"}}>
                <img src={sat} alt="Sat" className="ghumnesatellite"/>
            </div>
        )
    }
}

export default Rotator;