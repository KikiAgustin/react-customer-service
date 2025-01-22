import PropTypes from "prop-types";

function ChatItem({ image, name, lastChat, onClick, finish }) {
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
        <span
          className={
            finish == 0 ? "badge text-bg-success" : "badge text-bg-secondary"
          }
        >
          {finish == 0 ? "active" : "finish"}
        </span>
      </small>
    </div>
  );
}

ChatItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastChat: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  finish: PropTypes.string.isRequired,
};

export default ChatItem;
