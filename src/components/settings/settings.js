import React from 'react';
import { Spin, Icon, Alert, Divider,Button  } from 'antd';
import './settings.css';
import Autocomplete from './autocomplete'

class Settings extends React.Component{
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
                    <span>Current Location: </span>
                    <span>Kathmandu</span>
                </h4>
                <br/>
                <span className="settings-h4" style={{color:"#9b9b9b"}}>Change Location: &nbsp;  </span> 
                <Autocomplete/>
                <br/> <br/>
                <Button>Change</Button>
                <Divider/>
            </div>
        )
    }
}

export default Settings;
    
