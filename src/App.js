import { useState } from "react";
import Loan from "./components/Loan/Loan";
import LoanTable from "./components/LoanTable/LoanTable";
import MonthsTable from "./components/MonthsTable/MonthsTable";
import "./App.css";

function App() {
  const [loans, setLoans] = useState([]);

  const addLoanHandler = (loan) => {
    setLoans([...loans, loan]);
  };

  return (
    <div className="app__container">
      <header>
        <div className="app__title">Loan Calculator</div>
      </header>
      <main>
        <Loan addLoan={addLoanHandler} />
        {loans.length > 0 && (
          <div className="app__grid-container">
            <p className="app__grid-items app__grid-item-1">Name</p>
            <p className="app__grid-items app__grid-item-2">Amount</p>
            <p className="app__grid-items app__grid-item-3">Period</p>
            <p className="app__grid-items app__grid-item-4">Rate</p>
          </div>
        )}
        <LoanTable info={loans} />
        <MonthsTable tables={loans}/>
      </main>
    </div>
  );
}

export default App;
