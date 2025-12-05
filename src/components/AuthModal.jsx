import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ show, onClose }) => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");

  // Login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [showLoginPass, setShowLoginPass] = useState(false);

  // Register fields
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [showRegPass, setShowRegPass] = useState(false);

  if (!show) return null;

  // LOGIN FUNCTION
  const handleLogin = () => {
    console.log("Login Details:", { loginEmail, loginPass });

    alert("Login Successful!");

    onClose();           // close modal
    navigate("/home");   // redirect
  };

  // REGISTER FUNCTION
  const handleRegister = () => {
    console.log("Register Data:", { regName, regEmail, regPass });

    alert("Registered Successfully!");

    // After register, open Login tab
    setActiveTab("login");
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
    >
      <div className="bg-white p-4 rounded" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Login / Register</h4>

        {/* Tabs */}
        <div className="d-flex mb-3">
          <button
            className={`flex-fill btn ${activeTab === "login" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={`flex-fill btn ms-2 ${activeTab === "register" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* LOGIN TAB */}
        {activeTab === "login" && (
          <div>
            <input
              className="form-control mb-2"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <div className="position-relative mb-3">
              <input
                className="form-control"
                type={showLoginPass ? "text" : "password"}
                placeholder="Password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-2"
                style={{ cursor: "pointer" }}
                onClick={() => setShowLoginPass(!showLoginPass)}
              >
                {showLoginPass ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <button className="btn btn-dark w-100" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}

        {/* REGISTER TAB */}
        {activeTab === "register" && (
          <div>
            <input
              className="form-control mb-2"
              placeholder="Name"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
            />

            <div className="position-relative mb-3">
              <input
                className="form-control"
                type={showRegPass ? "text" : "password"}
                placeholder="Password"
                value={regPass}
                onChange={(e) => setRegPass(e.target.value)}
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-2"
                style={{ cursor: "pointer" }}
                onClick={() => setShowRegPass(!showRegPass)}
              >
                {showRegPass ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <button className="btn btn-primary w-100" onClick={handleRegister}>
              Register
            </button>
          </div>
        )}

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
