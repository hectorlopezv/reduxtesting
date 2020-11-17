import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {
    INCREMENET,
    INCREMENT5, 
    DECREMENT, 
    DECREMENT5, 
    STORE_RESULT, 
    DELETE_RESULT} from '../../storeTest/actionTest';

//HOW TO SUBSCRIBE THE COMPONENT


class Counter extends Component {


    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
                default:
                    break;
        }
    }

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
        onIncrementCounter: () => dispatch({
            type: INCREMENET
        }),

        onDecrementCounter: () => dispatch({
            type: DECREMENT,

        }),

        onIcrementCounter5 : () => dispatch({
            type: INCREMENT5,
            payload: {
                value: 5
            }
        }),

        onDecrementCounter5 : () => dispatch({
            type: DECREMENT5,
            payload: {
                value: 5
            }
        }),

        onStoreResult: (result) => dispatch({
            type: STORE_RESULT,
            payload: {
                result: result
            }
        }),
        
        onDeleteResult: (id) => dispatch({
            type: DELETE_RESULT,
            payload: {
                resultElId: id
            }
        })

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);