import api from "../../utils/api";

const ActionType = {
  RECEIVE_CHAT_DETAIL: "RECEIVE_CHAT_DETAIL",
  SEND_CHAT: "SEND_CHAT",
  CLEAR_CHAT_DETAIL: "CLEAR_CHAT_DETAIL",
};

function receiveChatDetailActionCreator(chatDetail) {
  return {
    type: ActionType.RECEIVE_CHAT_DETAIL,
    payload: chatDetail,
  };
}

function sendChatActionCreator(chatDetail) {
  return {
    type: ActionType.SEND_CHAT,
    payload: {
      chatDetail,
    },
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

function asyncSendChat({ chatId, message = "" }) {
  return async (dispatch) => {
    try {
      const chat = await api.sendChatMessage({ chatId, message });

      if (chat && typeof chat === "object" && !Array.isArray(chat)) {
        dispatch(sendChatActionCreator(chat));
      } else {
        console.error("Invalid chat data structure:", chat);
      }
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveChatDetailActionCreator,
  sendChatActionCreator,
  clearChatDetailActionCreator,
  asyncReceiveChatDetail,
  asyncSendChat,
};
