import uuid from 'uuid';
import database from '../firebase/firebase.js';

//Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            notes = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = {description, notes, amount, createdAt};
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
               id: ref.key,
               ...expense 
            }));
        });
    };
};


//Edit Expense 
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Start Edit Expense *Start* means for firebase data
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then((ref) => {
            dispatch(editExpense(id, updates));
        });
    };
};

//Remove Expense 
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Start Remove Expense

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
       const uid = getState().auth.uid;
       return database.ref(`users/${uid}/expenses/${id}`).remove().then((ref) => {
           dispatch(removeExpense({ id }));
       });
    };
};

// Set Expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
}); 

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {  //.once() grabs the value of data just one time
            const expenses = [];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });    
    };
};