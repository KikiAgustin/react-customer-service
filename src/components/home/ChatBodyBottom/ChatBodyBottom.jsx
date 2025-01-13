import ButtonMedia from "./ButtonMedia";
import InputChat from "./InputChat";

function ChatBodyBottom() {
  return (
    <div className="p-3 border-top">
      <div className="d-flex align-items-center">
        <ButtonMedia />
        <InputChat />
      </div>
    </div>
  );
}

export default ChatBodyBottom;
