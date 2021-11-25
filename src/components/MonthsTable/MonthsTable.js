import { useState, useEffect } from "react";
import { formatNumber,totalTableSum,updateMonthTable } from "../LoanCalcul";
import "./MonthsTable.css";

const MonthsTable = ({ tables }) => {
  const [months, setMonths] = useState([]);

  const calculMonthlySplit = (table) => {
    setMonths(updateMonthTable(table));
  };

  useEffect(() => {
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
            <div>{formatNumber(month.baseSum)}&#8364;</div>
            <div>{formatNumber(month.interestSum)}&#8364;</div>
          </div>
        ))}
        {months.length > 0 && (
          <div className="month__result">
            <p>Total Sum: {formatNumber(totalTableSum(months))}&#8364;</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthsTable;
