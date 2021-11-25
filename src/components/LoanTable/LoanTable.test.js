import { render, screen, cleanup } from "@testing-library/react";
import LoanTable from "./LoanTable";

afterEach(() => {
  cleanup();
});

test("should render LoanTable component", () => {
  const loanTable = [
    { id: 1, 
      name: "Test loan", 
      amount: 1, 
      period: 1, 
      interestRate: 1 },
  ];
  render(<LoanTable info={loanTable}/>);
  const loanTableElement = screen.getByTestId("loanTable-1");
  expect(loanTableElement).toBeInTheDocument();
  expect(loanTableElement).toHaveTextContent("Test loan");
  expect(loanTableElement).toHaveTextContent("1%");
  expect(loanTableElement).toHaveTextContent("1€");

});
