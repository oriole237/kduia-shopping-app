import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

const Remaining = () => {
    const {budget, spent, Currency} = useContext(BudgetContext);

    return (
        <div className="alert alert-success">
            <span>Remaining : {Currency.id}{budget > spent && budget <= 20000 ? budget - spent : 0} </span>
        </div>
    );
}

export default Remaining;
