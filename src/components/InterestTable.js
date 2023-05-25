import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function InterestTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = JSON.parse(sessionStorage.getItem("userData"));
        let id = userData.rol === 1 ? "?id_estudiante=" : "?id_empresa=";
        id += userData.id;

        console.log(id);

        const response = await fetch(
          "http://localhost:3000/api/interest/searchAndFilter" + id
        );
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="text-white">Usuario</th>
            <th className="text-white">Tipo de Publicacion</th>
            <th className="text-white">Titulo</th>
            <th className="text-white">Empresa</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="text-white">
                <Link to={`/student/${item.id}`}>{item.nombre + " " + item.apellido}</Link>
              </td>
              <td className="text-white">{item.id_tipo === 1 ? "Empleo" : "Curso"}</td>
              <td className="text-white">{item.titulo}</td>
              <td className="text-white">{item.empresa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InterestTable;
