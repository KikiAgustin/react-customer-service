import { ActionType } from "./action";

function receiveTypeStatusReducer(typeStatus = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TYPE_STATUS:
      return action.payload;
    case ActionType.CLEAR_TYPE_STATUS:
      return null;
    default:
      return typeStatus;
  }
}

export default receiveTypeStatusReducer;
