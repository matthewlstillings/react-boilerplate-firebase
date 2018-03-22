import {createStore} from 'redux';

const addition = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const subtract = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({count}) => ({
    type: 'SET',
    count
});

//Reducers
//Reducers are pure functions

const countReducer = (state = {count: 0}, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: state.count = 0
            };
        case "SET":
            return {
                count: action.count
            };
        default: 
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});



store.dispatch(addition());

store.dispatch(addition({incrementBy: 5}));

store.dispatch(subtract({decrementBy: 20}));

store.dispatch(set({count:500000}));

store.dispatch(reset());


