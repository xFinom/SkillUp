import React from "react";
import { useState } from "react";
import { FormAlumno } from "./FormAlumno";
import { FormEmpresa } from "./FormEmpresa";

function Signin() {
  const [company, setCompany] = useState({
    nombre: " ",
    direccion: " ",
    RFC: " ",
    correo: "",
    password: "",
    confPassword: "",
  });

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

  const [studentForm, setStudentForm] = useState(true)
  
  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };
  
  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = () => {
    const body = studentForm ? user : company
    fetch('http://localhost:3001/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container mb-4">
      <form className="form-signin">
        <div className="text-center mb-4">
          <h3 className="text-white">SkillUp!</h3>
        </div>

        <div class="btn-group mb-4 d-flex align-items-center" role="group" aria-label="Basic example">
          <button type="button" className={studentForm ? "btn btn-secondary active" : "btn btn-outline-secondary"} onClick={()=>setStudentForm(true)}>
            Alumno
          </button>
          <button type="button" className={!studentForm ? "btn btn-secondary active" : "btn btn-outline-secondary"} onClick={()=>setStudentForm(false)}>
            Empresa
          </button>
        </div>
        {studentForm ? 
          <FormAlumno handleChange={handleStudentChange} />
        : <FormEmpresa handleChange={handleCompanyChange} />}
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

export default Signin;
