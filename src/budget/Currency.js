import { useContext, useState } from "react"
import { BudgetContext } from "../context/BudgetContext"


const Currency = () => {
    const {currencies, dispatch, Currency} = useContext(BudgetContext);
    const [selectedCurrency, setSelectedCurr] = useState('('+ Currency.id + ' '+ Currency.name + ')');
    
    const changeCurrency = (val) => {

       let c = currencies.filter((curren) => {
            return curren.id === val;
        });

        console.log(c, "sdsd")

        setSelectedCurr('(' + val + ' '+ c[0].name + ')');
       
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    return (
        <div className="alert alert-primary bg-success text-white">
            Currency  {
                <select name="Currency" id="Currency"
                className="bg-success text-white border-success w-75"
                onChange={e => changeCurrency(e.target.value)}>
                    {currencies.map((curren) => (
                        <option value={curren.id} key={curren.id}
                        selected={curren.id === Currency.id}>
                            {curren.id === Currency.id ? selectedCurrency :
                            curren.id + ' ' + curren.name}
                           
                        </option>
                    ))}
                   
                </select>
            }
        </div>
    );
}

export default Currency;
