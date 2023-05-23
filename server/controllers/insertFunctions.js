const uuidv4 = require('uuidv4')
const nodemailer = require('nodemailer');

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
      estado_cuenta: 1,
      tipo_usuario: 1,
      codigo: uuidv4.uuid(),
    };

    const query = 'INSERT INTO skillup.alumno (id_alumno, nombre, apellido, universidad, carrera, descripcion, id_grado, sexo, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    const values = [
      nuevoUsuario.id_alumno,
      nuevoUsuario.nombre,
      nuevoUsuario.apellido,
      nuevoUsuario.universidad,
      nuevoUsuario.carrera,
      nuevoUsuario.descripcion,
      nuevoUsuario.id_grado,
      nuevoUsuario.sexo,
      nuevoUsuario.fecha_nacimiento,
    ];

    const query2 = 'INSERT INTO skillup.cuenta_usuario (id_cuenta, contrasena, correo, estado_cuenta, tipo_usuario, codigo) VALUES ($1, $2, $3, $4, $5, $6)';
    const values2 = [
      nuevoUsuario.id_alumno,
      nuevoUsuario.contrasena,
      nuevoUsuario.correo,
      nuevoUsuario.estado_cuenta,
      nuevoUsuario.tipo_usuario,
      nuevoUsuario.codigo,
    ];

    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'skillupequipo6@gmail.com', // generated ethereal user
        pass: 'tkrlcgwfshvqudjj', // generated ethereal password
      },
    });
    
    const client = await pool.connect();
    await client.query(query, values);
    await client.query(query2, values2);
    client.release();

    try{
      await transporter.sendMail({
        from: '"registrar" <skillupequipo6@gmail.com>', // sender address
        to: 'cesarrihu@hotmail.com ,cesarrihu@hotmail.com', // list of receivers
        subject: "VERIFICACION", // Subject line
        text: "gracias por decidir formar parte de este gran movimiento llamado SkillUp tu codigo es el siguiente: " + nuevoUsuario.codigo, // plain text body
      });
         
         }catch(error){
          console.error('Error al mandar el email', error);
         }

    return {message: 'Usuario registrado correctamente espera tu correo y completa el procesos de validacion ', status: 200}
  } catch (error) {
    console.error('Error al insertar el usuario:', error);
  }
}

async function insertEnterprise(pool, user) {
  try {
    const nuevoUsuario = {
      id_empresa: uuidv4.uuid(),
      rfc: user.rfc,
      direccion: user.direccion,
      contrasena: user.password,
      nombre: user.nombre,
      correo: user.correo,
      id_estado: 1,
      tipo_usuario: 2,
      codigo: uuidv4.uuid(),
    };

    const query = 'INSERT INTO skillup.empresa (id_empresa, RFC, direccion, nombre) VALUES ($1, $2, $3, $4)';
    const values = [
      nuevoUsuario.id_empresa,
      nuevoUsuario.rfc,
      nuevoUsuario.direccion,
      nuevoUsuario.nombre,
    ];

    const query2 = 'INSERT INTO skillup.cuenta_usuario ( id_cuenta, contrasena, correo, estado_cuenta, tipo_usuario, codigo) VALUES ($1, $2, $3, $4, $5, $6)';
    const values2 = [
      nuevoUsuario.id_empresa,
      nuevoUsuario.contrasena,
      nuevoUsuario.correo,
      nuevoUsuario.id_estado,
      nuevoUsuario.tipo_usuario,
      nuevoUsuario.codigo,
    ];

    const client = await pool.connect();
    await client.query(query, values);
    await client.query(query2, values2);
    client.release();

    return {message: 'Empresa insertada correctamente', status: 200}
  } catch (error) {
    console.error('Error al insertar la empresa:', error);
  }
}

module.exports = {insertarUsuario, insertEnterprise}