// importar la conexión a la base de datos
const pool = require("../database/database");

const validator = require("validator")
const uuidv4 = require('uuidv4')

// Función auxiliar para construir la consulta base
const buildQuery = () => {
    return `
    SELECT alumno.nombre, apellido, titulo, empresa.nombre
    FROM skillup.alumno, skillup.empresa, skillup.publicacion, skillup.interesa
    WHERE alumno.id_alumno = interesa.id_estudiante AND interesa.id_publicacion = publicacion.id_publicacion AND publicacion.id_empresa = empresa.id_empresa
      `;
};

const searchInterestAndFilter = async (req, res) => {
    try {
        const id_empresa = req.query.busqueda;
        const id_estudiante = req.query.area;
    
        let query = buildQuery();
        const values = [];
    
        if (id_empresa) {
          query += ` AND empresa.id_empresa = $${values.length + 1}`;
          values.push(area);
        }
    
        if (id_estudiante) {
          query += ` AND publicacion.id_area = $${values.length + 1}`;
          values.push(area);
        }
    
        const result = await pool.query(query, values);
        return res.status(200).json(result.rows);
      } catch (error) {
        console.error("Error al filtrar y buscar las publicaciones:", error);
        return res
          .status(500)
          .json({ error: "Error al filtrar y buscar las publicaciones" });
      }
}

const showInterest = async(req,res) => {
    const params = req.body

  //validar datos
  /*
  try {
    let validate_title = !validator.isEmpty(params.title) && validator.isLength(params.title, { min: 1, max: 35 })
    let validate_descripcion = !validator.isEmpty(params.description) && validator.isLength(params.description, { min: 1, max: 5000 });
    let validate_url = !validator.isEmpty(params.url) && validator.isLength(params.url, { min: 1, max: 320 });

    if (!validate_title || !validate_descripcion || !validate_url) {
      throw new Error("No se ha validado la información")
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar"
    })
  }*/

  const query = 'INSERT INTO skillup.interesa (id_estudiante, id_publicacion) VALUES ($1, $2)';
  const values = [
    params.id_alumno,
    params.id_publicacion
  ]

  try {
    await pool.query(query, values);
    return res.status(200).send({
      status: "exito",
      message: "Interés ingresado correctamente"
    })
  } catch (error) {
    console.error("Error en la insercion:", error);
    return res.status(500).json({ error: "Error en la insercion" });
  }
}

module.exports = { searchInterestAndFilter, showInterest }