import React from 'react';
import {Link} from 'react-router-dom';




export const Expense = ({id, dispatch, description, amount, createdAt}) => (
        <li>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{amount}</p>
            <p>{createdAt}</p>
        </li>
);



export default Expense; //Maybe Fix this later?