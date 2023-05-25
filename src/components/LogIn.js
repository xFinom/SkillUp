import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setView }) => {
  const navigate = useNavigate(); // Mover useNavigate al nivel superior

  const [Log, setLog] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLog({ ...Log, [name]: value });

    // Validar campos vacíos
    setError({ ...error, [name]: value.trim() === "" ? "Este campo es obligatorio" : "" });
  };

  const handleClick = () => {
    // Validar campos vacíos antes de enviar la solicitud
    const emailError = Log.email.trim() === "" ? "Este campo es obligatorio" : "";
    const passwordError = Log.password.trim() === "" ? "Este campo es obligatorio" : "";

    if (emailError || passwordError) {
      setError({ email: emailError, password: passwordError });
      return;
    }

    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...Log })
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("userData", JSON.stringify(data));
        console.log(data);
        navigate("/"); // Redirige a la página principal
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center vh-100">
      <div
        className="bg-white p-5 rounded-5 text-secondary shadow"
        style={{ height: "35rem", width: "30rem" }}
      >
        <div className="text-center mb-4">
          <h1 className="text-secondary">SkillUp!</h1>
        </div>
        <div className="text-center fs-1 fw-bold">Login</div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-secondary"></div>
          <input
            className={`form-control bg-light ${error.email ? "is-invalid" : ""}`}
            type="text"
            placeholder="Email"
            name="email"
            required
            autoFocus
            onChange={handleChange}
          />
          {error.email && <div className="invalid-feedback">{error.email}</div>}
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-secondary"></div>
          <input
            className={`form-control bg-light ${error.password ? "is-invalid" : ""}`}
            type="password"
            name="password"
            placeholder="contraseña"
            required
            autoFocus
            onChange={handleChange}
          />
          {error.password && <div className="invalid-feedback">{error.password}</div>}
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="d-flex align-items-center gap-1"></div>
          <div className="pt-1"></div>
        </div>
        <button
          className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm"
          type="submit"
          onClick={handleClick}
        >
          Login
        </button>
        <div className="d-flex gap-1 justify-content-center mt-1"></div>
        <div className="p-3">
          <div className="border-bottom text-center" style={{ height: "0.9rem" }}>
            <span className="bg-white px-3">o</span>
          </div>
        </div>
        <div className="btn btn-secondary d-flex gap-2 justify-content-center border mt-2 shadow-sm">
          <div onClick={() => setView(1)} className="fw-semibold text-white">
            soy un usuario nuevo
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
