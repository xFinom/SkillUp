const pool = require("../database/database");

const buildQuery = () => {
  return `
    SELECT id_empresa, RFC, nombre, direccion, estado 
    FROM skillup.empresa, skillup.cuenta_usuario, skillup.estado_cuenta
    WHERE empresa.id_empresa = cuenta_usuario.id_usuario AND cuenta_usuario.estado_cuenta = estado_cuenta.id_estado
  `;
};

const getCompaniesByState = async (req, res) => {
  const query = buildQuery() + ' AND cuenta_usuario.estado_cuenta=1';
  try {
    const result = await pool.query(query);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener las empresas por estado:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener las empresas por estado" });
  }
};

const getCompaniesByStateVerified = async (req, res) => {
  const query = buildQuery() + ' AND cuenta_usuario.estado_cuenta=2';
  try {
    const result = await pool.query(query);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener las empresas por estado:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener las empresas por estado" });
  }
};

const verificarEmpresa = async (req, res) => {
  const { id_empresa } = req.body;

  try {
    const query = "UPDATE skillup.cuenta_usuario SET estado_cuenta = $1 WHERE id_usuario = $2";
    const values = [2, id_empresa];

    await pool.query(query, values);

    console.log("Columna estado_cuenta actualizada con éxito");
    res.status(200).json({ message: "Empresa verificada correctamente" });
  } catch (error) {
    console.error("Error al actualizar la columna estado_cuenta:", error);
    res.status(500).json({ error: "Error al verificar la empresa" });
  }
};

module.exports = {
  getCompaniesByState,
  verificarEmpresa,
  getCompaniesByStateVerified,
};
