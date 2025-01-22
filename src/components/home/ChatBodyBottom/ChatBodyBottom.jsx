import { useDispatch } from "react-redux";
import ButtonMedia from "./ButtonMedia";
import InputChat from "./InputChat";
import { asyncSendChat } from "../../../states/chatDetail/action";

function ChatBodyBottom() {
  const dispatch = useDispatch();

  const onSendChat = ({ chatId, message }) => {
    dispatch(asyncSendChat({ chatId, message }));
  };

  return (
    <div className="p-3 border-top">
      <div className="d-flex align-items-center">
        <ButtonMedia />
        <InputChat sendChat={onSendChat} />
      </div>
    </div>
  );
}

export default ChatBodyBottom;
