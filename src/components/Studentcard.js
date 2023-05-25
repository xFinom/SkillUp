import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StudentCard() {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/student/profile/${id}`);
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error("Error al obtener los datos del estudiante:", error);
      }
    };

    fetchStudentData();
  }, [id]);

  if (!studentData) {
    return <div>Cargando...</div>;
  }

  const {
    nombre,
    apellido,
    descripcion,
    universidad,
    carrera,
    grado,
    correo
  } = studentData;

  return (
    <div className="card" style={{ backgroundColor: "#2d2d2f" }}>
      <div className="container">
        <center>
          <img className="image-fluid" src="" alt="Card cap" />
        </center>
      </div>
      <div className="card-body bg-light">
        <center>
          <h5 className="card-title">
            {nombre} {apellido}
          </h5>
        </center>
        <center>
          <p className="card-text">{descripcion}</p>
        </center>
      </div>
      <ul className="list-group list-group-flush bg-light">
        <center>
          <li className="list-group-item">{universidad}</li>
        </center>
        <center>
          <li className="list-group-item">{carrera}</li>
        </center>
        <center>
          <li className="list-group-item">{grado}</li>
        </center>
        <center>
          <li className="list-group-item">{correo}</li>
        </center>
      </ul>
      <div className="card-body bg-light">
        <center>
          <button type="button" className="btn btn-secondary">
            CURRICULUM VITAE
          </button>
        </center>
      </div>
    </div>
  );
}

export default StudentCard;
