import React from "react";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";

import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <LogIn/>
      <Footer />
    </div>
  );
}

export default App;
