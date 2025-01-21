import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function MenuItem({ link, icon: Icon, name }) {
  return (
    <div className="menu-item">
      <Link
        to={link}
        className="text-decoration-none text-black d-flex align-items-center"
      >
        <Icon className="bi bi-person" />
        <span className="ms-2">{name}</span>
      </Link>
    </div>
  );
}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuItem;
