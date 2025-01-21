const ActionType = {
  CHAT_CUSTOMERS: "CHAT_CUSTOMERS",
};

function chatCustomerActionCreator(chatCustomers) {
  return {
    type: ActionType.CHAT_CUSTOMERS,
    payload: chatCustomers,
  };
}

export { ActionType, chatCustomerActionCreator };
