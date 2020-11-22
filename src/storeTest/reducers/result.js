import {
    STORE_RESULT,
    DELETE_RESULT} from '../actions/actionsTypes';

const initialState = {
    results: []
}
//this reducer has only has acces to the defined state in here
const resultReducer = (state=initialState, action) => {
    //me Prefer multiple if statmenet instead of one Switch Statement
    console.log(action);
    console.log(state);
    if(action.type === STORE_RESULT){
        //Change data if you want
        return {
            ...state,
            results: state.results.concat({value:action.payload.result, id: new Date()})
        }
    }

    if(action.type === DELETE_RESULT){
        //COPY OF ARRRAY - if objects are items if not deep copy
        // if we plan to remove item its ok because we dont modify
        //the inner items of the objects
        //const newArray = [...state.results];
        //newArray.splice(id, 1);

        const updatedArray = state.results.filter((strResult) => {
            return action.payload.resultElId !== strResult.id           

        })

        return {
            ...state,
            results: updatedArray
        }
    }


    return state;
}
 
export default resultReducer;