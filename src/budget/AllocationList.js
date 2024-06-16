import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import AllocationItem from './AllocationItem';


const AllocationList = () => {
    const { allocations } = useContext(BudgetContext);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"> Department </th>
                    <th scope="col"> Allocated Budget </th>
                    <th scope="col" style={{ textAlign: 'right' }}> Increase by 10 </th>
                    <th scope="col" style={{ textAlign: 'right' }}> Decrease by 10 </th>
                    <th scope="col"> </th>
                </tr>
            </thead>

            <tbody>
                {allocations.map((allocation) => (
                    <AllocationItem id={allocation.id} key={allocation.id}
                    name={allocation.name} amount={allocation.amount} />
                )) }
            </tbody>
           
        </table>
    );
}

export default AllocationList;
