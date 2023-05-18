const pool = require("../database/database"); //User constructor

class Publication {
  constructor({
    id_publicacion,
    titulo,
    descripcion,
    id_empresa,
    id_tipo,
    id_estado,
    correo_contacto,
  }) {
    this.id_publicacion = id_publicacion;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.id_empresa = id_empresa;
    this.id_tipo = id_tipo;
    this.id_estado = id_estado === null ? 1 : id_estado;
    this.correo_contacto = correo_contacto;
  }
  async createUser() {
    try {
      const { rows } = await pool.query(
        `INSERT INTO users(id_publicacion, titulo, descripcion, id_empresa, id_tipo, id_estado, correo_contacto) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          this.id_publicacion,
          this.titulo,
          this.descripcion,
          this.id_empresa,
          this.id_tipo,
          this.id_estado,
          this.correo_contacto,
        ]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = Publication;
