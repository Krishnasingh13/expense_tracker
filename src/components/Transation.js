import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transation = ({ transation }) => {
  const sign = transation.amount < 0 ? "-" : "+";

  const { deleteTransation } = useContext(GlobalContext);

  return (
    <li className={transation.amount < 0 ? "minus" : "plus"}>
      {transation.text}
      <span>
        {sign}₹{Math.abs(transation.amount)}
      </span>
      <button
        onClick={() => deleteTransation(transation.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transation;
