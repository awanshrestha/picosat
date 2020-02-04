import React from 'react';
import './temperature.css';
import TempChart from './tempchart';
// import {message} from 'antd';

class Temperature extends React.Component{

    constructor(){
        super();
        this.state = {
            apitemp: 0
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
                let newtemp = ((data.main.temp -273).toFixed(2));
                this.setState(()=>{
                    return {
                        apitemp: 
                        newtemp,
                    }
                })
            }
        })
        .catch(function(error) {
            // message.error('Error Connecting to api');
            // console.log("Error connecting to api");
        });
        }, 3000);
    }

    componentDidUpdate(){
        let  ida  = this.props.cityid;
        setTimeout(() => {
            fetch('http://api.openweathermap.org/data/2.5/weather?id='+ ida +'&appid=bbc5f477a5886eafe02dd98387d2503f')
        .then((response) => response.json())
        .then(data=>{
            if(this._isMounted){
                let newtemp = ((data.main.temp -273).toFixed(2));
                let newpre = data.main.pressure;
                let newhum = data.main.humidity;
                this.setState(()=>{
                    return {
                        apitemp: newtemp,
                        apihum: newhum,
                        apipre: newpre
                    }
                })
            }
        })
        .catch(function(error) {
            // message.error('Error Connecting to api');
            // console.log("Error connecting to api");
        });
        }, 20000);
    }     

    componentWillUnmount() {
        this._isMounted = false;
      }


    render(){
        return(
            <div className="wrapper-temperature">
                <h1>Temperature</h1>
                <div className="temperature-container">
                    <TempChart temperature = {this.props.temperature} owmtemperature =  {this.state.apitemp}/>
                </div>  
            </div>
        )
    } 
}

export default Temperature;