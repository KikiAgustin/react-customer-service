import api from "../../utils/api";

const ActionType = {
  RECEIVE_CHAT_DETAIL_PROFILE: "RECEIVE_CHAT_DETAIL_PROFILE",
  CLEAR_CHAT_DETAIL_PROFILE: "CLEAR_CHAT_DETAIL_PROFILE",
};

function receiveChatDetailProfileActionCreator(chatDetail) {
  return {
    type: ActionType.RECEIVE_CHAT_DETAIL_PROFILE,
    payload: chatDetail,
  };
}

function clearChatDetailProfileActionCreator() {
  return {
    type: ActionType.CLEAR_CHAT_DETAIL_PROFILE,
  };
}

function asyncReceiveChatDetailProfile(chatId) {
  return async (dispatch) => {
    dispatch(clearChatDetailProfileActionCreator());

    try {
      const chatDetail = await api.getDetailChatProfile(chatId);
      dispatch(receiveChatDetailProfileActionCreator(chatDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveChatDetailProfileActionCreator,
  clearChatDetailProfileActionCreator,
  asyncReceiveChatDetailProfile,
};
