import React from "react";
import BodyMainPage from "./components/BodyMainPage";
import CreatePublication from "./components/CreatePublication";
import Publications from "./components/Publications";
import PubllicationPage from "./components/PublicationPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminMP from "./components/AdminMP";
import ListaEmpresas from "./components/listaEmpresas";
import StudentList from "./components/StudentList";
import ListComVerify from "./components/ListComVerify";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BodyMainPage />} />
          <Route path="/publications" element={<Publications/>} />
          <Route path="/publications/new" element={<CreatePublication />} />
          <Route path="/publication/:id" element={<PubllicationPage />} />
          <Route path="/AdminMain" element={<AdminMP/>} />
          <Route path="/verify" element={<ListaEmpresas/>} />
          <Route path="/estudiante" element={<StudentList/>} />
          <Route path="/empresasVerificadas" element={<ListComVerify/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
