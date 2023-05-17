import React from "react";
import Navbar from "./components/Navbar";
import Esignin from "./components/Esignin";
import Footer from "./components/Footer";

import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Esignin/>
      <Footer />
    </div>
  );
}

export default App;
