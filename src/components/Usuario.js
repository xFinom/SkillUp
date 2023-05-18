import React from "react";
import '../App.css';

function Usuario({NombreUsuario, comentario}){
    return(
       <>
       <img src="" className="img-thumbnail img-thumbnail-sm" alt="right" />
       <h5>{NombreUsuario}</h5><h6>{comentario}</h6>
       </>
    );

}
export default Usuario;