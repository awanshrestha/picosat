import React from 'react';
import { Table } from 'antd';

class Dtable extends React.Component{
    
    render(){
        const dataSource = this.props.dataToDisplay;
        const newdata = dataSource.map( adata=>{
            const miti = new Date(adata.timestamp).toString();
            return {
                "timestamp": miti,
                "temperature": adata.temperature,
                "humidity": adata.humidity,
                "pressure": adata.pressure,
                "altitude": adata.altitude,
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
}

export default Dtable;