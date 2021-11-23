import { useState, useEffect } from "react";
import { calculateInterest, calculateBaseSum } from "../LoanCalcul";
import "./MonthsTable.css";

const MonthsTable = ({ tables }) => {
  const [months, setMonths] = useState([]);

  const calculMonthlySplit = (table) => {
    for (let i = 1; i <= table.period; i++) {
      if (months.length > i) {
        const copy = [...months];
        copy[i - 1] = {
          monthNr:      copy[i - 1].monthNr,
          baseSum:      copy[i - 1].baseSum + calculateBaseSum(table.amount, table.period),
          interestSum:  copy[i - 1].interestSum + calculateInterest(table.amount, table.interestRate, table.period),
        };
        setMonths(copy);
      } else {
        setMonths((prevState) => [
          ...prevState,
          {
            monthNr: i,
            baseSum: calculateBaseSum(table.amount, table.period),
            interestSum: calculateInterest(
              table.amount,
              table.interestRate,
              table.period
            ),
          },
        ]);
      }
    }
  };

  useEffect(() => {
    const addToMonthsList = () => tables.map((table) => calculMonthlySplit(table));

    addToMonthsList();
    console.log(months);
  }, [tables]);

  return (
    <div>
      <div className="month__header month__grid">
        <p>Month Number</p>
        <p>Base Sum</p>
        <p>Interest</p>
      </div>
      <div className="month__container">
        {months.map((month) => (
          <div className="month__item month__grid" key={month.monthNr}>
            <div className="month__monthNr">{month.monthNr}</div>
            <div className="month__baseSum">{month.baseSum}&#8364;</div>
            <div className="month__interestSum">{month.interestSum}&#8364;</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthsTable;
