import { useState } from "react";
import { BsSend } from "react-icons/bs";

function InputChat() {
  const [message, setMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleInputChange = (event) => {
    const textarea = event.target;
    setMessage(textarea.value);

    setTextareaHeight("auto");
    setTextareaHeight(` ${textarea.scrollHeight}px`);
  };

  return (
    <>
      <textarea
        id="chat-input"
        className="form-control textarea-auto"
        placeholder="Tulis Pesan"
        value={message}
        onChange={handleInputChange}
        style={{ height: textareaHeight }}
      ></textarea>
      <button
        id="send-btn"
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

export default InputChat;
