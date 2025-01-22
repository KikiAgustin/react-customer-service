import { ActionType } from "./action";

function receiveChatDetailReducer(chatDetail = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CHAT_DETAIL:
      return action.payload || [];
    case ActionType.SEND_CHAT:
      return [action.payload, ...chatDetail];
    case ActionType.CLEAR_CHAT_DETAIL:
      return [];
    default:
      return chatDetail;
  }
}

export default receiveChatDetailReducer;
