import React from 'react';
import { message } from 'antd';
import './graph.css';
import Agraph from './agraph';

class Graph extends React.Component{
    _isMounted = false;
    constructor(){
        super()
        this.state = {
            temperature: 0,
            humidity: 0,
            pressure: 0, 
            apitemperature: 0,
            apihumidity: 0,
            apipressure: 0
        }
    }

    componentDidMount(){
        this._isMounted = true;
        setTimeout(() => {
        fetch('/getalldata')
        .then((response) => response.json())
        .then(data=>{
            if(this._isMounted){
                this.setState(()=>{
                    return {
                        temperature: data.temperature,
                        humidity: data.humidity,
                        pressure: data.pressure,
                    }
                })
            }
        })
        .catch(function(error) {
            message.error('Error Connecting to database');
            // console.log("Error connecting to database");
        });
        }, 1000);


        //FOR API DATA

        // let  id  = this.props.cityid;
        // setTimeout(() => {
        //     fetch('http://api.openweathermap.org/data/2.5/weather?id='+ id +'&appid=bbc5f477a5886eafe02dd98387d2503f')
        //     .then((response) => response.json())
        //     .then(data=>{
        //         if(this._isMounted){
        //             let newtemp = ((data.main.temp -273).toFixed(2));
        //             let newpre = data.main.pressure;
        //             let newhum = data.main.humidity;
        //             this.setState(()=>{
        //                 return {
        //                     apitemperature: newtemp,
        //                     apihumidity: newhum,
        //                     apipressure: newpre
        //                 }
        //             })
        //         }
        //     })
        //     .catch(function(error) {
        //         message.error('Error Connecting to api');
        //         // console.log("Error connecting to api");
        //     });
        //     }, 3000);

        
    }
    
    componentDidUpdate(){
        setTimeout(() => {
        fetch('/getalldata')
        .then((response) => response.json())
        .then(data=>{
                if(this._isMounted){
                    this.setState(()=>{
                         return {
                             temperature: data.temperature,
                             humidity: data.humidity,
                             pressure: data.pressure,
                         }
                     })
                }
        })
        .catch(function(error) {
            message.error('Error Connecting to database');
            // console.log("Error connecting to database");
        });
        }, 6000);

        // let  idz  = this.props.cityid;
        // setTimeout(() => {
        //     fetch('http://api.openweathermap.org/data/2.5/weather?id='+ idz +'&appid=bbc5f477a5886eafe02dd98387d2503f')
        //     .then((response) => response.json())
        //     .then(data=>{
        //         if(this._isMounted){
        //             let newtemp = ((data.main.temp -273).toFixed(2));
        //             let newpre = data.main.pressure;
        //             let newhum = data.main.humidity;
        //             this.setState(()=>{
        //                 return {
        //                     apitemperature: newtemp,
        //                     apihumidity: newhum,
        //                     apipressure: newpre
        //                 }
        //             })
        //         }
        //     })
        //     .catch(function(error) {
        //         message.error('Error Connecting to api graph');
        //         // console.log("Error connecting to api");
        //     });
        //     }, 10000);

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        return(
            <div className="graph-wrapper">                 
                <Agraph 
                    picotemperature = {this.state.temperature}
                    picohumidity = {this.state.humidity} 
                    picopressure = {this.state.pressure}  
                    // picodata = {this.state.temperature}
                    // owmdata =  {this.state.apitemperature}
                />      
            </div>
        )
    }
}

export default Graph;