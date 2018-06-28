import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
    inputFocus: false
  };
  onInputFocus = () => {
    this.setState((prevState) => ({ inputFocus: !prevState.inputFocus }));
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      
        <div className="budget-dashboard__filters">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showDefaultInputIcon= {true}
          />
          <div className="filters__container">
            <input
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
              className="budget-dashboard__text-filter"
              placeholder={this.state.inputFocus ? "" : "Search Expenses"}
              onFocus={this.onInputFocus}
              onBlur={this.onInputFocus}
              
            />
            <div className="budget-dashboard__sort__container">
            <p>Sort:</p>
              <select
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
                className="budget-dashboard__sort"
              >
                <option className="sort-drop" value="date">Date</option>
                <option className="sort-drop" value="amount">Amount</option>
              </select>
            </div>
          </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);