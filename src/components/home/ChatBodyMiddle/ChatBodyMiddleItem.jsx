import PropTypes from "prop-types";

function ChatBodyMiddleItem({
  classChat,
  classChatItem,
  chat,
  style,
  time,
  check,
}) {
  return (
    <div className={classChat} style={style}>
      <div className={classChatItem}>
        <small>{chat}</small>
        <br />
        <span className="time-chat">
          {time} {check}
        </span>
      </div>
    </div>
  );
}

ChatBodyMiddleItem.propTypes = {
  classChat: PropTypes.string,
  classChatItem: PropTypes.string.isRequired,
  chat: PropTypes.string.isRequired,
  style: PropTypes.object,
  time: PropTypes.string,
  check: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default ChatBodyMiddleItem;
