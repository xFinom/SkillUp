const pool = require('../database/database')

const buildSearchQuery = () => {
  return `
  SELECT id_empresa, RFC, nombre, direccion, correo, estado 
FROM skillup.empresa, skillup.cuenta_usuario, skillup.estado_cuenta
WHERE empresa.id_empresa = cuenta_usuario.id_usuario AND cuenta_usuario.estado_cuenta = estado_cuenta.id_estado
    `;
};

const searchProfile = async (req, res) => {
  const companyId = req.params.id;

  const query = buildSearchQuery() + ' AND id_empresa = $1'

  try {
    const result = await pool.query(query, [companyId]);
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener a la empresa por ID:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener a la empresa por ID" });
  }
}

const getAllCompanies = async (req, res) => {
  const query = buildSearchQuery()

  try {
    const result = await pool.query(query);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener a las empresas:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener a las empresas" });
  }
}

module.exports = {
  searchProfile,
  getAllCompanies
}