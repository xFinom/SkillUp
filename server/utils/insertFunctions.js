const uuidv4 = require('uuidv4')

async function insertarUsuario(pool, user) {
  try {
    const nuevoUsuario = {
      id_alumno: uuidv4.uuid(),
      contrasena: user.password,
      nombre: user.nombres,
      apellido: user.apellidos,
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

async function insertEnterprise(pool, user) {
  try {
    const nuevoUsuario = {
      id_empresa: uuidv4.uuid(),
      RFC: user.RFC,
      direccion: user.direccion,
      contrasena: user.password,
      nombre: user.nombre,
      correo: user.correo,
      id_estado: 1,
    };

    const query = 'INSERT INTO skillup.empresa (id_empresa, RFC, direccion, contrasena, nombre, correo, id_estado) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const values = [
      nuevoUsuario.id_empresa,
      nuevoUsuario.RFC,
      nuevoUsuario.direccion,
      nuevoUsuario.contrasena,
      nuevoUsuario.nombre,
      nuevoUsuario.correo,
      nuevoUsuario.id_estado,
    ];

    const client = await pool.connect();
    await client.query(query, values);
    client.release();

    return {message: 'Empresa insertada correctamente', status: 200}
  } catch (error) {
    console.error('Error al insertar la empresa:', error);
  }
}

module.exports = {insertarUsuario, insertEnterprise}