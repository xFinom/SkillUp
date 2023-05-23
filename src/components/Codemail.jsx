import React, { useState } from "react";

const Codemail = () => {
  const [code, setCode] = useState(""); // Estado para almacenar el valor del código

  const handleClick = () => {
    const body = { code }; // Usamos el valor capturado del estado 'code'
    fetch("http://localhost:3001/verifycode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  const handleChange = event => {
    setCode(event.target.value); // Actualizamos el estado 'code' con el valor del input
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
            value={code} // Asignamos el valor del estado al input
            onChange={handleChange} // Asignamos la función handleChange al evento onChange
          />
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="d-flex align-items-center gap-1"></div>
          <div className="pt-1"></div>
        </div>
        <button
          className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm"
          type="submit"
          onClick={handleClick}
        >
          VALIDAR PERFIL
        </button>
        <div className="d-flex gap-1 justify-content-center mt-1"></div>
      </div>
    </div>
  );
};

export default Codemail;
