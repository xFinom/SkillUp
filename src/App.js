import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import './App.css'
import Signin from "./components/Signin";


function App() {
  const [view, setView] = useState(0)

  const getView = () => {
    switch (view) {
      case 0:
        return <LogIn setView={setView}/>
      case 1: 
        return <Signin/>
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Navbar />
        {getView()}
      <Footer />
    </div>
  );
}

export default App;
