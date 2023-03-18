import React from "react";
import "./App.css";
import AddTransation from "./components/AddTransation";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransationList from "./components/TransationList";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransationList />
        <AddTransation />
      </div>
    </GlobalProvider>
  );
};

export default App;
