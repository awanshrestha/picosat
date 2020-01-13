import React from 'react';
import './live.css';
const sat = require('./satellite.jpg');


class Live extends React.Component{
    render(){
        return(
            <div className="stage">
                <img src={sat} alt="Sat" className="satimg"/>
            </div>
        )
    }
}

export default Live;