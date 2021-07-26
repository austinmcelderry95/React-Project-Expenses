import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 7, 26);
  
    return (
    <div className="expense-item">
      <div>July 26th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      <div className="expense-item__price">$100.60</div>
    </div>
    </div>
  );
}

export default ExpenseItem;
