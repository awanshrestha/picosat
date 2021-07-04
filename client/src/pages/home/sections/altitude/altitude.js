import React from 'react';
import {Slider} from 'antd';
import './altitude.css';

function Altitude(props) {
    const marks = {
        0: {
            style: {
                color: 'rgba(229, 136, 255, 0.97)',
            },
            label: <strong>0</strong>,
        },
        4000: {
            style: {
                color: 'rgba(229, 136, 255, 0.97)',
            },
            label: <strong>4000</strong>,
        },
    }
    return(
        <div className="wrapper-altd">
            <h1>Altitude</h1>
            <div className="slider-container">
            <Slider 
                vertical 
                tooltipPlacement={"right"} 
                tooltipVisible={true} 
                defaultValue={1500}
                value={props.altitud} 
                max={4000} 
                tipFormatter={function (val) {
                    return val + " Meter"
                }}
                marks = {marks}/>
            </div>
        </div>
    )
}

export default Altitude;