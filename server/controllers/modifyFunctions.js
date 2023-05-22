async function modificarUsuario(pool, code)
{
    try{
        const nuevoValor = [ 2, code];
        const query = ' UPDATE skillup.cuenta_usuario SET estado_cuenta = $nuevo valor WHERE codigo = $1';

        const client = await pool.connect();
        await client.query(query, nuevoValor);

        client.release();

    return {message: 'valor modificado correctamente', status: 200}

    }catch(error){
        console.error('Error al modificar el estatus:', error);
    }
}

module.exports= modificarUsuario