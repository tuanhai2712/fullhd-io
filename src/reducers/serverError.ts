import { ActionTypes } from '@constants/index';
export default {
  serverError: (state = {}, action) => {
    if (action.type.includes("_FAILURE")) {
      return action.payload
    }
    if (action.type === ActionTypes.CLOSE_TOAST_SERVER_ERROR) {
      return {}
    }
    return state
  }
}
