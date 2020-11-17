import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

//HOW TO SUBSCRIBE THE COMPONENT


class Counter extends Component {
    state = {
        counter: 0
    }

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
            </div>
        );
    }
}

//actions to dispatch


const mapStateToProps = (state) => { //how state to props
    //when we need acces of the state
    return {//map we return
        ctr: state.counter //mapping the state objetcs to the state that are going to be sent o readed
    };
} 

const mapDispatchToProps = dispatch => {//what function to dispatch on actions 
    return {//props of function to be executed on dispatch of actions
        onIncrementCounter: () => dispatch({
            type: 'INCREMENT'
        }),

        onDecrementCounter: () => dispatch({
            type: 'DECREMENT',

        }),

        onIcrementCounter5 : () => dispatch({
            type: 'INCREMENT5',
            payload: {
                value: 5
            }
        }),

        onDecrementCounter5 : () => dispatch({
            type: 'DECREMENT5',
            payload: {
                value: 5
            }
        })

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);