import React from "react";
import BodyMainPage from "./components/BodyMainPage";
import CreatePublication from "./components/CreatePublication";
import Publications from "./components/Publications";
import PubllicationPage from "./components/PublicationPage";
import Companycard from "./components/Companycard";
import Studentcard from "./components/Studentcard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import LogIn from "./components/LogIn";
import Codemail from "./components/Codemail";
import InterestStudents from "./components/InterestStudents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BodyMainPage />} />
          <Route path="/register" element={<Signin />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/confirmation" element={<Codemail />} />
          <Route path="/publications" element={<Publications/>} />
          <Route path="/student/:id" element={<Studentcard/>} />
          <Route path="/student/:id/interest" element={<InterestStudents />} />
          <Route path="/company/:id" element={<Companycard/>} />
          <Route path="/publications/new" element={<CreatePublication />} />
          <Route path="/publication/:id" element={<PubllicationPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
