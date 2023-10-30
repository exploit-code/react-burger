export const useTotalPrice = (state, action) => {
  switch (action.type) {
    case "calc":
      return state + action.value;
    default:
      return state;
  }
};