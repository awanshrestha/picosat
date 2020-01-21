import React from 'react';
import './about.css';
import { Avatar, Col, Popover  } from 'antd';

class Member extends React.Component{
    render(){
        const me = {
            fontSize: "20px",
            fontWeight: "500",
            textAlign: "center",
        }
        
        const content = (
            <div>
                a
            </div>
        );
        
        return(
            <div>
                <Col span={5} style={me} >
                    <Popover content={content} >
                        <Avatar src={this.props.photo} size={80} />
                    </Popover>
                    <br /> <br />
                    <span>{this.props.naam}</span>
                </Col>
            </div>
        )
    }
}

export default Member;