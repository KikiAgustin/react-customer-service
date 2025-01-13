import PropTypes from "prop-types";

function ChatBodyMiddleItem({ classChat, classChatItem, chat }) {
  return (
    <div className={classChat}>
      <div className={classChatItem}>
        <small>{chat}</small>
      </div>
    </div>
  );
}

ChatBodyMiddleItem.propTypes = {
  classChat: PropTypes.string,
  classChatItem: PropTypes.string.isRequired,
  chat: PropTypes.string.isRequired,
};

export default ChatBodyMiddleItem;
