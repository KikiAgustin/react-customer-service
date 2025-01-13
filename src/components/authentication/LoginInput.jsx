import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

function LoginInput({ login }) {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username atau Email
        </label>
        <input
          type="text"
          value={username}
          onChange={onUsernameChange}
          className="form-control"
          id="username"
          placeholder="Masukan Username atau Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          className="form-control"
          id="password"
          placeholder="Masukan Password"
        />
      </div>
      <div className="d-grid mb-3">
        <button
          type="button"
          className="btn btn-fs"
          onClick={() => login({ username, password })}
        >
          Login Sekarang
        </button>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
