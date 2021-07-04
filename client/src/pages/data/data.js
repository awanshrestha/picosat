import React, { useState, useEffect } from 'react';
import './data.css';
import { InputNumber, message } from 'antd';
import Datatable from './table';

function Data() {
    const [data, setData] = useState([]);
    const [dataToShow, setDataToShow] = useState(10);

    useEffect(() => {
        fetch('https://ensatserver.herokuapp.com/getndata/' + dataToShow)
        .then((response)=> response.json())
        .then(setData)
        .catch(function(err){
            message.error('Could not update the table...');
        });
    }, [dataToShow]);

    function onChange(value) {
        setDataToShow(value)
    }

    return(
        <div data-testid = 'data-page'>
            <div className="numberOfRows">
                <span>Number of rows :    </span>
                <InputNumber min={1} max={500} defaultValue={10} onChange={onChange}/>
            </div>
            <div className="dtable">
            <Datatable dataToDisplay = {data}/>
            </div>
        </div>
    )
}

export default Data;