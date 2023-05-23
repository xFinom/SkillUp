import React, { useState } from "react";
import '../App.css';

const userData = JSON.parse(sessionStorage.getItem("userData"));

function CreatePublication() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    id_empresa: userData.id,
    url: "",
    area: "",
    tipo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/publications/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al crear la publicación");
      }

      const data = await response.json();
      console.log(data); // Maneja la respuesta del servidor según tus necesidades

      // Restablece el formulario después de enviarlo con éxito
      setFormData({
        title: "",
        description: "",
        id_empresa: userData.id,
        url: "",
        area: "",
        tipo: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="mb-6 text-white">
            <label htmlFor="exampleFormControlInput1" className="form-label">Creación Curso/Empleo</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Titulo"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-white">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
            <textarea
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              rows="10"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3 text-white">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Contacto</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Correo/URL"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-white">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Area de Interés</label>
            <select
              className="form-select form-select-lg"
              aria-label="Default select example"
              name="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option value="">Área de Interés</option>
              <option value="1">Arte y Arquitectura</option>
              <option value="2">Humanidades</option>
              <option value="3">Ciencias de la Salud</option>
              <option value="4">Ciencias Económico Administrativas</option>
              <option value="5">Ciencias Exactas e Ingenierías</option>
              <option value="6">Ciencias Biológicas y Agropecuaras</option>
            </select>
          </div>
          <div className="mb-3 text-white">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Tipo de Oferta</label>
            <select
              className="form-select form-select-lg"
              aria-label="Default select example"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
            >
              <option value="">Tipo de Oferta</option>
              <option value="1">Empleo</option>
              <option value="2">Curso</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mx-20">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreatePublication;
