const uuidv4 = require('uuidv4')

async function insertarUsuario(pool, user) {
  try {
    const nuevoUsuario = {
      id_alumno: uuidv4.uuid(),
      contrasena: user.password,
      nombre: user.nombre,
      apellido: user.apellido,
      universidad: user.universidad,
      carrera: user.carrera,
      descripcion: 'Descripción del usuario',
      id_grado: 2,
      correo: user.correo,
      sexo: 'M',
      fecha_nacimiento: user.fecha,
    };

    const query = 'INSERT INTO skillup.alumno (id_alumno, contrasena, nombre, apellido, universidad, carrera, descripcion, id_grado, correo, sexo, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
    const values = [
      nuevoUsuario.id_alumno,
      nuevoUsuario.contrasena,
      nuevoUsuario.nombre,
      nuevoUsuario.apellido,
      nuevoUsuario.universidad,
      nuevoUsuario.carrera,
      nuevoUsuario.descripcion,
      nuevoUsuario.id_grado,
      nuevoUsuario.correo,
      nuevoUsuario.sexo,
      nuevoUsuario.fecha_nacimiento,
    ];

    const client = await pool.connect();
    await client.query(query, values);
    client.release();

    return {message: 'Usuario insertado correctamente', status: 200}
  } catch (error) {
    console.error('Error al insertar el usuario:', error);
  }
}

module.exports = insertarUsuario