//Set Text Filter
export const setTextFilter = (text = '') => ({
    type: "FILTER_TEXT",
    text
});

//Sort By Amount
export const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

//Sort By Date
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

//Start Date
export const setStartDate = (startDate = '') => ({
    type: "SET_START_DATE",
    startDate
});

//End Date
export const setEndDate = (endDate = '') => ({
    type: "SET_END_DATE",
    endDate
});