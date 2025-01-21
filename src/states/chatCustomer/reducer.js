import { ActionType } from "./action";

function chatCustomersReducer(chatCustomers = [], action = {}) {
  switch (action.type) {
    case ActionType.CHAT_CUSTOMERS:
      return action.payload;
    default:
      return chatCustomers;
  }
}

export default chatCustomersReducer;
