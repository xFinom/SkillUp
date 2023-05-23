import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const userData = JSON.parse(sessionStorage.getItem("userData"));

function PublicationPage() {

  const params = useParams();
  const url = "http://localhost:3000/api/publications/page/" + params.id

  const [publication, setPublication] = useState([]);

  const loadPublication = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setPublication(data);
  };

  useEffect(() => {
    loadPublication();
  }, []);

  const handleInterest = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/interest/showInterest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id_alumno: userData.id,
          id_publicacion: params.id
        })
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al enviar el interés:", error);
    }
  };

  return (
    <div className="container">
      {publication && (
        <div className="card text-white mb-5" style={{ backgroundColor: "#2d2d2f" }}>
          <h3 className="card-header">{publication.tipo}: {publication.titulo}</h3>
          <div className="card-body">
            <h4 className="card-header">Descripción:</h4>
            <p className="card-text text-secondary">{publication.descripcion}</p>
            <p className="card-text text-light">Estado de la publicación: {publication.estado}</p>
            <p className="card-text text-light">Correo de contacto: {publication.correo_contacto}</p>
            {userData && userData.rol === 1 && (
              <button className="btn btn-outline-secondary" onClick={handleInterest}>
                Me Interesa
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PublicationPage;
