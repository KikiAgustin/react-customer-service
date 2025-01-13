import { useSelector } from "react-redux";
import "../styles/profile.css";

function ProfilePages() {
  const authUser = useSelector((state) => state.authUser || null);

  return (
    <div className="col profile-section">
      <div className="container">
        <div className="profile-header">
          <img src={authUser.avatar} alt={authUser.userfullname} />
          <div>
            <h3>{authUser.userfullname}</h3>
            <span className="badge bg-primary">Online</span>
          </div>
        </div>

        <div className="profile-content">
          <h5>Profesi - Specialis</h5>
          <p></p>

          <h5>Tentang</h5>
          <p>{authUser.userabout}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePages;
