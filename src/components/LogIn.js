import React from "react";
import { useState } from "react";

const LogIn = ({ setView }) => {
  const [Log, setLog] = useState({
    correo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLog({ ...Log, [name]: value });
  };

  const handleClick = () => {
    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Log }),
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("userData", JSON.stringify(data));
        console.log(data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div class="bg-dark d-flex justify-content-center align-items-center vh-100">
      <div
        class="bg-white p-5 rounded-5 text-secondary shadow"
        style={{ height: "35rem", width: "30rem" }}
      >
        <div className="text-center mb-4">
          <h1 className="text-secondary">SkillUp!</h1>
        </div>
        <div class="text-center fs-1 fw-bold">Login</div>
        <div class="input-group mt-4">
          <div class="input-group-text bg-secondary"></div>
          <input
            class="form-control bg-light"
            type="text"
            placeholder="Email"
            name="email"
            required
            autofocus
            onChange={handleChange}
          />
        </div>
        <div class="input-group mt-4">
          <div class="input-group-text bg-secondary"></div>
          <input
            class="form-control bg-light"
            type="password"
            name="password"
            placeholder="contraseña"
            required
            autofocus
            onChange={handleChange}
          />
        </div>
        <div class="d-flex justify-content-around mt-4">
          <div class="d-flex align-items-center gap-1"></div>
          <div class="pt-1"></div>
        </div>
        <button
          class="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm"
          type="submit"
          onClick={handleClick}
        >
          Login
        </button>
        <div class="d-flex gap-1 justify-content-center mt-1"></div>
        <div class="p-3">
          <div class="border-bottom text-center" style={{ height: "0.9rem" }}>
            <span class="bg-white px-3">o</span>
          </div>
        </div>
        <div class="btn btn-secondary d-flex gap-2 justify-content-center border mt-2 shadow-sm">
          <div onClick={() => setView(1)} class="fw-semibold text-white">soy un usuario nuevo</div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
