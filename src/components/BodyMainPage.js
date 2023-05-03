import React from "react";
import '../App.css';
import image1 from './img/image1.jpg';
import Usuario from "./UsuarioReseña";

function BodyMainPage() {
  return (
    <body>
      <div className="card text-white mb-3" style={{ backgroundColor: "#2d2d2f" }}>
        <div className="row">
          <div className="col-md-4">
            <img src={image1} className="img-thumbnail" alt="right" style={{ float: "right" }} />
          </div>
          <div className="col-md-6">
            <h1 className="texto">Skill UP!</h1>
            <h2>Mejores soluciones para busqueda de opciones para desarrollar y aplicar tus habilidades</h2>
            
            
            <h3 className="texto">Lo que la gente está diciendo</h3>
            <div className="row">
              <div className="col-md-2">
              <Usuario
                NombreUsuario = "user1"
                comentario= 'Esto es un comentario de un usuario'
                />
              </div>
              <div className="col-md-2">
                <Usuario
                NombreUsuario = "user2"
                comentario= 'Esto es un comentario de un usuario'
                />
              </div>
              <div className="col-md-2">
              <Usuario
                NombreUsuario = "user3"
                comentario= 'Esto es un comentario de un usuario'
                />
              </div>
              <div className="col-md-2">
              <Usuario
                NombreUsuario = "user4"
                comentario= 'Esto es un comentario de un usuario'
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