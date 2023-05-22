async function obtenerUsuario(pool, user) {
  try {
    const query = 'SELECT estado_cuenta FROM skillup.cuenta_usuario WHERE correo=$1 AND contrasena=$2';
    const values = [user.correo, user.password]

    const client = await pool.connect();
    const res = await client.query(query, values);
    const validUser = res.estado_cuenta; 
    client.release();

    if(validUser.estado_cuenta === 2)
    {
      return { validUser }
    }
    else
    {
      return { validUser: null }
    }
    
  } catch (error) {
    return { validUser: null }
  }
}

async function obtenerCodigo(pool, code) {
  try {
    const query = 'SELECT codigo FROM skillup.alumno WHERE codigo=$1';
    const values = [code.code]

    const client = await pool.connect();
    const res = await client.query(query, values);
    const codigo = res.rows[0].code;
    client.release();

    return { codigo }
    
  } catch (error) {
    return { codigo: null }
  }
}

module.exports = {obtenerCodigo, obtenerUsuario}