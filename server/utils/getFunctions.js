async function obtenerUsuario(pool, user) {
  try {
    const query = 'SELECT nombre,apellido FROM skillup.alumno WHERE correo=$1 AND contrasena=$2';
    const values = [user.correo, user.password]

    const client = await pool.connect();
    const res = await client.query(query, values);
    const userName = res.rows[0].nombre + ' ' + res.rows[0].apellido;
    client.release();

    return { userName }
    
  } catch (error) {
    return { userName: null }
  }
}

module.exports = obtenerUsuario