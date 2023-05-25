import React, { useState } from "react";
import { FormAlumno } from "./FormAlumno";
import { FormEmpresa } from "./FormEmpresa";

function Signin() {
  const [company, setCompany] = useState({
    nombre: " ",
    direccion: " ",
    rfc: " ",
    correo: "",
    password: "",
    confPassword: "",
  });

  const [user, setUser] = useState({
    nombres: " ",
    apellidos: " ",
    fecha: " ",
    carrera: "",
    universidad: "",
    correo: "",
    password: "",
    confPassword: ""
  });

  const [studentForm, setStudentForm] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userType, setUserType] = useState(""); // Nuevo estado para almacenar el tipo de usuario

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = () => {
    const body = studentForm ? { ...user, type: 'alumno' } : { ...company, type: 'empresa' }
    fetch('http://localhost:3000/api/user/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUserType(studentForm ? "alumno" : "empresa"); // Establecer el tipo de usuario
        setShowConfirmation(true);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container mb-4">
      <div className="form-signin">
        <div className="text-center mb-4">
          <h3 className="text-white">SkillUp!</h3>
        </div>

        <div class="btn-group mb-4 d-flex align-items-center" role="group" aria-label="Basic example">
          <button type="button" className={studentForm ? "btn btn-secondary active" : "btn btn-outline-secondary"} onClick={() => setStudentForm(true)}>
            Alumno
          </button>
          <button type="button" className={!studentForm ? "btn btn-secondary active" : "btn btn-outline-secondary"} onClick={() => setStudentForm(false)}>
            Empresa
          </button>
        </div>
        {studentForm ?
          <FormAlumno handleChange={handleStudentChange} />
          : <FormEmpresa handleChange={handleCompanyChange} />}
        {showConfirmation && (
          <div className="alert alert-success mt-3" role="alert">
            <strong>¡Registro exitoso!</strong> ¡Bienvenido{userType === "alumno" ? " se te ha envíado un código de confirmación por correo" : " tu cuenta está pendiente para ser verificada por uno de nuestros administradores"}!
          </div>
        )}
        <button
          className="btn btn-lg btn-outline-secondary btn-block"
          type="submit "
          onClick={handleClick}
        >
          Registro
        </button>
      </div>
    </div>
  );
}

export default Signin;
