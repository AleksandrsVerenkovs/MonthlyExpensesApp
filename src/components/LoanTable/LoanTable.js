import './LoanTable.css';
const LoanTable = ({info}) => {

  return (
    <ul className="loanTable__container">
      {info.map(table => (
        <li className="loanTable__listItem" key={table.id}>
          <p className="loanTable__name">{table.name}</p>
          <p>{table.amount}</p>
          <p>{table.period}</p>
          <p>{`${table.interestRate}%`}</p>
        </li>
      ))}
    </ul>
  )
}

export default LoanTable
