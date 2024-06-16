import { createContext, useReducer } from "react";

export const BudgetReducer = (state, action) => {
    let new_budget = [];

    switch (action.type) {
        case 'CHG_CURRENCY' :
            state.currencies.map((curren) => {
                if(curren.id === action.payload){
                    state.Currency.name = curren.name;
                }
                return true;
            })
            state.Currency.id = action.payload;
            return {
                ...state
            };

        case 'EDIT_BUDGET':
            state.budget = action.payload;
            return {
                ...state
            };
        
        case 'RED_AMOUNT':
            state.allocations.map((allocation) => {
                if(allocation.name === action.payload.name) {
                    allocation.amount -= action.payload.amount;
                }
                allocation.amount = allocation.amount < 0 ? 0 : allocation.amount;
                new_budget.push(allocation);
                return true;
            });
            state.allocations = new_budget;
            action.type = "DONE";
            return {
                ...state
            };

        case 'ADD_AMOUNT' :
            state.allocations.map((allocation) => {
                if(allocation.name === action.payload.name) {
                    allocation.amount += action.payload.amount;
                }
                new_budget.push(allocation);
                return true;
            });

            state.allocations = new_budget;
            action.type = "DONE";
            return  {
                ...state
            };

        case 'INCREASE' :
            state.allocations.map((allocation) => {
                if(allocation.name === action.payload.name) {
                    allocation.amount += 10;
                }

                new_budget.push(allocation);
                return true;
            })

            state.allocations = new_budget;
            action.type = "DONE";
            return {
                ...state
            };

        case 'DECREASE' :
            state.allocations.map((allocation) => {
                if(allocation.name === action.payload.name) {
                    allocation.amount -= 10;
                }
                allocation.amount = allocation.amount < 0 ?
                                    0 : allocation.amount;
                new_budget.push(allocation);
                return true;
            })

            state.allocations = new_budget;
            action.type = "DONE";
            return {
                ...state
            };

        case 'DELETE_ITEM':
            state.allocations.map((allocation) => {
                if(allocation.name === action.payload.name) {
                    allocation.amount = 0;
                }
               
                new_budget.push(allocation);
                return true;
            });

            state.allocations = new_budget;
            action.type = "DONE";
            return {
                ...state
            };

        default:
            return state;

    }
}

const initialState = {
    allocations : [
        { id: "Marketing", name: "Marketing", amount: 50 },
        { id: "Finance", name: "Finance", amount: 300 },
        { id: "Sales", name: "Sales", amount: 70 },
        { id: "HR", name: "HR", amount: 40 },
        { id: "IT", name: "IT", amount: 500 },
    ],
    Currency: {id:"£", name: "Pound"},
    budget: 0,
    currencies : [
        { id: "£", name: "Pound" },
        { id: "$", name: "Dollar" },
        { id: "€", name: "Euro" },
        { id: "₹", name: "Ruppee" },
    ]
};

export const BudgetContext = createContext();

export const BudgetProvider = (props) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState);
    const totalSpent = state.allocations.reduce((total, item) => {
        return (total += item.amount);
    }, 0);

    state.spent = totalSpent;

    return (
        <BudgetContext.Provider
        value={{ 
            allocations: state.allocations,
            currencies: state.currencies,
            spent: state.spent,
            budget: state.budget,
            dispatch,
            Currency: state.Currency
         }}>
            {props.children}
        </BudgetContext.Provider>
    )
}
