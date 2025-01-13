function ForgotPasswordInput() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username atau Email
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Masukan Username atau Email"
        />
      </div>
      <div className="d-grid mb-3">
        <button type="submit" className="btn btn-fs">
          Kirim Password
        </button>
      </div>
    </form>
  );
}

export default ForgotPasswordInput;
