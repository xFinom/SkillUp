import React from "react";

function Studentcard() {
  return (
    <div class="card" style={{ backgroundColor: "#2d2d2f" }}>
      <div className="container">
        <center>
          <img class="image-fluid" src="" alt="Card cap"></img>
        </center>
      </div>
      <div class="card-body bg-light">
        <center>
          <h5 class="card-title">Cesar Arturo Rizo Hurtado</h5>
        </center>
        <center>
          <p class="card-text">"emocionado por entrar al mundo laboral"</p>
        </center>
      </div>
      <ul class="list-group list-group-flush bg-light">
        <center>
          <li class="list-group-item">Universidad de Guadalajara</li>
        </center>
        <center>
          <li class="list-group-item">Ingenieria informatica</li>
        </center>
        <center>
          <li class="list-group-item">Cuarto Semestre</li>
        </center>
        <center>
          <li class="list-group-item">cesarrihu@hotmail.com</li>
        </center>
      </ul>
      <div class="card-body bg-light">
        <center>
          <button type="button" class="btn btn-secondary">
            CURRICULUM VITAE
          </button>
        </center>
      </div>
    </div>
  );
}

export default Studentcard;
