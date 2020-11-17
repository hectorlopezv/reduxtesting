const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    papita: 'doritos',
    counter: 0
}
//Reducer
const rootReducer =(state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        } 
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.payload.value
        } 
    }
    return state;
}


//Store
const store = createStore(rootReducer);

//Subcription -inform component when state its updated and should be fetched
store.subscribe(()=> {// triggers when a action is executed 
    console.log('[Subcription]', store.getState());
});

console.log(store.getState());

//Dispatching Action
store.dispatch({
    type:'INC_COUNTER'
});

store.dispatch({
    type:'ADD_COUNTER',
    payload: {
        value: 10
    }
});


console.log(store.getState());



