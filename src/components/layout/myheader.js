import React from 'react';
import 'antd/dist/antd.css';
import "./myheader.css";

const logo = require('./resources/favicona.png');

class MyHeader extends React.Component {
    render() {
        let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',                        'October', 'November', 'December']
    
        let d = new Date();
        let day = weekday[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return (
            <div className= 'wrapper'>
                <div className="topbar">
                <img src={logo} alt="Pico Sat Logo" className="logo"/>
                <div>
                    <h2 className="red"> {day} {date}<sup>th</sup></h2>
                    <p>{month}, {year}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default MyHeader;