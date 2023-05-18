import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
    <Navbar />
    <App />
    <Footer />
    </>
  </React.StrictMode>
); 