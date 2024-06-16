import React, { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext";

const Spent = () => {
    const {spent, Currency} = useContext(BudgetContext);
    
    return (
        <div className="alert alert-primary">
            <span> Spent so far : {Currency.id}{spent} </span>
        </div>
    );
}

export default Spent;
