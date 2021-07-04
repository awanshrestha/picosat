import React from 'react';

import './about.css';
import { Row, Avatar, Icon } from 'antd';
import Member from './member';

const per1 = require('../../assets/images/about/1.png');
const per2 = require('../../assets/images/about/2.png');
const per3 = require('../../assets/images/about/3.png');
const per4 = require('../../assets/images/about/4.png');
const sirphoto = require('../../assets/images/about/gajendrasir.jpg');

function About() {
    return(
        <div data-testid = 'about-page'>
            <div className="intro">
                <h1>A Brief Intro</h1>
                <p>
                    En Sat is a satellite in size of a can. It started off as our semester project at Kathmandu University. We have used various sensors to monitor real time data of environment variants and display those in our system.
                </p>
                
            </div>
            <br/>
            <h2 className="team-heading">Our Team</h2>
            <br/><br/>
            <div>
                <Row type="flex" justify="center">
                        <span className="supervisor">
                            <Avatar src= {sirphoto} size={80} />
                            <br/> <br/>
                            <h3>Dr. Gajendra Sharma</h3>
                            <h3>Project Supervisor</h3>
                        <div>
                            <a href="https://www.facebook.com/sharmag106" ><Icon type="facebook" theme="filled" style={{ fontSize: 25 }} /></a>
                            &nbsp; &nbsp;
                            <a href="https://www.linkedin.com/in/gajendra-sharma-531a654b/" ><Icon type="linkedin" theme="filled" style={{ fontSize: 25 }} /></a>
                        </div>
                        </span>
                        <Member photo = {per4} naam = "Aashish Adhikari"/>
                        <Member photo = {per1} naam = "Awan Shrestha"/>
                        <Member photo = {per3} naam = "Sabil Shrestha"/>
                        <Member photo = {per2} naam = "Sansrit Paudel"/>
                </Row>
                
            </div>
        </div>
    )
}      

export default About;
