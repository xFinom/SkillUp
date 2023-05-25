import React, { useState } from "react";
import "./Component.css";

function TarjetaEmpresa({ id_empresa, nombre, RFC, direccion, estado_putoBeto }) {
  const [estado, setEstado] = useState(estado_putoBeto);

  const handleVerificarClick = () => {
    const body = { id_empresa };
    fetch("http://localhost:3000/api/company/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`La empresa ${nombre} ha sido verificada correctamente.`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEliminarClick = () => {
    setEstado(1);
    guardarEstado(1);
    alert(`La empresa ${nombre} ha sido eliminada correctamente.`);
  };

  const guardarEstado = (estado) => {
    console.log("Nuevo id_estado:", estado);

    fetch(`http://localhost:3000/api/verify/${id_empresa}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_estado: estado }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error al enviar los cambios al servidor:", error);
      });
  };

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

        <button onClick={handleVerificarClick}>Verificar</button>
        <button onClick={handleEliminarClick}>Eliminar</button>
      </div>
    </div>
  );
}

export default TarjetaEmpresa;
