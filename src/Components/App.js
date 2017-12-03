/**
 * Created by projo on 2017-12-02.
 */
import React from 'react';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';
import RandomNumber from './RandomNumber';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: Math.round(Math.random()*100)
        }
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }

    sayHey(){
        alert("hey");
    }

    render(){

        let text = "Dev-Server";
        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };
        return  (

            <div>
                <Header title={this.props.headerTitle}/>
                <h1> Hello Velopert </h1>
                <h2> Welcome to {text}</h2>
                <button onClick={this.sayHey}>Click Me</button>
                <p style={pStyle}>{1==1 ? 'True' : 'False'}</p>
                <Content title={this.props.contentTitle} body={this.props.contentBody}/>
                <StateExample/>
                <RandomNumber number={this.state.value}
                              onUpdate={this.updateValue} />
            </div>
        );

    }
}

App.defaultProps = {
    headerTitle: 'default headerTitle',
    contentTitle: 'default contentTitle',
    contentBody: 'default contentBody'
};

export default App;