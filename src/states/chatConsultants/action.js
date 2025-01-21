const ActionType = {
  CHAT_CONSULTANTS: "CHAT_CONSULTANTS",
};

function chatConsultantsActionCreator(chatConsultants) {
  return {
    type: ActionType.CHAT_CONSULTANTS,
    payload: {
      chatConsultants,
    },
  };
}

export { ActionType, chatConsultantsActionCreator };
