import React, { useEffect, useState } from "react";
import TarjetaEmpresa from "./tarjetaEmpresa";
import "./Component.css";

function ListaEmpresas() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetchCompaniesByState();
  }, []);

  const fetchCompaniesByState = () => {
    fetch("http://localhost:3000/api/company/verify")
      .then((response) => response.json())
      .then((data) => {
        setEmpresas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las empresas por estado:", error);
      });
  };

  return (
    <div className="container mb-4">
      <h1 className="text-white">Empresas sin verificar</h1>
      <div className="empresas-list">
        {empresas.map((empresa) => (
          <TarjetaEmpresa
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

export default ListaEmpresas;
