import React, { useEffect, useState } from "react";
import CardCom from "./CardCom";
import "./Component.css";

function ListComVerify() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetchCompaniesByStateVerified();
  }, []);

  const fetchCompaniesByStateVerified= () => {
    fetch("http://localhost:3000/api/verified")
      .then((response) => response.json())
      .then((data) => {
        setEmpresas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las empresas por estado:", error);
      });
  };

  return (
    <div>
      <h1 className="text-white">Empresas verificadas</h1>
      <div className="empresas-list">
        {empresas.map((empresa) => (
          <CardCom
            key={empresa.id_empresa}
            id_empresa={empresa.id_empresa}
            RFC={empresa.rfc}
            direccion={empresa.direccion}
            nombre={empresa.nombre}
            estado_putoBeto={empresa.estado}
          />
        ))}
      </div>
    </div>
  );
}

export default ListComVerify;
