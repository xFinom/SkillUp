const pool = require('../database/database')

const buildSearchQuery = () => {
  return `
  SELECT id_alumno, alumno.nombre, apellido, universidad, carrera, descripcion, grados.grado, sexo, fecha_nacimiento FROM skillup.alumno, skillup.grados WHERE alumno.id_grado = grados.id_grado
  `;
};

const searchProfile = async (req, res) => {
  const studentId = req.params.id; 
  const query = buildSearchQuery() + " AND id_alumno = $1";

  try {
    const result = await pool.query(query, [studentId]);
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener al estudiante por ID:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener al estudiante por ID" });
  }
}

const getAllStudents = async (req, res) => {
  const query = buildSearchQuery()

  try {
    const result = await pool.query(query);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener a los estudiantes:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener a los estudiantes" });
  }
}

module.exports = {
  searchProfile,
  getAllStudents
}