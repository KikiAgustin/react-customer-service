import { ActionType } from "./action";

function chatConsultantsReducer(chatConsultants = [], action = {}) {
  switch (action.type) {
    case ActionType.CHAT_CONSULTANTS:
      return action.payload.chatConsultants;
    default:
      return chatConsultants;
  }
}

export default chatConsultantsReducer;
