
const validLoanName = (name) => {
  if(!name){
    return true;
  }
  if(name.trim().length < 3){
    return true;
  }
  return false;
};

const validLoanNumericValue = (value) => {
  return value <= 0 ? true : false;
};

export const validLoan = (loan) => {
  let error = {};
  
  if(validLoanName(loan.name)){
    error.name = "Provide name."
  }
  if(validLoanNumericValue(loan.amount)) {
    error.amount = "Please insert loan amount."
  }
  if(validLoanNumericValue(loan.period)) {
    error.period = "Please insert loan period (months)."
  }
  if(validLoanNumericValue(loan.interestRate)) {
    error.interestRate = "Please insert interest rate."
  }

  return error;
};