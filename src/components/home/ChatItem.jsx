import PropTypes from "prop-types";

function ChatItem({ image, name, lastChat, time, onClick }) {
  return (
    <div
      className="d-flex align-items-center py-2 border-bottom cht-list"
      onClick={onClick}
    >
      <img src={image} alt={name} className="rounded-circle me-3" width={50} />
      <div className="flex-grow-1">
        <h6 className="mb-0">{name}</h6>
        <small className="text-muted d-block">{lastChat}</small>
      </div>
      <small className="text-muted text-end d-flex flex-column align-items-end">
        <span>{time}</span>
        <i className="bi bi-check text-muted"></i>
      </small>
    </div>
  );
}

ChatItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastChat: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChatItem;
