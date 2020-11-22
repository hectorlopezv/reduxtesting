import {
    INCREMENT,
    DECREMENT,
    INCREMENT5,
    DECREMENT5} from '../actions/actionsTypes';

const initialState = {
    counter: 0
}

const counterReducer = (state=initialState, action) => {
    //me Prefer multiple if statmenet instead of one Switch Statement
    if(action.type === INCREMENT){
        return {
            ...state,
            counter:  state.counter + 1
        }
    }

    if(action.type === DECREMENT){
        return {
            ...state,
            counter: state.counter - 1
        }
    }


    if(action.type === INCREMENT5){
        return {
            ...state,
            counter: state.counter + action.payload.value
        }
    }


    if(action.type === DECREMENT5){
        return {
            ...state,
            counter: state.counter - action.payload.value
        }
    }

    return state;
}
 
export default counterReducer;