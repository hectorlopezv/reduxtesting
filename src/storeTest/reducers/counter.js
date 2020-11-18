import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    counter: 0
}

const counterReducer = (state=initialState, action) => {
    //me Prefer multiple if statmenet instead of one Switch Statement
    if(action.type === actionTypes.INCREMENET){
        return {
            ...state,
            counter:  state.counter + 1
        }
    }

    if(action.type === actionTypes.DECREMENT){
        return {
            ...state,
            counter: state.counter - 1
        }
    }


    if(action.type === actionTypes.INCREMENT5){
        return {
            ...state,
            counter: state.counter + action.payload.value
        }
    }


    if(action.type === actionTypes.DECREMENT5){
        return {
            ...state,
            counter: state.counter - action.payload.value
        }
    }



    return state;
}
 
export default counterReducer;