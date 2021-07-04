import React from 'react';
import {Line} from 'react-chartjs-2';

function Pchart(props) {
  let thearray = props.data;
  let timearray = props.graphtime;
  const data = {
      labels: timearray,
      datasets: [
        {
          label: 'Gas Data',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
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
