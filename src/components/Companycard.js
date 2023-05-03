import React from "react";
import prueba2 from "./imagenes/prueba2.webp";

function Companycard() {
  return (
    <div class="card" style={{ backgroundColor: "#2d2d2f" }}>
      <div className="container">
      <center>
        <img class="image-fluid" src={prueba2} alt="Card cap"></img>
      </center>
      </div>
      <div class="card-body bg-light">
        <center>
          <h2 class="card-title">DELL</h2>
        </center>
        <center>
          <p class="card-text">"DELL. puramente tu"</p>
        </center>
      </div>
      <ul class="list-group list-group-flush bg-light">
        <center>
          <li class="list-group-item">DELL_recursoshumanos@hotmail.com</li>
        </center>
        <center>
          <li class="list-group-item">www.dell.com</li>
        </center>
        <center>
          <li class="list-group-item">empresa verificada</li>
        </center>
      </ul>
      <div class="card-body bg-light">
        <center>
          <button type="button" class="btn btn-success">
            verificado
          </button>
        </center>
      </div>
    </div>
  );
}

export default Companycard;
