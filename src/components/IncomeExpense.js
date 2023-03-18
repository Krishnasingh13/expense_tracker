import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transations } = useContext(GlobalContext);

  const amounts = transations.map((transation) => transation.amount);

  const income = amounts
    .filter((e) => e > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = amounts
    .filter((e) => e < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
