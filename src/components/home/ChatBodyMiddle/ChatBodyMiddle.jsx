import { useEffect, useRef, useState } from "react";
import ChatBodyMiddleItem from "./ChatBodyMiddleItem";

function ChatBodyMiddle() {
  const [messages] = useState([
    { id: 1, text: "Hello Bro", isSent: false },
    { id: 2, text: "Hello Juga", isSent: true },
    { id: 3, text: "hai", isSent: true },
    { id: 4, text: "iya bro", isSent: false },
    { id: 5, text: "iya bro", isSent: false },
    { id: 6, text: "iya bro", isSent: false },
    { id: 7, text: "iya bro", isSent: false },
    { id: 8, text: "iya bro", isSent: false },
    { id: 9, text: "iya bro", isSent: false },
    { id: 10, text: "iya bro", isSent: false },
    { id: 11, text: "iya bro", isSent: false },
    { id: 12, text: "iya bro", isSent: false },
    { id: 13, text: "iya bro", isSent: false },
    { id: 14, text: "iya bro", isSent: false },
    { id: 15, text: "iya bro", isSent: false },
    { id: 16, text: "iya bro", isSent: false },
    { id: 17, text: "iya bro", isSent: false },
    { id: 18, text: "iya bro", isSent: false },
  ]);

  const chatBodyRef = useRef(null);

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
