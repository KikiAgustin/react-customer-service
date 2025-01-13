import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function MenuItem({ icon: Icon, link, title }) {
  return (
    <OverlayTrigger placement="right" overlay={<Tooltip>{title}</Tooltip>}>
      <div className="nav-item">
        <Link to={link} className="text-decoration-none text-black">
          <Icon className="fs-3" />
        </Link>
      </div>
    </OverlayTrigger>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
