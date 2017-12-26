/**
 * Created by projo on 2017-12-02.
 */
import React from 'react';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';
import RandomNumber from './RandomNumber';
import update from 'react-addons-update';
import Hello2 from './Hello2';

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
                <Contacts/>
                <Hello/>
                <Hello2 name="이준석"/>
            </div>
        );

    }
}

// DOM에 이름을 달아주자
// callback을 이용해 this.input에 할당하는 방법
// ref를 사용하기 전엔 언제나 이를 사용 하지 않고 해결 할 수 있는 방안이 있는지 고려해보세요 (최대한 안쓰는걸 권장)
class Hello extends React.Component{
    handleClick(){
        this.input.value = "";
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input ref={ref => this.input = ref}/>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        )
    }
}

class Contacts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ],
            selectedKey: -1,
            selected: {
                name: "",
                phone: ""
            }
        };

    }

    // updateContact(){
    //     console.log(this.state);
    //     this.setState({
    //         contactData: update(
    //             this.state.contactData,
    //             {
    //                 $push: [
    //                     {name: "David2", phone: "010-0000-0005"},
    //                     {name: "David3", phone: "010-0000-0006"}
    //                 ]
    //             }
    //         )
    //     });
    // }
    _insertContact(name, phone){
        let newState = update(this.state,{
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }

    _onSelect(key){
        if(key == this.state.selectedKey){
            console.log("key select cancelled");
            this.setState({
                selectedKey: -1,
                selected: {
                    name: "",
                    phone: ""
                }
            });
            return;
        }

        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
        console.log(key + " is selected");
    }

    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }

    _removeContact(){
        if(this.state.selectedKey == -1){
            console.log("contact not selected");
            return;
        }
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        })
    }

    _editContact(name, phone){

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]:{
                        name: {$set: name},
                        phone: {$set: phone}
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact,i) => {
                        return (
                            <ContactInfo name={contact.name}
                                         phone={contact.phone}
                                         key={i}
                                         contactKey={i}
                                         isSelected={this._isSelected.bind(this)(i)}
                                         onSelect={this._onSelect.bind(this)}
                                         />
                        )
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>
                <ContactEditor onEdit={this._editContact.bind(this)}
                    isSelected={this.state.selectedKey != -1}
                    contact={this.state.selected}/>
            </div>
        )
    }
}

class ContactInfo extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }

    shouldComponentUpdate(nextProps, nextState){
        return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    }

    render(){
        console.log("rendered: " + this.props.name);
        let getStyle = isSelect => {
            if(!isSelect) return;
            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            }
            return style;
        };

        return(
            <li style={getStyle(this.props.isSelected)}
                onClick={this.handleClick.bind(this)}>
                {this.props.name} {this.props.phone}
            </li>
        );
    }
}

class ContactCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: ""
        }
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
    }

    render(){
        return(
            <div>
                <p>
                    <input type="text" name="name" placeholder="name" value={this.state.name}
                        onChange={this.handleChange.bind(this)}/>
                    <input type="text" name="phone" placeholder="phone" value={this.state.phone}
                        onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                        Insert
                    </button>
                </p>
            </div>
        );
    }
}

class ContactRemover extends React.Component{
    handleClick(){
        this.props.onRemove();
    }
    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>
                Remove selected contact
            </button>
        )
    }
}

class ContactEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: ""
        }
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        if(!this.props.isSelected){
            console.log("contact not selected");
            return;
        }
        this.props.onEdit(this.state.name, this.state.phone);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phone: nextProps.contact.phone
        })
    }

    render(){
        return(
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="name"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}/>
                    <input type="text"
                           name="phone"
                           placeholder="phone"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                        Edit
                    </button>
                </p>
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