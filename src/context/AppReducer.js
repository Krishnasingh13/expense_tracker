export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSATION":
      return {
        ...state,
        transations: state.transations.filter((transation) => {
          if (transation.id !== action.payload) {
            return transation;
          }
        }),
      };
    case "ADD_TRANSATION":
      return {
        ...state,
        transations: [action.payload, ...state.transations],
      };
    default:
      return state;
  }
};
