import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ChatBodyHome from "./ChatBodyHome";
import ChatBodyTop from "./ChatBodyTop/ChatBodyTop";
import ChatBodyMiddle from "./ChatBodyMiddle/ChatBodyMiddle";
import ChatBodyBottom from "./ChatBodyBottom/ChatBodyBottom";
import { asyncReceiveChatDetail } from "../../states/chatDetail/action";
import { asyncReceiveChatDetailProfile } from "../../states/chatDetailProfile/action";

function ChatBody() {
  const [searchParams] = useSearchParams();
  const selectedChat = searchParams.get("chatId");

  const message = useSelector((state) => state.chatDetail || null);
  const chatDetailProfile = useSelector(
    (state) => state.chatDetailProfile || null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveChatDetailProfile(selectedChat));
    dispatch(asyncReceiveChatDetail(selectedChat));
  }, [selectedChat, dispatch]);

  return selectedChat ? (
    <div className="col">
      <ChatBodyTop profile={chatDetailProfile} />
      <ChatBodyMiddle message={message} profile={chatDetailProfile} />
      <ChatBodyBottom />
    </div>
  ) : (
    <ChatBodyHome />
  );
}

export default ChatBody;
