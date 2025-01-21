import logoFs from "../../assets/img/logo-fs.png";

function ChatBodyHome() {
  return (
    <div className="col d-flex flex-column justify-content-center align-items-center vh-100">
      <img src={logoFs} alt="Dfunstation" className="mb-3" />
      <h5 className="mb-3">Customer Service Fun Station</h5>
      <p className="text-muted">
        Please wait while we connect you to our support team.
      </p>
    </div>
  );
}

export default ChatBodyHome;
