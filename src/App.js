import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import ChangeAllocation from './budget/ChangeAllocation';
import AllocationList from './budget/AllocationList';
import Currency from './budget/Currency';
import Budget from './budget/Budget';
import { BudgetProvider } from './context/BudgetContext';
import Remaining from './budget/Remaining';
import Spent from './budget/Spent';

function App() {
  return (
    <div className="App m-2">
      <BudgetProvider >
        <h1 className="mt-3"> Company's Budget Allocation </h1>

        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>

          <div className="col-sm">
            <Remaining />
          </div>

          <div className="col-sm">
            <Spent />
          </div>

          <div className="col-sm">
            <Currency />
          </div>
        </div>

        <h3 className="mt-3"> Allocation </h3>
        <div className="row">
          <div className="col-sm">
            <AllocationList />
          </div>
        </div>

        
        <h3 className="mt-3"> Change allocation </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ChangeAllocation />
          </div>
        </div>

      </BudgetProvider>
    
    </div>
  );
}

export default App;
