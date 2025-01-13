import { Link } from "react-router-dom";
import CardLogo from "../components/authentication/CardLogo";
import ForgotPasswordInput from "../components/authentication/ForgotPasswordInput";

import "../styles/login.css";

function ForgotPassword() {
  return (
    <>
      <div className="container-fluid login-container">
        <CardLogo />

        <div className="right-section">
          <div className="form-container">
            <h2 className="text-center mb-4">Lupa Password</h2>
            <ForgotPasswordInput />
            <div className="text-center">
              Kembali ke Halaman &nbsp;
              <Link to="/" className="text-decoration-none">
                Login?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
