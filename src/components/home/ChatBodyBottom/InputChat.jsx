import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { BsSend } from "react-icons/bs";

function InputChat({ sendChat }) {
  const [message, setMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const [searchParams] = useSearchParams();
  const chatId = searchParams.get("chatId");

  function addChat() {
    if (message.trim()) {
      sendChat({ chatId, message });
      setMessage("");
    }
  }

  const handleInputChange = (event) => {
    const textarea = event.target;
    setMessage(textarea.value);

    setTextareaHeight("auto");
    setTextareaHeight(` ${textarea.scrollHeight}px`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      addChat();
    }
  };

  return (
    <>
      <textarea
        id="chat-input"
        className="form-control textarea-auto"
        placeholder="Tulis Pesan"
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ height: textareaHeight }}
      ></textarea>
      <button
        id="send-btn"
        onClick={addChat}
        className={`btn btn-primary ms-2 ${
          message.trim() === "" ? "d-none" : ""
        }`}
        disabled={message.trim() === ""}
      >
        <BsSend className="bi bi-send" />
      </button>
    </>
  );
}

InputChat.propTypes = {
  sendChat: PropTypes.func,
};

export default InputChat;
