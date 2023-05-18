import React from "react";
import "./Component.css";

function PublicationCard({ title, description, footer, id_publicacion }) {
  const url = "/publication/" + id_publicacion;
  
  return (
    <div
      className="card text-white mb-3"
      style={{ backgroundColor: "#2d2d2f" }}
    >
      <div className="card-header">{footer}</div>
      <div className="card-body bg-component">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
        <a href={url} className="btn btn-outline-secondary">
          Ir a la oferta
        </a>
      </div>
    </div>
  );
}

export default PublicationCard;
