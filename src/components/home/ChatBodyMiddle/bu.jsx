import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { asyncReceiveChatDetail } from "../../../states/chatDetail/action";

import LoadingPlaceholder from "../../LoadingPlaceholder";
import ChatBodyMiddleItem from "./ChatBodyMiddleItem";
import checkDone from "../../../assets/img/check.svg";
import check from "../../../assets/img/check2.svg";

function ChatBodyMiddle({ profile }) {
  const messages = useSelector((state) => state.chatDetail);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const selectedChat = searchParams.get("chatId");

  const chatBodyRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading true hanya saat pertama kali memuat data
      await dispatch(asyncReceiveChatDetail(selectedChat));
      setIsLoading(false); // Set loading false setelah data berhasil dimuat
    };

    fetchData();

    // Polling untuk mendapatkan chat terbaru setiap 1 detik (1000 ms),
    // tapi hanya dilakukan setelah data pertama kali dimuat
    const intervalId = setInterval(() => {
      if (!isLoading) {
        // Pastikan polling hanya terjadi setelah loading selesai
        dispatch(asyncReceiveChatDetail(selectedChat));
      }
    }, 10000);

    return () => clearInterval(intervalId); // Hentikan interval saat komponen dibersihkan
  }, [dispatch, selectedChat, isLoading]);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (!isLoading) scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div>
      <div className="chat-body p-3" ref={chatBodyRef}>
        <p className="text-center">{profile?.create}</p>

        {isLoading ? (
          <LoadingPlaceholder />
        ) : // Pastikan messages adalah array dan bukan objek lain
        Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) => (
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
          ))
        ) : (
          <p>No messages available</p> // Jika tidak ada pesan
        )}
      </div>
    </div>
  );
}

ChatBodyMiddle.propTypes = {
  profile: PropTypes.object,
};

export default ChatBodyMiddle;
