import React from "react";
import "../App.css";
import Usuario from "./Usuario";
import Imagen2 from "./imagenprincipal.jpeg";

function BodyMainPage() {
  return (
    <body>
      <div
        className="card text-white mb-3"
        style={{ backgroundColor: "#2d2d2f" }}
      >
        <div className="row">
          <div className="col-md-4">
            <img
              src={Imagen2}
              className="img-thumbnail"
              alt="right"
              style={{ float: "right", width: "800px", height: "600px" }}
            />
          </div>
          <div className="col-md-6">
            <h1 className="texto">Skill UP!</h1>
            <h2>
              Mejores soluciones para busqueda de opciones para desarrollar y
              aplicar tus habilidades
            </h2>

            <h3 className="texto">Lo que la gente está diciendo</h3>
            <div className="row">
              <div className="col-md-3">
                <Usuario
                  NombreUsuario="Cesar"
                  comentario="Buenas propuestas de las empresas"
                />
              </div>
              <div className="col-md-3">
                <Usuario
                  NombreUsuario="Rodrigo"
                  comentario="He encontrado buenas ofertas de empleo"
                />
              </div>
              <div className="col-md-3">
                <Usuario
                  NombreUsuario="Alberto"
                  comentario="Excelente plataforma"
                />
              </div>
              <div className="col-md-3">
                <Usuario
                  NombreUsuario="Alvaro"
                  comentario="He encontrado buenos cursos"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default BodyMainPage;