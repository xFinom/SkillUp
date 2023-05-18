import React from "react";
import PublicationCard from "./PublicationCard";
import { useEffect, useState } from "react";

function Publications() {
  const [publications, setPublications] = useState([]);

  const loadPublications = async () => {
    const response = await fetch("http://localhost:3000/api/publications");
    const data = await response.json();

    setPublications(data);
  };

  useEffect(() => {
    loadPublications();
  }, []);

  const getPublicationsCards = () => {
    let publicationCards = publications.map((publication) => {
      return (
        <div className="col-md-4">
          <PublicationCard
            title={publication.titulo}
            description={publication.descripcion}
            footer={publication.tipo}
            id_publicacion={publication.id_publicacion}
          />
        </div>
      );
    });
    return publicationCards;
  };

  return (
    <div className="container">
      <div class="row mb-3 justify-content-center">
        <div class="col-sm-6">
          <select name="area" class="form-select text-white" aria-label="Default select example" style={{ backgroundColor: "#2d2d2f" }}>
            <option value ="0" selected>Áreas de Interés</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-sm-4">
          <select name="tipo" class="form-select text-white" aria-label="Default select example" style={{ backgroundColor: "#2d2d2f" }}>
            <option value ="0" selected>Tipo de Publicación</option>
            <option value="1">Ofertas de Trabajo</option>
            <option value="2">Ofertas de Cursos</option>
          </select>
        </div>
        <div className="col">
        <button type="submit" class="btn btn-outline-secondary" style={{ backgroundColor: "#2d2d2f" }}>Aplicar Filtro</button>
        </div>
      </div>
      <div className="row row-cols-3">{getPublicationsCards()}</div>
    </div>
  );
}

export default Publications;
