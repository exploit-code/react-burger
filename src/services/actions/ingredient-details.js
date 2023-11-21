export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENT = "CLEAR_CURRENT_INGREDIENT";

export const setCurrentIngredient = (ingredient) => (dispatch) => dispatch({ type: SET_CURRENT_INGREDIENT, payload: ingredient });
export const clearCurrentIngredient = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_INGREDIENT });
