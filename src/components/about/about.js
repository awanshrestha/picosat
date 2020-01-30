import React from 'react';
import './about.css';
import { Row } from 'antd';
import Member from './member';
const per1 = require('./1.png');
const per2 = require('./2.png');
const per3 = require('./3.png');
const per4 = require('./4.png');

class About extends React.Component{
    render(){
        return(
            <div>
                <div className="intro">
                    <h1>A Brief Intro</h1>
                    <p>
                    EnSat is a satellite in size of a can. It started off as our semester project at Kathmandu University. We have used various sensors to monitor real time data of environment variants and display those in our system.
                    </p>
                    
                </div>
                <br/><br/>
                <h2 className="team-heading">Our Team</h2>
                <br/><br/>
                <div>
                    <Row type="flex" justify="center">
                        <Member photo = {per4} naam = "Aashish Adhikari"/>
                        <Member photo = {per1} naam = "Awan Shrestha"/>
                        <Member photo = {per3} naam = "Sansrit Paudel"/>
                        <Member photo = {per2} naam = "Subarna Chaudhary"/>
                    </Row>
                    
                </div>
            </div>
        )
    }
}

export default About;