import api from "../../utils/api";
import { chatCustomerActionCreator } from "../chatCustomer/action";
import { chatConsultantsActionCreator } from "../chatConsultants/action";

function asyncPopulateChats() {
  return async (dispatch) => {
    try {
      const chatCustomers = await api.getChatCustomer();
      const chatConsultants = await api.getChatConsultan();

      dispatch(chatCustomerActionCreator(chatCustomers));
      dispatch(chatConsultantsActionCreator(chatConsultants));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateChats };
