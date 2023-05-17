import React from "react";
import {useState} from "react";

function Signin() {
  
  const [user, setUser] = useState({
    nombres:" ",
    apellidos:" ",
    fecha:" ",
    carrera:"",
    universidad:"",
    correo:"",
    password:"",
    confPassword:""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container mb-4">
      <form className="form-signin">
        <div className="text-center mb-4">
          <h3 className="text-white">SkillUp!</h3>
        </div>

        <div class="btn-group mb-4 d-flex align-items-center" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary active">
            Alumno
          </button>
          <button type="button" class="btn btn-outline-secondary">
            Empresa
          </button>
        </div>

        <div className="form-label-group">
          <input
            type="name"
            id="inputName"
            className="form-control bg-transparent text-light"
            placeholder="Nombre/s"
            required
            autofocus
            onChange={handleChange}
          />
          <label for="inputName">Nombres</label>
        </div>
        <div className="form-label-group">
          <input
            type="lastNames"
            id="inputLastNames"
            className="form-control bg-transparent text-light"
            placeholder="Apellidos"
            required
            autofocus
            onChange={handleChange}
          />
          <label for="inputLastNames">Apellidos</label>
        </div>

        <div className="form-label-group">
          <input
            type="Date"
            id="inputFecha"
            className="form-control bg-transparent text-secondary"
            placeholder="Fecha"
            required
            autofocus
            onChange={handleChange}
          />
          <label for="inputFecha">Fecha</label>
        </div>

        <div className="form-label-group">
          <input
            type="career"
            id="inputCareer"
            className="form-control bg-transparent text-light"
            placeholder="Carrera"
            required
            autofocus
            onChange={handleChange}
          />
          <label for="inputCareer">Carrera</label>
        </div>

        <div className="form-label-group">
          <input
            type="University"
            id="inputUniversity"
            className="form-control bg-transparent text-light"
            placeholder="Universidad"
            required
            autofocus
            onChange={handleChange}
          />
          <label for="inputUniversity">Carrera</label>
        </div>

        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control bg-transparent text-light"
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
            className="form-control bg-transparent text-light"
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
            className="form-control bg-transparent text-light"
            placeholder="Confirmar contraseña"
            required
            onChange={handleChange}
          />
          <label for="inputConfirmationPassword">Confirmar contraseña</label>
        </div>

        <button
          className="btn btn-lg btn-outline-secondary btn-block"
          type="submit "
        >
          Registro
        </button>
      </form>
    </div>
  );
}

export default Signin;
