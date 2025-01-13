import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import { FaRegCommentDots, FaCog, FaUser, FaSignOutAlt } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function SidebarMenu({ signOut }) {
  return (
    <div className="col-auto sidebar d-flex flex-column align-items-center py-3">
      <MenuItem icon={FaRegCommentDots} link="/" title="Chat" />
      <MenuItem icon={FaCog} link="/settings" title="Settings" />
      <MenuItem icon={FaUser} link="/user" title="Profile" />
      <OverlayTrigger placement="right" overlay={<Tooltip>Logout</Tooltip>}>
        <div className="nav-item text-black" onClick={signOut}>
          <FaSignOutAlt className="fs-3" />
        </div>
      </OverlayTrigger>
    </div>
  );
}

SidebarMenu.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default SidebarMenu;
