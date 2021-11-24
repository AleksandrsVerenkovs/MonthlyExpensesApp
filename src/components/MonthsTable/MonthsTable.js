import { useState, useEffect } from "react";
import { calculateInterest, calculateBaseSum } from "../LoanCalcul";
import "./MonthsTable.css";

const MonthsTable = ({ tables }) => {
  const [months, setMonths] = useState([]);

  const calculMonthlySplit = (table) => {
    const tableCopy = [];

    table.forEach(tableItem => {
      for(let i = 1; i <= tableItem.period; i++){
        tableCopy[i-1] = {
          monthNr: i,
          baseSum: (tableCopy[i-1]?.baseSum ?? 0) + calculateBaseSum(tableItem.amount,tableItem.period),
          interestSum: (tableCopy[i-1]?.interestSum ?? 0) + calculateInterest(tableItem.amount,tableItem.interestRate,tableItem.period),
        };
      } 
    });

    setMonths(tableCopy);
    // for (let i = 1; i <= table.period; i++) {
    //   if (months.length > i) {
    //     const copy = [...months];
    //     copy[i - 1] = {
    //       monthNr:      copy[i - 1].monthNr,
    //       baseSum:      copy[i - 1].baseSum + calculateBaseSum(table.amount, table.period),
    //       interestSum:  copy[i - 1].interestSum + calculateInterest(table.amount, table.interestRate, table.period),
    //     };
    //     setMonths(copy);
    //   } else {
    //     setMonths((prevState) => [
    //       ...prevState,
    //       {
    //         monthNr: i,
    //         baseSum: calculateBaseSum(table.amount, table.period),
    //         interestSum: calculateInterest(
    //           table.amount,
    //           table.interestRate,
    //           table.period
    //         ),
    //       },
    //     ]);
    //   }
    // }
  };
  const totalTableSum = (months.map(item => item.baseSum).reduce((a,b) => a+b,0) + months.map(item => item.interestSum).reduce((a,b) => a+b,0)).toFixed(2);

  useEffect(() => {
    // const addToMonthsList = () => tables.map((table) => calculMonthlySplit(table));
    const addToMonthsList = () => calculMonthlySplit(tables);
    addToMonthsList();
  }, [tables]);

  return (
    <div>
      <div className="month__header month__grid">
        <div>Month Number</div>
        <div>Base Sum</div>
        <div>Interest</div>
      </div>
      <div className="month__table">
        {months.map((month) => (
          <div className="month__item month__grid" key={month.monthNr}>
            <div>{month.monthNr}</div>
            <div>{month.baseSum}&#8364;</div>
            <div>{month.interestSum}&#8364;</div>
          </div>
        ))}
        {months.length > 0 &&
        <div className="month__result">
          <p>Total Sum: {totalTableSum}&#8364;</p>
        </div>
        }
      </div>
    </div>
  );
};

export default MonthsTable;
