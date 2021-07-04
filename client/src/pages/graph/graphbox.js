import React from "react";

import './graphbox.css';
import Picochart1 from './plots/picochart';
import Picochart2 from './plots/picochart2';
import Picochart3 from './plots/picochart3';
import Picochart4 from './plots/picochart4';
import Picochart5 from './plots/picochart5';

function Graphbox(props) {
  return (
    <div>
      <div className="agraph-info">
        <h1>Live Temperature Readings</h1>
        <br />
        <p>Below is the real time plot of temperature from EnSat.</p>
      </div> <br /><br />
      <div style={{ width: "700px", minHeight: "300px", margin: "0 auto" }}>
        <div className="agraph-outer-wrapper">
          <h1>Temperature Plot (°C)</h1>
          <div className="agraph-graph-container">
            <Picochart1 picodata={props.picotemperature} />
          </div>
        </div>
      </div>

      <div style={{height:"50px"}}></div>

      <div className="agraph-info">
        <h1>Live Humidity Readings</h1>
        <br />
        <p>Below is the real time plot of humidity from EnSat.</p>
      </div> <br /><br />
      <div style={{ width: "700px", minHeight: "300px", margin: "0 auto" }}>
        <div className="agraph-outer-wrapper">
          <h1 style={{color: "#7ECFFF"}}>Humidity Plot (%)</h1>
          <div className="agraph-graph-container">
            <Picochart2 picodata={props.picohumidity} />
          </div>
        </div>
      </div>

      <div style={{height:"50px"}}></div>
      
      <div className="agraph-info">
        <h1>Live Atmospheric Pressure Readings</h1>
        <br />
        <p>Below is the real time plot of pressure from EnSat.</p>
      </div> <br /><br />
      <div style={{ width: "700px", minHeight: "300px", margin: "0 auto" }}>
        <div className="agraph-outer-wrapper">
          <h1 style={{color:"#00FF00"}}>Pressure Plot (Pascal)</h1>
          <div className="agraph-graph-container">
            <Picochart3 picodata={props.picopressure} />
          </div>
        </div>
      </div>

      <div style={{height:"50px"}}></div>

      <div className="agraph-info">
        <h1>Live ARQ Data Readings</h1>
        <br />
        <p>Below is the real time plot of gas data from EnSat.</p>
      </div> <br /><br />
      <div style={{ width: "700px", minHeight: "300px", margin: "0 auto" }}>
        <div className="agraph-outer-wrapper">
          <h1 style={{color:"#7ECFFF"}}>ARQ Data Plot</h1>
          <div className="agraph-graph-container">
            <Picochart4 picodata={props.picogas} />
          </div>
        </div>
      </div>

      <div style={{height:"50px"}}></div>


      <div className="agraph-info">
        <h1>Live Pollution Data Readings</h1>
        <br />
        <p>Below is the real time plot of pollution data from EnSat.</p>
      </div> <br /><br />
      <div style={{ width: "700px", minHeight: "300px", margin: "0 auto" }}>
        <div className="agraph-outer-wrapper">
          <h1 >Pollution Data Plot (μg/m³)</h1>
          <div className="agraph-graph-container">
            <Picochart5 picodata={props.picopollution} />
          </div>
        </div>
      </div>

      <div style={{height:"50px"}}></div>

    </div>
  );
} 

export default Graphbox
