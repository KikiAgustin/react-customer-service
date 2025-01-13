import ChatBodyTopImage from "./ChatBodyTopImage";
import ChatBodyTopNameStatus from "./ChatBodyTopNameStatus";

function ChatBodyTop() {
  return (
    <div className="p-3 border-bottom d-flex align-items-center">
      <ChatBodyTopImage />
      <ChatBodyTopNameStatus />
    </div>
  );
}

export default ChatBodyTop;
