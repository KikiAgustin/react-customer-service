import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import chatCustomersReducer from "./chatCustomer/reducer";
import chatConsultantsReducer from "./chatConsultants/reducer";
import receiveChatDetailReducer from "./chatDetail/reducer";
import receiveChatDetailProfileReducer from "./chatDetailProfile/reducer";
import receiveTypeStatusReducer from "./typeStatus/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    chatCustomers: chatCustomersReducer,
    chatConsultants: chatConsultantsReducer,
    chatDetail: receiveChatDetailReducer,
    chatDetailProfile: receiveChatDetailProfileReducer,
    typeStatus: receiveTypeStatusReducer,
  },
});

export default store;
