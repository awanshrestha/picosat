import React, {useState} from 'react';
import { Spin, Icon, Alert, Divider, Button, message } from 'antd';
import './settings.css';
//import Autocomplete from './autocomplete'

function Settings(props) {
    let theCityid = props.cityid;
    const [data, setData] = useState(
        {
            fields: {
                city: theCityid
            }
        }
    );

    function changecity() {
        if (data.fields.city !== '') {
            props.changeid(data.fields.city);
        }
        else {
            message.error("Kidding me with that location");
        }
    }

    function handleChange(event) {
        setData(
        {
            fields: {
                city: event.target.value
            }
        }
        )
    }

    const antIcon = <Icon type="setting" theme="filled" className="spinner" style={{ fontSize: 30 }} spin />;
    return (
        <div className="settings-main-div">
            <span className="settings-heading">Settings</span>
                &nbsp;
            <Spin indicator={antIcon} />
            <Alert
                message="You sure?"
                description="You are about to change settings."
                type="warning"
                showIcon
                style={{ width: '300px', position: "fixed", bottom: "20px", right: "30px" }}
            />
            <Divider />
            <h3 className="location-heading">Location</h3>
            <h4 className="settings-h4">
            </h4>
            <span className="settings-h4" style={{ color: "#9b9b9b" }}>Change Location: &nbsp;  </span>

            <form onSubmit={changecity}>
                <label>
                    <input className="city-box" type="number" value={data.fields.city || ''} onChange={handleChange} />
                </label>

            </form>

            <br />
            <Button onClick={changecity}>Change</Button>
            <Divider />
        </div>
    )
}

export default Settings;

