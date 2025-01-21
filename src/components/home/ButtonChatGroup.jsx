import PropTypes from "prop-types";

function ButtonChatGroup({ onShowCustomers, onShowConsultants, activeGroup }) {
  return (
    <div className="d-flex gap-2">
      <button
        className={`btn btn-sm ${
          activeGroup === "customers"
            ? "btn-secondary active"
            : "btn-outline-secondary"
        }`}
        onClick={onShowCustomers}
      >
        Customer
      </button>
      <button
        className={`btn btn-sm ${
          activeGroup === "consultants"
            ? "btn-secondary active"
            : "btn-outline-secondary"
        }`}
        onClick={onShowConsultants}
      >
        Konsultan
      </button>
    </div>
  );
}

ButtonChatGroup.propTypes = {
  onShowCustomers: PropTypes.func.isRequired,
  onShowConsultants: PropTypes.func.isRequired,
  activeGroup: PropTypes.string.isRequired, // Add this prop
};

export default ButtonChatGroup;
