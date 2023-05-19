// importar la conexión a la base de datos
const pool = require("../database/database");

// Función auxiliar para construir la consulta base
const buildQuery = () => {
  return `
      SELECT id_publicacion, titulo, descripcion, id_empresa, area, tipo, estado, correo_contacto
      FROM skillup.publicacion, skillup.area_publicacion, skillup.tipo_publicacion, skillup.estado_publicacion
      WHERE publicacion.id_area = area_publicacion.id_area
        AND publicacion.id_tipo = tipo_publicacion.id_tipo
        AND publicacion.id_estado = estado_publicacion.id_estado
    `;
};

const getAllPublications = async (req, res) => {
  const query = buildQuery();

  try {
    const result = await pool.query(query);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener todas las publicaciones:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener todas las publicaciones" });
  }
};

const getPublicationById = async (req, res) => {
  // Obtener el parámetro de la URL
  const publicationId = parseInt(req.params.id);

  // Construir la consulta
  const query = buildQuery() + " AND publicacion.id_publicacion = $1";

  try {
    const result = await pool.query(query, [publicationId]);
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener la publicación por ID:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener la publicación por ID" });
  }
};

const searchPublication = async (req, res) => {
  const searchTerm = req.query.busqueda;
  const query = buildQuery() + " AND publicacion.titulo ILIKE $1";

  try {
    const result = await pool.query(query, [`%${searchTerm}%`]);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    return res.status(500).json({ error: "Error en la búsqueda" });
  }
};

const filterPublications = async (req, res) => {
  try {
    // Obtener los parámetros de la URL
    const area = req.query.area;
    const tipo = req.query.tipo;

    let query = buildQuery();
    const values = [];

    // Construir la consulta según los parámetros proporcionados
    if (area) {
      query += ` AND publicacion.id_area = $${values.length + 1}`;
      values.push(area);
    }
    if (tipo) {
      query += ` AND publicacion.id_tipo = $${values.length + 1}`;
      values.push(tipo);
    }

    // Ejecutar la consulta en la base de datos con valores parametrizados
    const result = await pool.query(query, values);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al filtrar las publicaciones:", error);
    return res
      .status(500)
      .json({ error: "Error al filtrar las publicaciones" });
  }
};

const searchAndFilterPublications = async (req, res) => {
  try {
    const searchTerm = req.query.busqueda;
    const area = req.query.area;
    const tipo = req.query.tipo;

    let query = buildQuery();
    const values = [];

    if (searchTerm) {
      query += ` AND publicacion.titulo ILIKE $${values.length + 1}`;
      values.push(`%${searchTerm}%`);
    }

    if (area) {
      query += ` AND publicacion.id_area = $${values.length + 1}`;
      values.push(area);
    }

    if (tipo) {
      query += ` AND publicacion.id_tipo = $${values.length + 1}`;
      values.push(tipo);
    }

    const result = await pool.query(query, values);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al filtrar y buscar las publicaciones:", error);
    return res
      .status(500)
      .json({ error: "Error al filtrar y buscar las publicaciones" });
  }
};

module.exports = {
  getAllPublications,
  getPublicationById,
  searchPublication,
  filterPublications,
  searchAndFilterPublications,
};
