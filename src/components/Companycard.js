import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CompanyCard() {
  const [profileData, setProfileData] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/company/profile/${params.id}`);
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error al obtener el perfil del estudiante:", error);
      }
    };

    fetchProfileData();
  }, [params.id]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card" style={{ backgroundColor: "#2d2d2f" }}>
      <div className="container">
        <center>
          <img className="image-fluid" src="" alt="Card cap" />
        </center>
      </div>
      <div className="card-body bg-light">
        <center>
          <h2 className="card-title">{profileData.nombre}</h2>
        </center>
      </div>
      <ul className="list-group list-group-flush bg-light">
        <center>
          <li className="list-group-item">{profileData.correo}</li>
        </center>
        <center>
          <li className="list-group-item">empresa verificada</li>
        </center>
      </ul>
      <div className="card-body bg-light">
        <center>
          <button type="button" className="btn btn-success">
            verificado
          </button>
        </center>
      </div>
    </div>
  );
}

export default CompanyCard;
