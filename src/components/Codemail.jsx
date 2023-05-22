import React from "react";
import { useState } from "react";

const Codemail = () => {

  const [code, setCode] = useState({
    code: " "
  });

  const handleCodeChange = (e) => {
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });
  };
  
  const handleClick = () => {
  const body = {...code}
    fetch('http://localhost:3001/verifycode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

    return(
<div class="bg-dark d-flex justify-content-center align-items-center vh-100">
      <div
        class="bg-white p-5 rounded-5 text-secondary shadow"
        style={{ height: "35rem", width: "30rem" }}
      >
        <div className="text-center mb-4">
          <h1 className="text-secondary">SkillUp!</h1>
        </div>
        <div class="text-center fs-1 fw-bold">Inserta el codigo del Email que te fue proporcionado</div>
        <div class="input-group mt-5">
          <div class="input-group-text bg-secondary"></div>
          <input
            class="form-control bg-light"
            type="text"
            placeholder="codigo"
            name="code"
            onChange={handleCodeChange}
            required
            autofocus
          />
        </div>
        <div class="d-flex justify-content-around mt-4">
          <div class="d-flex align-items-center gap-1"></div>
          <div class="pt-1"></div>
        </div>
        <button
          class="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm"
          type="submit"
          onClick={handleClick}
        >
          VALIDAR PERFIL
        </button>
        <div class="d-flex gap-1 justify-content-center mt-1"></div>
      </div>
    </div>
    );
}

export default Codemail;