import React from "react";
import "./Component.css"

function CardCom({ id_empresa, nombre, RFC, direccion, estado_putoBeto}) {
  
  return (
    <div
      className="card text-white mb-3"
      style={{
        backgroundColor: "#2d2d2f",
        display: "flex",
        height: "60vh",
      }}
    >
      <div className="card-header">
        <h4>{id_empresa}</h4>
        <h4>{nombre}</h4>
        <p>RFC: {RFC}</p>
        <p>Estado: {estado_putoBeto}</p>
      </div>
      <div className="card-body bg-component">
        <h5>Dirección:</h5>
        <p>{direccion}</p>
      </div>
    </div>
  );
}

export default CardCom;