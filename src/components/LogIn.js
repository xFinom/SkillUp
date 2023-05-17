import React from "react";

function LogIn() {
  return (
    <div class="bg-dark d-flex justify-content-center align-items-center vh-100">
    <div
      class="bg-white p-5 rounded-5 text-secondary shadow"
      style={{height: "35rem",width:"30rem"}}
    >
      <div className="text-center mb-4">
          <h1 className="text-secondary">SkillUp!</h1>
      </div>
      <div class="text-center fs-1 fw-bold">Login</div>
      <div class="input-group mt-4">
        <div class="input-group-text bg-secondary">
        </div>
        <input
          class="form-control bg-light"
          type="text"
          placeholder="Email"
          required
          autofocus
        />
      </div>
      <div class="input-group mt-4">
        <div class="input-group-text bg-secondary">
        </div>
        <input
          class="form-control bg-light"
          type="password"
          placeholder="contraseña"
          required
          autofocus
        />
      </div>
      <div class="d-flex justify-content-around mt-4">
        <div class="d-flex align-items-center gap-1">
        </div>
        <div class="pt-1">
        </div>
      </div>
      <div class="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm">
        Login
      </div>
      <div class="d-flex gap-1 justify-content-center mt-1">

      </div>
      <div class="p-3">
        <div class="border-bottom text-center" style={{height: "0.9rem"}}>
          <span class="bg-white px-3">o</span>
        </div>
      </div>
      <div
        class="btn btn-secondary d-flex gap-2 justify-content-center border mt-2 shadow-sm"
      >
        <div class="fw-semibold text-white">soy un usuario nuevo</div>
      </div>
    </div>
  </div>
  );
}

export default LogIn;
