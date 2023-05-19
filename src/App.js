import React from "react";
import BodyMainPage from "./components/BodyMainPage";
import CreatePublication from "./components/CreatePublication";
import Publications from "./components/Publications";
import PubllicationPage from "./components/PublicationPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
