import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col"> Articles </th>
                    <th scope="col"> Quantité </th>
                    <th scope="col"> Prix unitaire </th>
                    <th scope="col"> Prix total </th>
                    <th scope="col"> Retirer </th>
                </tr>
            </thead>

            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id}
                    name={expense.name} quantity={expense.quantity}
                    unitprice={expense.unitprice} />
                ))

                }
            </tbody>
        </table>
    );
};

export default ExpenseList;
