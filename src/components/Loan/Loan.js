import { useState,useEffect } from "react";
import { validLoan } from "../Validation/Validation";
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from "@mui/material";
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
  const [errorMsg,setErrorMsg] = useState({input: "dummy"});

  const addHandler = (e) => {
    e.preventDefault();
    
    setErrorMsg(validLoan(loan));
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      addHandler(e);
    }
  };
  
  const clearHandler = () => {
    setLoan(prevState => ({...initialState,id: prevState.id + 1}));
  };

  useEffect(() => {
    if(Object.keys(errorMsg).length === 0) {
      addLoan(loan);
      clearHandler();
    }
  },[errorMsg]);

  return (
    <div className="loan__container">
      <form onSubmit={addHandler} className="loan__form">
        <div className="loan__inputContainer">
          <label>Loan Name</label>
          <input
            className="loan__input"
            type="text"
            onChange={ (e) => (setLoan({ ...loan, name: e.target.value }))}
            onKeyPress={(e) => keyPressHandler(e)}
            value={loan.name}
            placeholder="Type of loan..."
          />
          <div className="loan__tooltip">
            <Tooltip title="Lenght min 3 symbols" placement="right-start" arrow>
            <InfoIcon color="action" sx={{fontSize: 16}}/>
            </Tooltip>
          </div>
        </div>
          {errorMsg.name && <p className="loan__errorMsg">{errorMsg.name}</p>}
        <div className="loan__inputContainer">
          <label>Loan Amount &#8364;</label>
          <input
            className="loan__input"
            type="number"
            onChange={(e) => (setLoan({ ...loan, amount: +e.target.value }))}
            value={loan.amount}
            placeholder="amount..."
            onKeyPress={(e) => keyPressHandler(e)}
          />
          <div className="loan__tooltip">
            <Tooltip title="Leading zero will be ignored" placement="right-start" arrow>
            <InfoIcon color="action" sx={{fontSize: 16}}/>
            </Tooltip>
          </div>
        </div>
        {errorMsg.amount && <p className="loan__errorMsg">{errorMsg.amount}</p>}
        <div className="loan__inputContainer">
          <label>Loan Period</label>
          <input
            className="loan__input"
            type="number"
            onChange={(e) => setLoan({ ...loan, period: +e.target.value })}
            value={loan.period}
            min="1"
            step="1"
            onKeyPress={(e) => keyPressHandler(e)}
            placeholder="months..."
          />
          <div className="loan__tooltip">
            <Tooltip title="Months" placement="right-start" arrow>
            <InfoIcon color="action" sx={{fontSize: 16}}/>
            </Tooltip>
          </div>
        </div>
        {errorMsg.period && <p className="loan__errorMsg">{errorMsg.period}</p>}
        <div className="loan__inputContainer">
          <label>Interest Rate %</label>
          <input
            className="loan__input"
            type="number"
            onChange={(e) => setLoan({ ...loan, interestRate: +e.target.value })}
            value={loan.interestRate}
            step="0.1"
            placeholder="percentage..."
            onKeyPress={(e) => keyPressHandler(e)}
          />
        </div>
        {errorMsg.interestRate && <p className="loan__errorMsg">{errorMsg.interestRate}</p>}
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
