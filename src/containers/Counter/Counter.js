import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


//import actionCreators
import * as actionCreators from '../../storeTest/actions/index';




//HOW TO SUBSCRIBE THE COMPONENT


class Counter extends Component {


  

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIcrementCounter5}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounter5}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((strResult) => {
                        return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    })}
                    
                </ul>

            </div>
        );
    }
}

//actions to dispatch


const mapStateToProps = (state) => { //how state to props
    //when we need acces of the state
    return {//map we return -- access to global state
        ctr: state.ctr.counter, //mapping the state objetcs to the state that are going to be sent o readed
        storedResults: state.res.results
    };
} 

const mapDispatchToProps = dispatch => {//what function to dispatch on actions 
    return {//props of function to be executed on dispatch of actions
        onIncrementCounter: () => dispatch(actionCreators.increment()),

        onDecrementCounter: () => dispatch(actionCreators.decrement()),

        onIcrementCounter5 : () => dispatch(actionCreators.increment5(5)),

        onDecrementCounter5 : () => dispatch(actionCreators.decrement5(5)),

        onStoreResult: (result) => dispatch(actionCreators.store_result(result)),
        
        onDeleteResult: (id) => dispatch(actionCreators.delete_result(id))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);