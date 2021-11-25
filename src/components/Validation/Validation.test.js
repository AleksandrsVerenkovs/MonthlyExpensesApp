import { cleanup } from "@testing-library/react";
import { validLoan } from "./Validation";

afterEach(() => {
  cleanup();
});

test("return empty error obj", () => {
  const loan1 = {
    id: 1,
    name: "Mark",
    amount: 1,
    period: 1,
    interestRate: 1,
  };

  expect(validLoan(loan1)).toEqual({});
});

test("return error obj with name prop", () => {
  const loan1 = { name: "", amount: 1, period: 1, interestRate: 1 };
  const loan2 = { name: "2n", amount: 1, period: 1, interestRate: 1 };
  const loan3 = { name: "  ", amount: 1, period: 1, interestRate: 1 };

  expect(validLoan(loan1)).toEqual({ name: "Provide name." });
  expect(validLoan(loan2)).toEqual({ name: "Provide name." });
  expect(validLoan(loan3)).toEqual({ name: "Provide name." });
});

test("return error obj with inccorect numeric values props", () => {
  const loan1 = { name: "Mark", amount: 0, period: 1, interestRate: 1 };
  const loan2 = { name: "Mark", amount: 22, period: 0, interestRate: 1 };
  const loan3 = { name: "Mark", amount: 22, period: 2, interestRate: 0 };
  const loan4 = { name: "Mark", amount: 0, period: 2, interestRate: 0 };


  expect(validLoan(loan1)).toEqual({ amount: "Please insert loan amount." });
  expect(validLoan(loan2)).toEqual({ period: "Please insert loan period (months)." });
  expect(validLoan(loan3)).toEqual({ interestRate: "Please insert interest rate." });
  expect(validLoan(loan4)).toEqual({ amount: "Please insert loan amount.", interestRate: "Please insert interest rate." });
});


