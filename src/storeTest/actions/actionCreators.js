
import {
    INCREMENT,
    DECREMENT,
    INCREMENT5,
    DECREMENT5,
    STORE_RESULT,
    DELETE_RESULT} from './actionsTypes';


export const increment = () =>{
    return {
        type: INCREMENT
    }
}

export const decrement = () =>{
    return {
        type: DECREMENT
    }
}

export const decrement5 = (value) =>{
    return {
        type: DECREMENT5, 
        payload: {
            value: value
        }
    }
}



export const increment5 = (value) =>{
    return {
        type: INCREMENT5,
        payload: {
            value: value
        }
    }
}

export const saveResult = (res) => {
        return {
        type: STORE_RESULT, 
        payload: {
            result: res
        }
    }
}

export const store_result = (result) => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            dispatch(saveResult(result));
        }, 2000);
    }
}

export const delete_result = (id) => {
    return {
        type: DELETE_RESULT, 
        payload: {
            resultElId: id
        }
        
    }
}