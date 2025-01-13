import ChatBodyTop from "./ChatBodyTop/ChatBodyTop";
import ChatBodyMiddle from "./ChatBodyMiddle/ChatBodyMiddle";
import ChatBodyBottom from "./ChatBodyBottom/ChatBodyBottom";

function ChatBody() {
  return (
    <div className="col">
      <ChatBodyTop />
      <ChatBodyMiddle />
      <ChatBodyBottom />
    </div>
  );
}

export default ChatBody;
