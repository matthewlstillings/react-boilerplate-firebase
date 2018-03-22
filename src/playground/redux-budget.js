import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add Expense
const addExpense = (
        {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0
        } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
    }
});

//Edit Expense 
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Remove Expense 
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


//Expense Reducer

const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);

        default: 
            return state;
    }
};

//Filters Reducer

//Set Text Filter
const setTextFilter = (text = '') => ({
    type: "FILTER_TEXT",
    text
});

//Sort By Amount
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

//Sort By Date
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

//Start Date
const setStartDate = (startDate = '') => ({
    type: "SET_START_DATE",
    startDate
});

//End Date
const setEndDate = (endDate = '') => ({
    type: "SET_END_DATE",
    endDate
});


const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //by date or amount
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: 'amount'
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: 'date'
            }    
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            } 
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            } 
        default:
            return state;
    }
};


//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());



        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};


//Store Creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    console.log(state);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100000, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Orange', amount: 50000000, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({description: 'Boobs', amount: 133200, createdAt: -300}));
store.dispatch(sortByAmount('amount'));



//const demoState = {
//    expenses: [{
//        id: 'ddwd2',
//        description: 'Rent',
//        note: 'Rent payment',
//        amount: 50000,
//        created: 0
//    }],
//    filters: {
//        text: 'rent',
//        sortBy: 'amount', //by date or amount
//        startDate: undefined,
//        endDate: undefined,
//    } 
//};