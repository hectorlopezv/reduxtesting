import React, { Component}from 'react';
import './AddPerson.css';

class addPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        });
    }

    ageChangedHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            age: event.target.value
        });
    }

    render() {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="name" onChange={this.nameChangedHandler} value={this.state.name}></input>
                <input type="number" placeholder="age" onChange={this.ageChangedHandler} value={this.state.age}></input>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
}




export default addPerson;