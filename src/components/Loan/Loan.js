import { useState } from "react";
import "./Loan.css";

const Loan = ({ addLoan }) => {
  
  const initialState = {
    id: 1,
    name: "",
    amount: 0,
    period: 1,
    interestRate: 1,
  };
  const [loan, setLoan] = useState(initialState);

  const addHandler = (e) => {
    e.preventDefault();
    addLoan(loan);
    clearHandler();
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      addHandler(e);
    }
  };
  const clearHandler = () => {
    setLoan(prevState => ({...initialState,id: prevState.id + 1}));
  };

  return (
    <div className="loan__container">
      <form onSubmit={addHandler} className="loan__form">
        <div className="loan__input">
          <label>Loan Name</label>
          <input
            type="text"
            onChange={(e) => setLoan({ ...loan, name: e.target.value })}
            onKeyPress={(e) => keyPressHandler(e)}
            value={loan.name}
            placeholder="Type of loan..."
          />
        </div>
        <div className="loan__input">
          <label>Loan Amount &#8364;</label>
          <input
            type="number"
            onChange={(e) => setLoan({ ...loan, amount: e.target.value })}
            value={loan.amount}
            placeholder="amount..."
            onKeyPress={(e) => keyPressHandler(e)}
            min="1"
          />
        </div>
        <div className="loan__input">
          <label>Loan Period(months)</label>
          <input
            type="number"
            onChange={(e) => setLoan({ ...loan, period: e.target.value })}
            value={loan.period}
            min="1"
            step="1"
            onKeyPress={(e) => keyPressHandler(e)}
            placeholder="months..."
          />
        </div>
        <div className="loan__input">
          <label>Interest Rate %</label>
          <input
            type="number"
            onChange={(e) => setLoan({ ...loan, interestRate: e.target.value })}
            value={loan.interestRate}
            min="1"
            step="0.1"
            placeholder="percentage..."
            onKeyPress={(e) => keyPressHandler(e)}
          />
        </div>
        <div className="loan__buttons">
          <button onClick={clearHandler} className="loan__clearBtn">
            Clear
          </button>
          <button type="submit" className="loan__addBtn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loan;
