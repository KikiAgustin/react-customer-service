import MenuItem from "../components/settings/MenuItem";
import { FaUser, FaKey } from "react-icons/fa";
import "../styles/settings.css";

function SettingsPages() {
  return (
    <div className="col profile-section">
      <div className="menu-section">
        <MenuItem icon={FaUser} link="/user" name="Profile" />
        <MenuItem icon={FaKey} link="/changePassword" name="Ganti Password" />
      </div>
    </div>
  );
}

export default SettingsPages;
