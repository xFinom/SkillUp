import React from "react";
import PublicationCard from "./PublicationCard";

function Publications() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <PublicationCard
            title="Prueba publicación"
            description="Esto es una prueba."
            footer="Curso"
          />
        </div>

        <div className="col-md-4">
          <PublicationCard
            title="Prueba publicación"
            description="Esto es una prueba."
            footer="Curso"
          />
        </div>

        <div className="col-md-4">
          <PublicationCard
            title="Prueba publicación"
            description="Esto es una prueba."
            footer="Trabajo"
          />
        </div>
      </div>
    </div>
  );
}

export default Publications;
