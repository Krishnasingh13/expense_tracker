import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transations: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransation(id) {
    dispatch({
      type: "DELETE_TRANSATION",
      payload: id,
    });
  }

  function addTransation(transation) {
    dispatch({
      type: "ADD_TRANSATION",
      payload: transation,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transations: state.transations,
        deleteTransation,
        addTransation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
