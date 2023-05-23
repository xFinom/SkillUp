import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import './App.css'
import Signin from "./components/Signin";
import Codemail from "./components/Codemail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Codemail/>
      <Footer />
    </div>
  );
}

export default App;
