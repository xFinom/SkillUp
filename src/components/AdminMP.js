import React from 'react';
import '../App.css';
import image1 from '../components/lista.png'; 
import image2 from '../components/estudiante.png'; 
import image3 from '../components/empresa.avif'; 
function AdminMP() {
  return (
    <div>
      <div className="text-white text-center mb-4">
        <h2>Actividades de Administrador</h2>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card bg-secondary" style={{ width: '22rem' }}>
          
          <h4 className="card-title text-white text-center" >Verificación de empresas</h4>
            <img
              src={image1}
              alt="ImagenVerificar"
            />
            <div className="card-body">
              <a href="/verify" className="btn btn-primary">
                Ir a empresas por verificar
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-secondary" style={{ width: '22rem' }}>
          <h4 className="card-title text-white text-center">Ver perfiles de estudiantes</h4>
            <img
              src={image2}
              alt="imagenEstudiantes"
            />
            <div className="card-body">
              <a href="/estudiante" className="btn btn-primary">
                Desplegar todos los perfiles
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-secondary" style={{ width: '22rem' }}>
          <h5 className="card-title text-white text-center">Ver perfiles de empresas verificadas</h5>
            <img
             src={image3}
              className="card-img-top"
              alt="imagenempresa"
            />
            <div className="card-body">
             
              <a href="/empresasVerificadas" className="btn btn-primary">
                Desplegar todos los perfiles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMP;
