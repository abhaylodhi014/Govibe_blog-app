// Alert.jsx
import React from "react";

const Alert = ({ alert }) => {
  // Capitalizing function to format the alert type
const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  // If no alert, return null (nothing to display)
  if (!alert) return null;

  return (
    <div style={{ height: "45px", backgroundColor: "black" }} className="">
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(alert.type) + "!"}</strong> {alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Alert;
