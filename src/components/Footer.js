import React from "react";

function Footer() {
  return (
    <div className="bg-component border-top">
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
          <p class="col-md-4 mb-0 text-light">&copy; 2023 Equipo 6</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-light text-decoration-none"
          >
            SkillUp
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="localhost:3000" class="nav-link px-2 text-white-50">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a href="localhost:3000" class="nav-link px-2 text-white-50">
                Cursos
              </a>
            </li>
            <li class="nav-item">
              <a href="localhost:3000" class="nav-link px-2 text-white-50">
                Trabajos
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
