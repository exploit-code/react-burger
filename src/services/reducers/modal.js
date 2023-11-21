import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal";

const initialState = {
  modal: false,
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};
