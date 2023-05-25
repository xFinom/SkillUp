import React, { useState } from "react";

const Codemail = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // Nuevo estado para el mensaje de confirmación

  const handleClick = event => {
    event.preventDefault(); // Evitar el envío del formulario si el campo está vacío

    if (code.trim() === "") {
      setError("El campo código no puede estar vacío");
      setSuccess(false); // Restablecer el estado de éxito
      return;
    }

    const body = { code };
    fetch("http://localhost:3000/api/user/verifycode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSuccess(true); // Mostrar el mensaje de confirmación
        setError(null); // Restablecer el estado de error
      })
      .catch(error => {
        console.error("Error:", error);
        setError("Ocurrió un error al procesar la solicitud");
        setSuccess(false); // Restablecer el estado de éxito
      });
  };

  const handleChange = event => {
    setCode(event.target.value);
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center vh-100">
      <div
        className="bg-white p-5 rounded-5 text-secondary shadow"
        style={{ height: "35rem", width: "30rem" }}
      >
        <div className="text-center mb-4">
          <h1 className="text-secondary">SkillUp!</h1>
        </div>
        <div className="text-center fs-1 fw-bold">
          Inserta el código del Email que te fue proporcionado
        </div>
        <div className="input-group mt-5">
          <div className="input-group-text bg-secondary"></div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="codigo"
            name="code"
            required
            autoFocus
            value={code}
            onChange={handleChange}
          />
        </div>
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div className="alert alert-success mt-3" role="alert">
            Cuenta confirmada exitosamente.
          </div>
        )}
        <button
          className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm"
          type="submit"
          onClick={handleClick}
        >
          VALIDAR PERFIL
        </button>
      </div>
    </div>
  );
};

export default Codemail;
