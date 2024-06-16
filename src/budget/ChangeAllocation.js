import React, { useContext, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";

const ChangeAllocation = (props) => {
    const {allocations, dispatch, Currency} = useContext(BudgetContext);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        const item = {
            name: name,
            amount: parseFloat(amount)
        };

        if(action === "Reduce") {
            dispatch({
                type: "RED_AMOUNT",
                payload: item
            });

        }else {
            dispatch({
                type: 'ADD_AMOUNT',
                payload: item
            });
        }
    };

    return (
        <>
            <div className="row">
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text"
                        htmlFor="inputGroupSelect01">
                            Departments
                        </label>
                    </div>
                    <select className="custom-select"
                    id="inputGroupSelect01"
                    onChange={(event) => setName(event.target.value)}>
                        <option defaultValue> Choisir... </option>
                        {allocations.map((allocation) => (
                            <option key={allocation.id}
                            value={allocation.name}
                            name={allocation.name}>
                                {allocation.name}
                            </option>
                        ))

                        }
                    </select>

                    <div className="input-group-prepend"
                    style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text"
                        htmlFor="inputGroupSelect02">
                            Allocation
                        </label>
                    </div>
                    <select className="custom-select"
                    id="inputGroupSelect02"
                    onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">
                            Add
                        </option>
                        <option defaultValue value="Reduce" name="Reduce">
                            Reduce
                        </option>
                    </select>
                    <span className="eco"
                    style={{ marginLeft: '2rem', marginRight: '8px' }}></span>
                    
                    <span className="pt-1" style={{ marginRight: "3px" }}>{Currency.id}</span>
                    <input required="required"
                    type="number" id="cost"
                    value={amount}
                    min="0.0"
                    style={{ size: 10 }} 
                    onChange={(e) => setAmount(e.target.value)} />

                    <button className="btn btn-primary"
                    onClick={submitEvent}
                    style={{ marginLeft: '2rem' }}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChangeAllocation;
