import React from 'react';
import { Spin, Icon, Alert, Divider,Button, message  } from 'antd';
import './settings.css';
//import Autocomplete from './autocomplete'

class Settings extends React.Component{
    constructor(){
        super();
        this.state = {
             fields: {
                 city: 1282950
                }
        }
        this.changecity = this.changecity.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changecity() {
        if(this.state.fields.city){
            this.props.changeid(this.state.fields.city);
        }
        else{
            message.error("Kidding me with that location");
        }
    }

    handleChange(event) {
        this.setState({
            fields:{
                city: event.target.value
            }
        })
    }

    render(){
        const antIcon = <Icon type="setting" theme="filled" className="spinner" style={{fontSize:30}}spin />;
        return(
            <div className="settings-main-div">
                <span className="settings-heading">Settings</span>
                &nbsp; 
                <Spin indicator={antIcon} />
                <Alert
                    message="You sure?"
                    description="You are about to change settings."
                    type="warning"
                    showIcon
                    style={{width: '300px', position: "fixed", bottom: "20px", right:"30px"}}
                />
                <Divider/>
                <h3 className="location-heading">Location</h3>
                <h4 className="settings-h4">
                </h4>
                <span className="settings-h4" style={{color:"#9b9b9b"}}>Change Location: &nbsp;  </span> 
                
                <form onSubmit={this.changecity}>
                    <label>
                        <input className="city-box" type="text" value={this.state.fields.city || ''} onChange={this.handleChange} />
                    </label>

                </form>

                <br/> 
                <Button onClick = {this.changecity}>Change</Button>
                <Divider/>
            </div>
        )
    }
}

export default Settings;
    
