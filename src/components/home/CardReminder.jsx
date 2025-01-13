function CardReminnder() {
  return (
    <div className="p-3 border-bottom bg-light">
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            Anda Tidak memiliki jadwal pada hari ini, saat ini anda sedang
            <strong>Offline</strong>
          </p>
          <button id="toggle-online-btn" className="btn btn-success">
            Ganti Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardReminnder;
