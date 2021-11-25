import { cleanup } from "@testing-library/react";
import {
  calculateBaseSum,
  calculateInterest,
  formatNumber,
  totalTableSum,
  updateMonthTable,
} from "./LoanCalcul";

afterEach(() => {
  cleanup();
});

test("return monthly base sum", () => {
  const loanItem1 = { loanSum: 200, period: 2 };
  const loanItem2 = { loanSum: 222, period: 4 };
  const loanItem3 = { loanSum: 223, period: 6 };

  expect(calculateBaseSum(loanItem1.loanSum, loanItem1.period)).toEqual(100);
  expect(calculateBaseSum(loanItem2.loanSum, loanItem2.period)).toEqual(55.5);
  expect(calculateBaseSum(loanItem3.loanSum, loanItem3.period)).toEqual(37.17);
});

test("return monthly interest rate", () => {
  const loanItem1 = { loanSum: 200, interestRate: 2, period: 2 };
  const loanItem2 = { loanSum: 222, interestRate: 4, period: 4 };
  const loanItem3 = { loanSum: 223, interestRate: 1, period: 6 };

  expect(
    calculateInterest(
      loanItem1.loanSum,
      loanItem1.interestRate,
      loanItem1.period
    )
  ).toEqual(0.25);
  expect(
    calculateInterest(
      loanItem2.loanSum,
      loanItem2.interestRate,
      loanItem2.period
    )
  ).toEqual(0.46);
  expect(
    calculateInterest(
      loanItem3.loanSum,
      loanItem3.interestRate,
      loanItem3.period
    )
  ).toEqual(0.11);
});

test("return formated number as string", () => {
  const num1 = "300";
  const num2 = "20000";
  const num3 = "7006.78";

  expect(formatNumber(num1)).toEqual("300");
  expect(formatNumber(num2)).toEqual("20 000");
  expect(formatNumber(num3)).toEqual("7 006.78");
});

test("return loan total sum", () => {
  const arr1 = [
    { baseSum: 10, interestSum: 5 },
    { baseSum: 15, interestSum: 2.5 },
  ];
  const arr2 = [
    { baseSum: 10, interestSum: 5.03 },
    { baseSum: 15, interestSum: 2.55 },
    { baseSum: 0.1, interestSum: 1 },
  ];

  expect(totalTableSum(arr1)).toEqual("32.50");
  expect(totalTableSum(arr2)).toEqual("33.68");
});

test("return array with loan payment counts", () => {
  const loanList = [
    {
      id: 1,
      name: "Car Loan",
      amount: 20,
      period: 1,
      interestRate: 5,
    },
    {
      id: 2,
      name: "House Loan",
      amount: 400,
      period: 3,
      interestRate: 10,
    },
  ];

  expect(updateMonthTable(loanList)).toEqual([
    { monthNr: 1, baseSum: 153.33, interestSum: 2.31 },
    { monthNr: 2, baseSum: 133.33, interestSum: 2.23 },
    { monthNr: 3, baseSum: 133.33, interestSum: 2.23 },
  ]);
});
