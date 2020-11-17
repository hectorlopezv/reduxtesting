const initialState = {
    counter: 0
}

const storeTestReducer = (state=initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter:  state.counter + 1
        }
    }

    if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter - 1
        }
    }


    if(action.type === 'INCREMENT5'){
        return {
            ...state,
            counter: state.counter + 5
        }
    }


    if(action.type === 'DECREMENT5'){
        return {
            ...state,
            counter: state.counter - 5
        }
    }


    return state;
}
 
export default storeTestReducer;