import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/publications?busqueda=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-component border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1">
          SkillUp!
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/publications?tipo=2" className="nav-link">
                Cursos
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/publications?tipo=1" className="nav-link">
                Trabajos
              </Link>
            </li>
          </ul>
        </div>
        <form className="form-inline nav-item" onSubmit={handleSearch}>
          <input
            className="form-control mr-sm-2 text-white"
            type="search"
            name="search"
            placeholder="Buscar oferta"
            aria-label="Search"
            style={{ backgroundColor: "#2d2d2f" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
