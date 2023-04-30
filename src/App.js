import React from "react";
import Navbar from "./components/Navbar";
import Publications from "./components/Publications";
import Footer from "./components/Footer";

import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Publications />
      <Publications />
      <Publications />
      <Publications />
      <Publications />
      <Footer />
    </div>
  );
}

export default App;
