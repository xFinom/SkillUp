import React from "react";
import '../App.css';

function CreatePublication() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        <form className="w-50">
          <div className="mb-6 text-white">
            <label htmlFor="exampleFormControlInput1" className="form-label">Creación Curso/Empleo</label>
            <input type="description" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Nombre"/>
          </div>
          <div className="mb-3 text-white">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
            <textarea className="form-control form-control-lg" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
          <div className="form-check text-white">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Empleo
            </label>
          </div>
          <div className="form-check text-white">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Curso
            </label>
          </div>
          <button type="submit" className="btn btn-primary mx-20">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreatePublication;