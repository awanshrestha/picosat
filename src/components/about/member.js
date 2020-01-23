import React from 'react';
import './about.css';
import { Avatar, Col, Popover,Icon  } from 'antd';

class Member extends React.Component{
    render(){
        const me = {
            fontSize: "20px",
            fontWeight: "500",
            textAlign: "center",
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