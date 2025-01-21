import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatList from "../components/home/ChatList";
import ChatBody from "../components/home/ChatBody";
import { asyncPopulateChats } from "../states/shared/action";

import "../styles/style.css";
import "../styles/home.css";

function HomePage() {
  const chatCustomers = useSelector((state) => state.chatCustomers);
  const chatConsultants = useSelector((state) => state.chatConsultants);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateChats());
  }, [dispatch]);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     dispatch(asyncPopulateChats());
  //   }, 2000);

  //   return () => clearTimeout(timeoutId);
  // }, [dispatch, chatCustomers, chatConsultants]);

  return (
    <>
      <ChatList
        chatCustomers={chatCustomers}
        chatConsultants={chatConsultants}
      />
      <ChatBody />
    </>
  );
}

export default HomePage;
