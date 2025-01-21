import api from "../../utils/api";

const ActionType = {
  RECEIVE_TYPE_STATUS: "RECEIVE_TYPE_STATUS",
  CLEAR_TYPE_STATUS: "CLEAR_TYPE_STATUS",
};

function receiveTypeStatusActionCreator(typeStatus) {
  return {
    type: ActionType.RECEIVE_TYPE_STATUS,
    payload: typeStatus,
  };
}

function clearTypeStatusActionCreator() {
  return {
    type: ActionType.CLEAR_TYPE_STATUS,
  };
}

function asyncReceiveTypeStatus(chatId) {
  return async (dispatch) => {
    dispatch(clearTypeStatusActionCreator());

    try {
      const typeStatus = await api.getStatusType(chatId);
      dispatch(receiveTypeStatusActionCreator(typeStatus));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveTypeStatusActionCreator,
  clearTypeStatusActionCreator,
  asyncReceiveTypeStatus,
};
