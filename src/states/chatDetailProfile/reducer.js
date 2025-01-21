import { ActionType } from "./action";

function receiveChatDetailProfileReducer(chatDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CHAT_DETAIL_PROFILE:
      return action.payload;
    case ActionType.CLEAR_CHAT_DETAIL_PROFILE:
      return null;
    default:
      return chatDetail;
  }
}

export default receiveChatDetailProfileReducer;
