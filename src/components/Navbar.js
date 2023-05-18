import React from "react";
import "./Component.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-component border-bottom">
      <div className="container">
        <a href="localhost:3000" className="navbar-brand mb-0 h1">
          SkillUp!
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="localhost:3000" className="nav-link active">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a href="localhost:3000" className="nav-link">
                Cursos
              </a>
            </li>

            <li className="nav-item">
              <a href="localhost:3000" className="nav-link">
                Trabajos
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline nav-item">
          <input
            className="form-control mr-sm-2 text-white"
            type="search"
            name="search"
            placeholder="Buscar oferta"
            aria-label="Search"
            style={{ backgroundColor: "#2d2d2f" }}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
