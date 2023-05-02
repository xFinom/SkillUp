import React from "react";

function Signin() {
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
            className="form-control bg-transparent"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputName">Nombres</label>
        </div>

        <div className="form-label-group">
          <input
            type="lastNames"
            id="inputLastNames"
            className="form-control bg-transparent"
            placeholder="Apellidos"
            required
            autofocus
          />
          <label for="inputLastNames">Apellidos</label>
        </div>

        <div className="form-label-group">
          <input
            type="career"
            id="inputCareer"
            className="form-control bg-transparent"
            placeholder="Carrera"
            required
            autofocus
          />
          <label for="inputCareer">Carrera</label>
        </div>

        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control bg-transparent"
            placeholder="Correo"
            required
            autofocus
          />
          <label for="inputEmail">Correo</label>
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control bg-transparent"
            placeholder="Contraseña"
            required
          />
          <label for="inputPassword">Contraseña</label>
        </div>


        <div className="form-label-group">
          <input
            type="password"
            id="inputConfirmationPassword"
            className="form-control bg-transparent"
            placeholder="Confirmar contraseña"
            required
          />
          <label for="inputConfirmationPassword">Confirmar contraseña</label>
        </div>

        <button
          className="btn btn-lg btn-outline-secondary btn-block"
          type="submit"
        >
          Registro
        </button>
      </form>
    </div>
  );
}

export default Signin;
