import CardReminnder from "./CardReminder";
import SearchChatInput from "./SearchChatInput";
import ButtonChatGroup from "./ButtonChatGroup";
import ChatItem from "./ChatItem";

import profileImage from "../../assets/img/kiki.png";

function ChatList() {
  return (
    <div className="col-4 px-0 border-end">
      <CardReminnder />

      <div className="p-3 border-bottom">
        <h5>Chats</h5>

        <SearchChatInput />
        <ButtonChatGroup />
      </div>
      <div className="chat-list px-3">
        <ChatItem
          image={profileImage}
          name="John Doe"
          lastChat="Last message content"
          time="12:30"
        />
        <ChatItem
          image={profileImage}
          name="Kiki"
          lastChat="Hello"
          time="15:20"
        />
      </div>
    </div>
  );
}

export default ChatList;
