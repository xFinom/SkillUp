import React from "react";
import { useState } from "react";

function Esignin() {
  const [company, setCompany] = useState({
    nombre: " ",
    direccion: " ",
    RFC: " ",
    correo: "",
    password: "",
    confPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleClick = () => {
    fetch("/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...company }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCompany(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (

      <div className="container mb-4">
        <form className="form-signin">
          <div className="text-center mb-4">
            <h3 className="text-white">SkillUp!</h3>
          </div>

          <div
            class="btn-group mb-8 d-flex align-items-center"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn btn-outline-secondary">
              Alumno
            </button>
            <button type="button" class="btn btn-secondary active">
              Empresa
            </button>
          </div>

          <div className="form-label-group" class="mt-5">
            <input
              type="name"
              id="inputName"
              className="form-control bg-transparent text-white"
              placeholder="Nombre de la empresa"
              required
              autofocus
              onChange={handleChange}
            />
            <label for="inputName"></label>
          </div>

          <div className="form-label-group">
            <input
              type="direccion"
              id="inputDireccion"
              className="form-control bg-transparent text-white"
              placeholder="Direccion de la empresa"
              required
              autofocus
              onChange={handleChange}
            />
            <label for="inputDireccion">Direccion</label>
          </div>

          <div className="form-label-group">
            <input
              type="RFC"
              id="inputRFC"
              className="form-control bg-transparent text-white"
              placeholder="RFC"
              required
              autofocus
              onChange={handleChange}
            />
            <label for="inputRFC">RFC</label>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control bg-transparent text-white"
              placeholder="Correo"
              required
              autofocus
              onChange={handleChange}
            />
            <label for="inputEmail">Correo</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control bg-transparent text-white"
              placeholder="Contraseña"
              required
              onChange={handleChange}
            />
            <label for="inputPassword">Contraseña</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputConfirmationPassword"
              className="form-control bg-transparent text-white"
              placeholder="Confirmar contraseña"
              required
              onChange={handleChange}
            />
            <label for="inputConfirmationPassword">Confirmar contraseña</label>
          </div>

          <button
            className="btn btn-lg btn-outline-secondary btn-block"
            type="submit "
            onClick={handleClick}
          >
            Registro
          </button>
        </form>
      </div>
   
  );
}

export default Esignin;
