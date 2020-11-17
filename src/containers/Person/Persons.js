import React, { Component } from 'react';

import Person from '../../components/Person/Person';
import AddPerson from '../../components/AddPerson/AddPerson';


//import actions
import {ADDPERSON, DELETEPERSON} from '../../Assigment/reducers/actions/actionAssign';

//redux import 
import {connect} from 'react-redux';

class Persons extends Component {

    

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onIncrementCounter} />
                {this.props.storedResults.map(person => (
                    
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={(event, id=person.id) => {this.props.onDeleteResult(id)}}/>
                ))}
            </div>
        );
    }
}


const mapStateToProps = (state) => { //how state to props
    //when we need acces of the state
    return {//map we return -- access to global state
        storedResults: state.str.results
    };
} 

const mapDispatchToProps = dispatch => {//what function to dispatch on actions 
    return {//props of function to be executed on dispatch of actions
        onIncrementCounter: (name, age) => dispatch({
            type: ADDPERSON, name: name, age: age
        }),

       onDeleteResult: (id) => dispatch({
            type: DELETEPERSON,
            payload: {
                resId: id
            }
        })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Persons);