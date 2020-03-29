import {HIDE_MESSAGE, SHOW_MESSAGE} from "../constants/app";

export const showMessage = (message) => (dispatch) => {
  dispatch({
    type: SHOW_MESSAGE,
    payload: message
  })

  setTimeout(() => {
    dispatch({
      type: HIDE_MESSAGE
    })
  }, 3000)
}

