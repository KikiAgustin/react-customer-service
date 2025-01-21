import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { asyncReceiveChatDetail } from "../../../states/chatDetail/action";
import ChatBodyMiddleItem from "./ChatBodyMiddleItem";
import checkDone from "../../../assets/img/check.svg";
import check from "../../../assets/img/check2.svg";

function ChatBodyMiddle({ profile }) {
  const messages = useSelector((state) => state.chatDetail);

  const [searchParams] = useSearchParams();
  const selectedChat = searchParams.get("chatId");

  const chatBodyRef = useRef(null);
  const dispatch = useDispatch();

  // Dispatch untuk mendapatkan detail chat
  useEffect(() => {
    dispatch(asyncReceiveChatDetail(selectedChat));
  }, [dispatch, selectedChat]);

  // Scroll otomatis ke bawah
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
        <p className="text-center">{profile?.create}</p>

        {messages.map((message) => (
          <ChatBodyMiddleItem
            key={message.id}
            classChat={`d-flex ${
              message.check == null ? "" : "justify-content-end"
            } mb-3`}
            classChatItem={`p-2 ${
              message.check == null
                ? "bg-light fill-chat"
                : "fill-chat bg-dark text-white"
            } rounded`}
            chat={message.pesan}
            time={message.jam}
            check={
              message.check == null ? (
                ""
              ) : (
                <img src={message.check ? checkDone : check} width={14} />
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

ChatBodyMiddle.propTypes = {
  profile: PropTypes.object,
};

export default ChatBodyMiddle;
