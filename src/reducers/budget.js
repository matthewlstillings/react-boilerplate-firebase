

const budgetReducerDefaultState = [];
export default (state = budgetReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return [
                ...state,
                action.income
            ]
        case 'SET_BUDGET':
            return action.budget;
        default:
            return state; 
    }
};

 