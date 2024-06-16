import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"


const Budget = () => {
    const {spent, dispatch, Currency} = useContext(BudgetContext);

    const modifyBudget = (val) =>  {
        
        dispatch({
            type: "EDIT_BUDGET",
            payload: val
        });
        
    };

    return (
        <div className="alert alert-secondary">
            Budget : {Currency.id}{
                <input type="number" min={spent} max="20000.0"
                onInput={e => modifyBudget(e.target.value)} />
            }
        </div>
    );
}

export default Budget;
