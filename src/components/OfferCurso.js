import React from "react";
import "./Component.css";

function OfferCurso({ titleC,  description, info, area,  tipo, link, contacto }) {
  return (
   
    <div 
      className="card text-white mb-5"
      style={{ backgroundColor: "#487eb0" }}
    >   
        <h3 className="card-header">{tipo}</h3>
        <div className="card-body bg-com">
        <h4 className="card-header">{titleC}</h4>
        <h4 className="card-header">{area}</h4>
        <p className="card-text text-secondary">{description}</p>
        <p className="card-text text-secondary">{info}</p>
        <p className="card-text text-ligh">{contacto}</p>
        <a href="localhost:3000" className="card-link-underline-light">
        {link}

        </a><h4 className="card-body">{}</h4>
        
        <a href="localhost:3000" className="btn btn-outline-secondary">
        "Me Interesa"

        </a>
        
      </div>
    </div>
  );
}

export default OfferCurso;
