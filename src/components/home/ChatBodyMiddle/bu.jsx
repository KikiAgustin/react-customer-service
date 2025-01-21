import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { asyncReceiveChatDetail } from "../../../states/chatDetail/action";
import ChatBodyMiddleItem from "./ChatBodyMiddleItem";

function ChatBodyMiddle() {
  const message = useSelector((state) => state.chatDetail || null);

  const [messages] = useState([
    { id: 1, text: "Hello Bro", isSent: false },
    { id: 2, text: "Hello Juga", isSent: true },
  ]);

  const [searchParams] = useSearchParams();
  const selectedChat = searchParams.get("chatId");

  console.log(message);

  const chatBodyRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveChatDetail(selectedChat));
  }, [dispatch, selectedChat]);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      <div className="chat-body p-3" ref={chatBodyRef}>
        {messages.map((message) => (
          <ChatBodyMiddleItem
            key={message.id}
            classChat={`d-flex ${
              message.isSent ? "justify-content-end" : ""
            } mb-3`}
            classChatItem={`p-2 ${
              message.isSent ? "bg-primary text-white" : "bg-light"
            } rounded`}
            chat={message.text}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatBodyMiddle;
