import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PublicationPage() {

  const params = useParams();
  const url = "http://localhost:3000/api/publication/" + params.id 
  
  const [publication, setPublication] = useState([]);

  const loadPublication = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setPublication(data);
  };

  useEffect(() => {
    loadPublication();
  }, []); 
  
  return (    
    <div className="container">
      <div
        className="card text-white mb-5"
        style={{ backgroundColor: "#2d2d2f" }}
      >
        <h3 className="card-header">{publication.tipo}</h3>
        <div className="card-body ">
          <h4 className="card-header">{publication.titulo}</h4>
          <h4 className="card-header">{publication.area}</h4>
          <p className="card-text text-secondary">{publication.descripcion}</p>
          <p className="card-text text-ligh">{publication.estado}</p>
          <h4 className="card-body">{publication.correo_contacto}</h4>

          <a href="localhost:3000" className="btn btn-outline-secondary">
            "Me Interesa"
          </a>
        </div>
      </div>
    </div>
  );
}

export default PublicationPage;