/**
 * Created by projo on 2017-12-03.
 */
import React from 'react';

class StateExample extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            header: 'header initial state',
            content: 'content initial state'
        }

    }

    updateHeader(text){
        this.setState({
            header: 'header state changed'
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this.updateHeader.bind(this)}>Update</button>
            </div>
        )
    }
}

export default StateExample;