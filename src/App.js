import React from "react";
import BodyMainPage from './components/BodyMainPage'
import CreatePublication from './components/CreatePublication'
import Publications from "./components/Publications";
import PubllicationPage from "./components/PublicationPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyMainPage />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/new" element={<CreatePublication />} />
          <Route path="/publication/:id" element={<PubllicationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
