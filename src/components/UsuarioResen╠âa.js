import React from "react";
import '../App.css';
import image2 from './img/usuario.png';

function Usuario({NombreUsuario, comentario}){
    return(
       <>
       <img src={image2} className="img-thumbnail img-thumbnail-sm" alt="right" />
       <h5>{NombreUsuario}</h5><h6>{comentario}</h6>
       </>
    );

}
export default Usuario;