import api from "../../utils/api";

const ActionType = {
  RECEIVE_CHAT_DETAIL: "RECEIVE_CHAT_DETAIL",
  CLEAR_CHAT_DETAIL: "CLEAR_CHAT_DETAIL",
};

function receiveChatDetailActionCreator(chatDetail) {
  return {
    type: ActionType.RECEIVE_CHAT_DETAIL,
    payload: chatDetail,
  };
}

function clearChatDetailActionCreator() {
  return {
    type: ActionType.CLEAR_CHAT_DETAIL,
  };
}

function asyncReceiveChatDetail(chatId) {
  return async (dispatch) => {
    dispatch(clearChatDetailActionCreator());

    try {
      const chatDetail = await api.getDetailChat(chatId);
      dispatch(receiveChatDetailActionCreator(chatDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveChatDetailActionCreator,
  clearChatDetailActionCreator,
  asyncReceiveChatDetail,
};
