import { useState, useEffect } from "react";
import { calculateInterest, calculateBaseSum } from "../LoanCalcul";
import "./MonthsTable.css";

const MonthsTable = ({ tables }) => {
  const [months, setMonths] = useState([]);

  const loanPeriod = (info) => {
    for (let i = 1; i <= info.period; i++) {
      if (months.filter((month) => month.monthNr === i).length > 0) {
        const copy = [...months];
        copy[i - 1] = {
          monthNr: copy[i - 1].monthNr,
          baseSum:
            copy[i - 1].baseSum + calculateBaseSum(info.amount, info.period),
          interestSum:
            copy[i - 1].interestSum +
            calculateInterest(info.amount, info.interestRate, info.period),
        };
        setMonths(copy);
      } else {
        setMonths((prevState) => [
          ...prevState,
          {
            monthNr: i,
            baseSum: calculateBaseSum(info.amount, info.period),
            interestSum: calculateInterest(
              info.amount,
              info.interestRate,
              info.period
            ),
          },
        ]);
      }
    }
  };

  useEffect(() => {
    const addToList = () => tables.map((table) => loanPeriod(table));
    addToList();
    console.log(months);
  }, [tables]);

  return (
    <div className="month__container">
      <div className="month__header">
        <p>Month Number</p>
        <p>Base Sum</p>
        <p>Interest</p>
      </div>
      {months.map((month) => (
        <div className="month__item" key={month.monthNr}>
          <div className="month__monthNr">{month.monthNr}</div>
          <div className="month__baseSum">{month.baseSum}&#8364;</div>
          <div className="month__interestSum">{month.interestSum}&#8364;</div>
        </div>
      ))}
    </div>
  );
};

export default MonthsTable;
