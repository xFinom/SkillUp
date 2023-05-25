import React, { useEffect, useState } from "react";
import TarjetaEstudiante from "./TarjetaEstudiante";
import "./Component.css";

function StudentList() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = () => {
    // Petición al servidor para obtener todos los estudiantes
    fetch("http://localhost:3000/api/student/")
      .then((response) => response.json())
      .then((data) => {
        setEstudiantes(data);
      })
      .catch((error) => {
        console.error("Error al obtener todos los estudiantes:", error);
      });
  };

  return (
    <div className="container mb-4">
      <h1 className="text-white">Lista de Estudiantes</h1>
      <div className="estudiantes-list">
        {estudiantes.map((estudiante) => (
          <TarjetaEstudiante
           id_alumno={estudiante.id_alumno}
            nombre={estudiante.nombre}
            apellido={estudiante.apellido}
            universidad={estudiante.universidad}
            carrera={estudiante.carrera}
            descripcion={estudiante.descripcion}
            grado={estudiante.grado}
            sexo={estudiante.sexo}
            fecha_nacimiento={estudiante.fecha_nacimiento}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;