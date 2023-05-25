import React from "react";
import '../App.css';
import user from "./a.jpeg"
import user2 from "./man.png"

function Usuario({NombreUsuario, comentario}){
    return(
       <>
       <img src={user2} className="img-thumbnail" alt="right" />
       <h5>{NombreUsuario}</h5><h6>{comentario}</h6>
       </>
    );

}
export default Usuario;