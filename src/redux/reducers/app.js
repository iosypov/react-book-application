import {HIDE_MESSAGE, SHOW_MESSAGE} from "../constants/app";

const initialState = {
  message: null
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {...state, message: action.payload}
    case HIDE_MESSAGE:
      return {...state, message: null}
    default:
      return state;

  }
}