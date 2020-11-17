
const initialState ={
    results: []
}
const storeReducerAsign = (state = initialState, action) => {
    if(action.type === 'ADDPERSON'){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }

        return {
            results: [...state.results].concat(newPerson)
        }
    }

    if(action.type === 'DELETEPERSON'){
        console.log('delete person')
        console.log(action.payload.resId);
        return {
            results: [...state.results].filter((person) => {
                return person.id !== action.payload.resId
            })
        }
    }

    return state;
}
 
export default storeReducerAsign;