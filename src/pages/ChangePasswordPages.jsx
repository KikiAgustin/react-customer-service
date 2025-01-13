import "../styles/changePassword.css";

function ChangePasswordPages() {
  return (
    <div className="col change-password-section">
      <div className="container">
        <div className="change-password-header">
          <h3>Ganti Password</h3>
          <p>
            Silakan masukkan password sekarang, password baru, dan konfirmasi
            password baru Anda.
          </p>
        </div>

        <div className="change-password-content">
          <form>
            <div className="form-group">
              <label htmlFor="currentPassword" className="form-label">
                Password Sekarang
              </label>
              <input
                type="password"
                id="currentPassword"
                className="form-control"
                placeholder="Masukkan password sekarang"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="newPassword" className="form-label">
                Password Baru
              </label>
              <input
                type="password"
                id="newPassword"
                className="form-control"
                placeholder="Masukkan password baru"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Konfirmasi Password Baru
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Konfirmasi password baru"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Ganti Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPages;
