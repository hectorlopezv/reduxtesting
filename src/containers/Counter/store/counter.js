
import * as actionTypes from '../../../storeTest/actions/actionsTypes';

//convention for actionCreator
export const increment = (payload) => {

    return { // we return the action
        type: actionTypes.INCREMENET
    }

}

export const decrement = (payload) => {

    return { // we return the action
        type: actionTypes.DECREMENT
    }

}

export const decrement5 = (value) => {

    return { // we return the action
        type: actionTypes.DECREMENT5,
        payload: {
            value: value
        }
    }

}


export const increment5 = (value) => {

    return { // we return the action
        type: actionTypes.INCREMENT5,
        payload: {
            value: value
        }
    }

}
