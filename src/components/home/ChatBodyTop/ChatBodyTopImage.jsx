import profileImage from "../../../assets/img/kiki.png";

function ChatBodyTopImage() {
  return (
    <img
      src={profileImage}
      alt="Avatar"
      className="rounded-circle me-3"
      width={50}
    />
  );
}

export default ChatBodyTopImage;
