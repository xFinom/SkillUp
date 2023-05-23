import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PublicationCard from "./PublicationCard";

function PublicationsPrueba() {
  const [publications, setPublications] = useState([]);
  const [area, setArea] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [tipo, setTipo] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const loadPublications = async () => {
    try {
      let url = "http://localhost:3000/api/publications/searchAndFilter";

      const userData = JSON.parse(sessionStorage.getItem("userData"));
      console.log(userData);

      const searchParams = new URLSearchParams(location.search);

      if (searchTerm) searchParams.set("busqueda", encodeURIComponent(searchTerm));
      if (area & area !== 0) searchParams.set("area", encodeURIComponent(area));
      if (tipo & area !== 0) searchParams.set("tipo", encodeURIComponent(tipo));

      navigate(`?${searchParams.toString()}`, { replace: true });
      url += `?${searchParams.toString()}`;

      const response = await fetch(url);
      const data = await response.json();

      setPublications(data);
    } catch (error) {
      console.error("Error al cargar las publicaciones:", error);
    }
  };

  useEffect(() => {
    loadPublications();
  }, [location.search]);

  const getPublicationsCards = () => {
    let publicationCards = publications.map((publication) => {
      return (
        <div className="col-md-4" key={publication.id_publicacion}>
          <PublicationCard
            title={publication.titulo}
            area={publication.area}
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
      <div className="row mb-3 justify-content-center">
        <div className="col-sm-6">
          <select
            name="area"
            className="form-select text-white"
            aria-label="Default select example"
            style={{ backgroundColor: "#2d2d2f" }}
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="0" selected>
              Áreas de Interés
            </option>
            <option value="1">Arte y Arquitectura</option>
            <option value="2">Humanidades</option>
            <option value="3">Ciencias de la Salud</option>
            <option value="4">Ciencias Económico Administrativas</option>
            <option value="5">Ciencias Exactas e Ingenierías</option>
            <option value="6">Ciencias Biológicas y Agropecuaras</option>
          </select>
        </div>
        <div className="col-sm-4">
          <select
            name="tipo"
            className="form-select text-white"
            aria-label="Default select example"
            style={{ backgroundColor: "#2d2d2f" }}
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option selected>
              Tipo de Publicación
            </option>
            <option value="1">Ofertas de Trabajo</option>
            <option value="2">Ofertas de Cursos</option>
          </select>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-outline-secondary"
            style={{ backgroundColor: "#2d2d2f" }}
            onClick={loadPublications}
          >
            Aplicar Filtro
          </button>
        </div>
      </div>
      <div className="row row-cols-3">{getPublicationsCards()}</div>
    </div>
  );
}

export default PublicationsPrueba;
