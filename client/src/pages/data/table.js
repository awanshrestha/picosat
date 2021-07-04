import React from 'react';
import { Table } from 'antd';

function Dtable(props) {
  const dataSource = props.dataToDisplay;
  const newdata = dataSource.map( adata=>{
      const miti = new Date(adata.timestamp).toString();
      return {
          "timestamp": miti,
          "temperature": adata.temperature,
          "humidity": adata.humidity,
          "pressure": adata.pressure,
          "altitude": adata.altitude,
          "gas": adata.gas,
          "pollution": adata.pollution,
          "_id": adata._id,
      }
  })
  const columns = [
    {
      title: 'Date',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'Temperature (°C)',
      dataIndex: 'temperature',
      key: 'temperature',
    },
    {
      title: 'Humidity (%)',
      dataIndex: 'humidity',
      key: 'humidity',
    },
    {
        title: 'Pressure (Pascal)',
        dataIndex: 'pressure',
        key: 'pressure',
    },
    {
      title: 'Altitude (Meter)',
      dataIndex: 'altitude',
      key: 'altitude',
    },
    {
      title: 'Gas Data',
      dataIndex: 'gas',
      key: 'gas',
    },
    {
      title: 'Pollution (μg/m^3)',
      dataIndex: 'pollution',
      key: 'pollution',
    },
  ]; 
   
  return(
      <div>
           <Table 
              dataSource={newdata} 
              columns={columns} 
              bordered 
              pagination={false} 
              scroll={{ y: 'calc(100vh - 250px)' }}
              rowKey="_id"
          />
      </div>
  )
}     

export default Dtable;
