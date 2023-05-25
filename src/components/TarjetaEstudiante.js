import React from "react";
import "./Component.css"

function TarjetaEstudiante({ id_alumno, nombre, apellido, universidad, carrera, descripcion, grado, sexo, fecha_nacimiento}) {
  
  return (
    <div
      className="card text-white mb-3"
      style={{
        backgroundColor: "#2d2d2f",
        display: "flex",
        height: "60vh",
      }}
    >
      <div className="card-header">
        <h3>ID</h3>
        <p>{id_alumno}</p>
        <h4>{nombre} {apellido}</h4>
        <p>Universidad: {universidad}</p>
      </div>
      <div className="card-body bg-component">
        <h5>Carrera:</h5>
        <p>{carrera}</p>
        <h5>Descripcion:</h5>
        <p>{descripcion}</p>
        <h5>Grado</h5>
        <p>{grado}</p>
        <h5>Sexo:</h5>
        <p>{sexo}</p>
        <h5>Fecha de nacimiento:</h5>
        <p>{fecha_nacimiento}</p>
      </div>
    </div>
  );
}

export default TarjetaEstudiante;