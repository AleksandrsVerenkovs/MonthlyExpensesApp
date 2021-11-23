
export const calculateBaseSum = (loanSum,period) => {
  const result = loanSum/period;
  return Math.round(result * 1e2) / 1e2;
};

export const calculateInterest =(loanSum, interest, period) => {
  const interestRate = (interest/100)/12;
  const result =  (((loanSum * interestRate * Math.pow(1+interestRate,period))/(Math.pow(1+interestRate,period)-1))-calculateBaseSum(loanSum,period));
  return Math.round(result * 1e2) / 1e2;
};
