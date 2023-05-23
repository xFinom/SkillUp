// Controlador para verificar el código y actualizar la columna
const verificarCodigo = async (pool, datCode) => {
    try {
        const query = 'UPDATE skillup.cuenta_usuario SET estado_cuenta = $1 WHERE codigo = $2';
        const values = [2, datCode.code];
  
        const client = await pool.connect();
        await client.query(query, values);
        client.release();
  
        console.log('Columna estado_cuenta actualizada con éxito');
      
    } catch (error) {
      console.error('Error al actualizar la columna estado_cuenta:', error);
      return { success: false, message: 'Error al actualizar la columna estado_cuenta' };
    }
  };
  
module.exports={
    verificarCodigo
}
