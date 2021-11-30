import { ActionTypes } from '@constants/index';

export default {
  requestSuccess: (state = "", action) => {
    if (action.type.includes("_SUCCESS")) {
      return action.type
    }
    if (action.type === ActionTypes.CLOSE_ALERT_REQUEST_SUCCESS) {
      return ""
    }
    return state
  }
}
