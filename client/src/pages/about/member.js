import React from 'react';
import './about.css';
import { Avatar, Col, Popover, Icon  } from 'antd';

function Member(props) {
    const me = {
        fontSize: "20px",
        fontWeight: "500",
        textAlign: "center",
        margin: "20px",
        padding: "20px"
    }
    
    const content = (
        <div>
            <a href="https://www.facebook.com/awanshresthaA1" ><Icon type="facebook" theme="filled" style={{fontSize:25}}/></a>
             &nbsp;
             <a href="https://github.com/awanshrestha" ><Icon type="github" theme="filled" style={{fontSize:25}}/></a>
             &nbsp;
            <a href="https://www.linkedin.com/in/awanshrestha/" ><Icon type="linkedin" theme="filled" style={{fontSize:25}} /></a>               
        </div>
    );
    
    return(
        <div>
            <Col style={me} >
                <Popover content={content} >
                    <Avatar src={props.photo} size={80} />
                </Popover>
                <br /> <br />
                <span>{props.naam}</span>
            </Col>
        </div>
    )
}       


export default Member;