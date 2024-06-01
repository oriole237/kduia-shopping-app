import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const {expenses, dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        const item = {
            name: name,
            quantity: parseInt(quantity),
        };

        if(action == "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });

        }else{
            dispatch({
                type: 'ADD_QUANTITY',
                payload: item,
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
                            Articles
                        </label>
                    </div>
                    <select className="custom-select"
                    id="inputGroupSelect01"
                    onChange={(event) => setName(event.target.value)}>
                        <option defaultValue> Choisir... </option>
                        {expenses.map((expense) => (
                            <option key={expense.id}
                            value={expense.name}
                            name={expense.name}> {expense.name} </option>
                        ))

                        }
                    </select>

                    <div className="input-group-prepend"
                    style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text"
                        htmlFor="inputGroupSelect02">
                            Quantité
                        </label>
                    </div>
                    <select className="custom-select"
                    id="inputGroupSelect02"
                    onChange={(event) => setAction(event.target.value)}>
                        <option defauktValue value="Add" name="Add">
                            Ajouter
                        </option>
                        <option defauktValue value="Reduce" name="Reduce">
                            Reduire
                        </option>
                    </select>
                    <span className="eco"
                    style={{ marginLeft: '2rem', marginRight: '8px' }}></span>

                    <input required="required"
                    type="number" id="cost"
                    value={quantity}
                    style={{ size: 10 }} 
                    onChange={(e) => setQuantity(e.target.value)} />

                    <button className="btn btn-primary"
                    onClick={submitEvent}
                    style={{ marginLeft: '2rem' }}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </>
    );
};

export default ItemSelected;
