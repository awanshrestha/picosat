import React from 'react';

class Data extends React.Component{
    constructor(){
        super()
        this.state = {
            name : 'naam xaina'
        }
    }
    
    render(){
        return(
        <h1 style={{textAlign:"center"}}>{this.state.name}</h1>
        )
    }
}

export default Data;