import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

const data = {
  datasets: [
    {
      label: "PicoSat Temperature",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 0.5,
      data: []
    },
    {
        label: "API Temperature",
        borderColor: "blue",
        backgroundColor: "rgba(20, 99, 255, 0.5)",
        lineTension: 0.5,
        data: []
      }
  ]
};


class TempChart extends React.Component{
  render() {
    let picotemp = this.props.temperature;
    let apitemp = this.props.owmtemperature;
    const options = {
      tooltips: {
        mode: 'nearest',
        intersect: false
      },
      hover: {
        mode: 'nearest',
        intersect: false
      },
      scales: {
        xAxes: [
          {
            type: "realtime",
            realtime: {
              onRefresh: function () {
                data.datasets[0].data.push({
                  x: Date.now(),
                  y: picotemp
                });
                data.datasets[1].data.push({
                  x: Date.now(),
                  y: apitemp
                });
              },
              delay: 2000
            }
          },


        ]
      }
    };

    return (
      <div>
        <Line data={data} options={options} height={100} />
      </div>
    );
  }
}

export default TempChart