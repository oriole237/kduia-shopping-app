import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

const AllocationItem = (props) => {
    const {dispatch, Currency} = useContext(BudgetContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item
        });
    };

    const handleIncrease = () => {
        const item = {
            name: props.name
        }

        dispatch({
            type: 'INCREASE',
            payload: item
        });
    }

    const handleDecrease = () => {
        const item = {
            name: props.name
        };

        dispatch({
            type: 'DECREASE',
            payload: item
        });
    }

    return (
        <tr>
            <td> {props.name} </td>
            <td> {Currency.id}{props.amount} </td>
            <td style={{ textAlign: 'right' }}>
                <FaPlusCircle size="2.2em"
                color="green"
                onClick={handleIncrease}></FaPlusCircle>
            </td>
            <td style={{ textAlign: 'right' }}>
                <FaMinusCircle size="2.2em"
                color="red"
                onClick={handleDecrease}></FaMinusCircle>
            </td>
            <td style={{ textAlign: 'right' }}>
                <FaTimesCircle size="1.2em"
                color="black"
                onClick={handleDeleteItem}></FaTimesCircle>
            </td>
        </tr>
    );
};

export default AllocationItem;