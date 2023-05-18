import React from "react";
import Navbar from "./components/Navbar";
import Publications from "./components/Publications";
import PubllicationPage from "./components/PublicationPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publication/:id" element={<PubllicationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
