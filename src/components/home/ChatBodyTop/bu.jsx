import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { asyncReceiveTypeStatus } from "../../../states/typeStatus/action";

function ChatBodyTopNameStatus({ profile }) {
  const [searchParams] = useSearchParams();
  const selectedChat = searchParams.get("chatId");

  const typeStatus = useSelector((state) => state.typeStatus);
  const [status, setStatus] = useState("Loading...");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let intervalId;

    if (selectedChat) {
      const fetchData = async () => {
        if (isFirstLoad) setStatus("Loading...");
        try {
          await dispatch(asyncReceiveTypeStatus(selectedChat));
        } catch (error) {
          setStatus("Error loading data");
        } finally {
          setIsFirstLoad(false);
        }
      };

      fetchData();

      intervalId = setInterval(fetchData, 5000);
    }

    return () => clearInterval(intervalId);
  }, [dispatch, selectedChat, isFirstLoad]);

  useEffect(() => {
    if (typeStatus) {
      setStatus(typeStatus);
    }
  }, [typeStatus]);

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
