import PropTypes from "prop-types";
import noImage from "../../../assets/img/no_pic.jpg";

function ChatBodyTopImage({ profile }) {
  const avatarSrc = profile?.avatar || noImage;

  return (
    <img
      src={avatarSrc}
      alt={profile?.konsultan || "Avatar"}
      className="rounded-circle me-3"
      width={50}
    />
  );
}

ChatBodyTopImage.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    konsultan: PropTypes.string,
    create: PropTypes.string,
  }),
};

export default ChatBodyTopImage;
