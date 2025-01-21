import PropTypes from "prop-types";
import ChatBodyTopImage from "./ChatBodyTopImage";
import ChatBodyTopNameStatus from "./ChatBodyTopNameStatus";

function ChatBodyTop({ profile }) {
  return (
    <div className="p-3 border-bottom d-flex align-items-center">
      <ChatBodyTopImage profile={profile} />
      <ChatBodyTopNameStatus profile={profile} />
    </div>
  );
}

ChatBodyTop.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    konsultan: PropTypes.string,
    create: PropTypes.string,
  }),
};
export default ChatBodyTop;
