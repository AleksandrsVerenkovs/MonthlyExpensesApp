import './LoanTable.css';
const LoanTable = ({info}) => {

  return (
    <ul className="loanTable__container">
      {info.map(table => (
        <li className="loanTable__listItem" key={table.id} data-testid={`loanTable-${table.id}`}>
          <p className="loanTable__name">{table.name}</p>
          <p>{table.amount}&#8364;</p>
          <p>{table.period}</p>
          <p>{table.interestRate}%</p>
        </li>
      ))}
    </ul>
  )
}

export default LoanTable
