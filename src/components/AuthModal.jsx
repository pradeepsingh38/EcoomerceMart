// AuthModal.jsx
import React from "react";

const AuthModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
    >
      <div className="bg-white p-4 rounded" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Login / Register</h4>

        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#login"
            >
              Login
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#register"
            >
              Register
            </button>
          </li>
        </ul>

        <div className="tab-content">
          {/* Login */}
          <div className="tab-pane fade show active" id="login">
            <input className="form-control mb-2" placeholder="Email" />
            <input className="form-control mb-3" placeholder="Password" type="password" />
            <button className="btn btn-dark w-100">Login</button>
          </div>

          {/* Register */}
          <div className="tab-pane fade" id="register">
            <input className="form-control mb-2" placeholder="Name" />
            <input className="form-control mb-2" placeholder="Email" />
            <input className="form-control mb-3" placeholder="Password" type="password" />
            <button className="btn btn-primary w-100">Register</button>
          </div>
        </div>

        <button
          className="btn btn-outline-secondary mt-3 w-100"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
