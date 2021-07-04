import React from 'react';
import './data.css';
import { InputNumber,message  } from 'antd';
import Datatable from './table';

class Data extends React.Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        fetch('https://ensatserver.herokuapp.com/getndata/10')
        .then((response)=> response.json())
        .then((fetcheddata)=>{
            this.setState(()=>{
                return {
                    data: fetcheddata
                }
            })
        })
        .catch(function(err){
            message.error('Could not update the table...');
        });
    }

    onChange(value) {
        console.log(value);
        if(value){
            fetch('https://ensatserver.herokuapp.com/getndata/' + value)
        .then((response)=> response.json())
        .then((fetcheddata)=>{
            this.setState(()=>{
                return {
                    data: fetcheddata
                }
            })
        })
        .catch(function(err){
            message.error('Could not update the table...');
        });
        }
    }

    
    
    render(){
        return(
            <div>
                <div className="numberOfRows">
                    <span>Number of rows :    </span>
                    <InputNumber min={1} max={500} defaultValue={10} onChange={this.onChange}/>
                </div>
                <div className="dtable">
                <Datatable dataToDisplay = {this.state.data}/>
                </div>
            </div>
        )
    }
}

export default Data;