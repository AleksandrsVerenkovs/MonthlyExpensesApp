import { useState } from "react";
import Loan from "./components/Loan/Loan";
import LoanTable from "./components/LoanTable/LoanTable";
import "./App.css";

function App() {
  const [loans, setLoans] = useState([]);

  const addLoanHandler = (loan) => {
    setLoans([...loans, loan]);
    console.log(loans);
  };

  return (
    <div className="app__container">
      <header>
        <div className="app__title">Loan Calculator</div>
      </header>
      <main>
        <Loan addLoan={addLoanHandler} />
        {loans.length > 1 && (
          <div className="grid__container">
            <p className="grid__items grid__item-1">Name</p>
            <p className="grid__items grid__item-2">Amount</p>
            <p className="grid__items grid__item-3">Period</p>
            <p className="grid__items grid__item-4">Rate</p>
          </div>
        )}
        <LoanTable info={loans} />
      </main>
    </div>
  );
}

export default App;
