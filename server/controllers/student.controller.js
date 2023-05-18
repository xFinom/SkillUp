const pool = require('../database/database')
const Publication = require('../models/Publication')

const register = async (req, res) => {
    const result = await pool.query(
      "SELECT id_publicacion, titulo, descripcion, id_empresa, area, tipo, correo_contacto FROM skillup.publicacion, skillup.area_publicacion, skillup.tipo_publicacion WHERE publicacion.id_area = area_publicacion.id_area AND publicacion.id_tipo = tipo_publicacion.id_tipo;"
    );
  
    return res.status(200).json(result.rows);
  };

module.exports = {
    register
}