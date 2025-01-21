import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { asyncReceiveTypeStatus } from "../../../states/typeStatus/action";

function ChatBodyTopNameStatus({ profile }) {
  const [searchParams] = useSearchParams();
  const selectedChat = searchParams.get("chatId");

  const typeStatus = useSelector((state) => state.typeStatus || "Loading...");

  const isKetik = typeStatus;

  const [status, setStatus] = useState("Loading...");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTypeStatus(selectedChat));
  }, [dispatch, selectedChat]);

  useEffect(() => {
    if (isKetik) {
      setStatus(isKetik);
    }
  }, [isKetik]);

  return (
    <div>
      <h6 className="mb-0">{profile?.konsultan}</h6>
      <small className="text-muted">{status}</small>
    </div>
  );
}

ChatBodyTopNameStatus.propTypes = {
  profile: PropTypes.shape({
    konsultan: PropTypes.string,
    create: PropTypes.string,
  }),
};

export default ChatBodyTopNameStatus;
