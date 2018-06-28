import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


export const Expense = ({id, dispatch, description, amount, createdAt}) => (
        <Link to={`/edit/${id}`} className="expense__link">
            <li className="expense">
                <div className="expense__details">
                    <h2 className="expense__amount">-{numeral(amount / 100).format('$ 0,0.00')}</h2>
                    <p className="expense__description">{description}</p>
                </div>
                <p className="expense__date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
            </li>
        </Link>
);



export default Expense; 