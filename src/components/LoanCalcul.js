export const calculateBaseSum = (loanSum, period) => {
  const result = loanSum / period;
  return Math.round(result * 1e2) / 1e2;
};

export const calculateInterest = (loanSum, interest, period) => {
  const interestRate = interest / 100 / 12;
  const result =
    (loanSum * interestRate * Math.pow(1 + interestRate, period)) /
      (Math.pow(1 + interestRate, period) - 1) -
    calculateBaseSum(loanSum, period);
  return Math.round(result * 1e2) / 1e2;
};

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const totalTableSum = (arr) => {
  return (
    arr.map((item) => item.baseSum).reduce((a, b) => a + b, 0) +
    arr.map((item) => item.interestSum).reduce((a, b) => a + b, 0)
  ).toFixed(2);
};

export const updateMonthTable = (table) => {
  const tableCopy = [];

  table.forEach((tableItem) => {
    for (let i = 1; i <= tableItem.period; i++) {
      tableCopy[i - 1] = {
        monthNr: i,
        baseSum:
          (tableCopy[i - 1]?.baseSum ?? 0) +
          calculateBaseSum(tableItem.amount, tableItem.period),
        interestSum:
          (tableCopy[i - 1]?.interestSum ?? 0) +
          calculateInterest(
            tableItem.amount,
            tableItem.interestRate,
            tableItem.period
          ),
      };
    }
  });

  return tableCopy;
};

