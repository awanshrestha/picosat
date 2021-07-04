import React from 'react';
import {Line} from 'react-chartjs-2';

function Pchart(props) {
  let thearray = props.data;
  let timearray = props.graphtime;
  const data = {
      labels: timearray,
      datasets: [
        {
          label: 'Pollution',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgb(255, 99, 132)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255, 99, 132, 0.5)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.5)',
          pointHoverBorderColor: 'rgba(255, 99, 132, 0.5)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: thearray
        }
      ]
    };
  return(
      <div>
          <Line data={data} height = {100}/>
      </div>
  )
}       

export default Pchart;
