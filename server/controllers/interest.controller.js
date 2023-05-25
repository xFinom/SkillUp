// importar la conexión a la base de datos
const pool = require("../database/database");

// Función auxiliar para construir la consulta base
const buildQuery = () => {
    return `
    SELECT alumno.nombre, apellido, titulo, empresa.nombre AS empresa, id_tipo, alumno.id_alumno AS id
    FROM skillup.alumno, skillup.empresa, skillup.publicacion, skillup.interesa
    WHERE alumno.id_alumno = interesa.id_estudiante AND interesa.id_publicacion = publicacion.id_publicacion AND publicacion.id_empresa = empresa.id_empresa
      `;
};

const searchInterestAndFilter = async (req, res) => {
    try {
        const id_empresa = req.query.id_empresa;
        const id_estudiante = req.query.id_estudiante;
    
        let query = buildQuery();
        const values = [];
    
        if (id_empresa) {
          query += ` AND empresa.id_empresa = $${values.length + 1}`;
          values.push(id_empresa);
        }
    
        if (id_estudiante) {
          query += ` AND alumno.id_alumno = $${values.length + 1}`;
          values.push(id_estudiante);
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