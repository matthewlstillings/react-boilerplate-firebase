import uuid from 'uuid';
import database from '../firebase/firebase.js';


export const addIncome = (income) => ({
    type: 'ADD_INCOME',
    income
});

export const startAddIncome = (budgetData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/budget`).remove().then(() => {
        const {
            budget = 0
        } = budgetData;
        const income = {budget}
        
            return database.ref(`users/${uid}/budget`).push(income).then((ref) => {
                dispatch(addIncome({
                    id: ref.key,
                    ...income
                }));
            });
        }) 
    }
}



export const setExpenses = (budget) => ({
    type: 'SET_BUDGET',
    budget
}); 

export const startSetBudget = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/budget`).once('value').then((snapshot) => {  //.once() grabs the value of data just one time
            const budget = [];
            snapshot.forEach((childSnapshot)=>{
                budget.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(budget));
        });    
    };
};