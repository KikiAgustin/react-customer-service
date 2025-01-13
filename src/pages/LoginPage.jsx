import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CardLogo from "../components/authentication/CardLogo";
import LoginInput from "../components/authentication/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";

import "../styles/login.css";

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ username, password }) => {
    dispatch(asyncSetAuthUser({ username, password }));
  };

  return (
    <div className="container-fluid login-container">
      <CardLogo />

      <div className="right-section">
        <div className="form-container">
          <h2 className="text-center mb-4">Login</h2>
          <LoginInput login={onLogin} />
          <div className="text-center">
            <Link to="/forgotpassword" className="text-decoration-none">
              Lupa Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
