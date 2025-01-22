import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import CardReminder from "./CardReminder";
import SearchChatInput from "./SearchChatInput";
import ButtonChatGroup from "./ButtonChatGroup";
import ChatItem from "./ChatItem";

function ChatList({ chatCustomers, chatConsultants }) {
  const [activeChats, setActiveChats] = useState(chatCustomers || []);
  const [activeGroup, setActiveGroup] = useState("customers");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (activeGroup === "customers") {
      setActiveChats(chatCustomers);
    } else if (activeGroup === "consultants") {
      setActiveChats(chatConsultants);
    }
  }, [activeGroup, chatCustomers, chatConsultants]);

  const handleShowCustomers = () => {
    setActiveChats(chatCustomers);
    setActiveGroup("customers");
  };

  const handleShowConsultants = () => {
    setActiveChats(chatConsultants);
    setActiveGroup("consultants");
  };

  const onChatClick = (chatId) => {
    setSearchParams({ chatId });
  };

  return (
    <div className="col-4 px-0 border-end">
      <CardReminder />

      <div className="p-3 border-bottom">
        <h5>Chats</h5>
        <SearchChatInput />
        <ButtonChatGroup
          onShowCustomers={handleShowCustomers}
          onShowConsultants={handleShowConsultants}
          activeGroup={activeGroup}
        />
      </div>

      <div className="chat-list px-3">
        {activeChats && activeChats.length > 0 ? (
          activeChats.map((chat) => (
            <ChatItem
              key={chat.id}
              image={chat.avatar}
              name={chat.nama}
              lastChat={chat.tanggal}
              onClick={() => onChatClick(chat.chat_id)}
              finish={chat.finish}
            />
          ))
        ) : (
          <p>No chats available</p>
        )}
      </div>
    </div>
  );
}

ChatList.propTypes = {
  chatCustomers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      chat_id: PropTypes.string,
      userid: PropTypes.string,
      useridcon: PropTypes.string,
      finish: PropTypes.string,
      no: PropTypes.number,
      notread: PropTypes.string,
      nama: PropTypes.string.isRequired,
      namacon: PropTypes.string,
      diff: PropTypes.number,
      sec: PropTypes.string,
      avatar: PropTypes.string.isRequired,
      foto: PropTypes.string,
      tanggal: PropTypes.string.isRequired,
    })
  ).isRequired,
  chatConsultants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      chat_id: PropTypes.string,
      userid: PropTypes.string,
      useridcon: PropTypes.string,
      finish: PropTypes.string,
      no: PropTypes.number,
      notread: PropTypes.string,
      nama: PropTypes.string.isRequired,
      namacon: PropTypes.string,
      diff: PropTypes.number,
      sec: PropTypes.string,
      avatar: PropTypes.string.isRequired,
      foto: PropTypes.string,
      tanggal: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatList;
