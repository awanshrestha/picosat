import React from 'react';
import './compbox.css';
import Clock from 'react-digital-clock';
import Draggable from 'react-draggable';
import { message } from 'antd';

class Temperature extends React.Component{
    _isMounted = false;
    constructor(){
        super();
        this.state = {
            location: "..............................",
            apitemp: 0,
            apihum:0,
            apipre:0
        }
    }

    componentDidMount(){
        this._isMounted = true;
        let  id  = this.props.cityid;
        setTimeout(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?id='+ id +'&appid=bbc5f477a5886eafe02dd98387d2503f')
        .then((response) => response.json())
        .then(data=>{
            if(this._isMounted){
                let newlocation = data.name
                let newtemp = ((data.main.temp -273).toFixed(2));
                let newpre = data.main.pressure;
                let newhum = data.main.humidity;
                this.setState(()=>{
                    return {
                        location: newlocation,
                        apitemp: newtemp,
                        apihum: newhum,
                        apipre: newpre
                    }
                })
            }
        })
        .catch(function(error) {
            message.error('Error Connecting to Openweathermap api');
            // console.log("Error connecting to api");
        });
        }, 3000);
    }
    
    // componentDidUpdate(){
    //     setTimeout(() => {
    //         fetch('http://api.openweathermap.org/data/2.5/weather?id=1283240&appid=bbc5f477a5886eafe02dd98387d2503f')
    //     .then((response) => response.json())
    //     .then(data=>{
    //         if(this._isMounted){
    //             let newtemp = ((data.main.temp -273).toFixed(2));
    //             let newpre = data.main.pressure;
    //             let newhum = data.main.humidity;
    //             this.setState(()=>{
    //                 return {
    //                     apitemp: newtemp,
    //                     apihum: newhum,
    //                     apipre: newpre
    //                 }
    //             })
    //         }
    //     })
    //     .catch(function(error) {
    //         message.error('Error Connecting to api');
    //         // console.log("Error connecting to api");
    //     });
    //     }, 6000);
    // }    

    // componentWillUnmount() {
    //     this._isMounted = false;
    //   }


    render(){
        return(
            <div className="wrapper-compbox">
                {/* <h1>Current EnSat Location: {this.state.location}</h1> */}
                <h1>EnSat Location: {this.state.location} </h1>
                <Draggable>
                <div className="compbox-container">
                    <h3>OpenWeatherMap's Data:</h3>
                    <h4>Temperature: {this.state.apitemp} °C</h4>
                    <h4>Humidity: {this.state.apihum} %</h4>
                    <h4>Pressure: {this.state.apipre * 100} Pascal </h4>
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