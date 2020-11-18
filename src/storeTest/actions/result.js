
import * as actionTypes from './actionsTypes';


export const saveResult = (res) => {//action Creators

    const updatedResult = res * 2;
    //here apply transformations! or logic

    return {
        type: actionTypes.STORE_RESULT,
        payload:{
            result: updatedResult
        }
    }
}

export const store_result = (res) => {
    
    return (dispatch, getState) =>  { //redux thunk need to return a function
        setTimeout(() => {//IDEA its to disptach action(synchronous code) creator by asyncronous ones!
            
            const oldCounter = getState().ctr.counter;
            //accdemos al estado anterior por medio de las props ya definidas ,
            console.log(oldCounter); 
            dispatch(saveResult(res));//dispatch every action we want to dispatch
        }, 2000);//simulate fetch API
    }

}

export const delete_result = (id) => {

    return { // we return the action
        type: actionTypes.DELETE_RESULT,
        payload: {
            resultElId: id
        }
    }

}