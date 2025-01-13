function ButtonMedia() {
  return (
    <>
      <button
        className="btn btn-light me-2 dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        <i className="bi bi-paperclip"></i>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Send Image
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Send Audio
          </a>
        </li>
      </ul>
    </>
  );
}

export default ButtonMedia;
