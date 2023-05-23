export const FormEmpresa = ({handleChange}) => {
  return (
    <>
      <div className="form-label-group" class="mt-5">
        <input
          type="name"
          id="inputName"
          className="form-control bg-transparent text-white"
          placeholder="Nombre de la empresa"
          name="nombre"
          required
          autofocus
          onChange={handleChange}
        />
        <label for="inputName"></label>
      </div>

      <div className="form-label-group">
        <input
          type="direccion"
          id="inputDireccion"
          className="form-control bg-transparent text-white"
          placeholder="Direccion de la empresa"
          name="direccion"
          required
          autofocus
          onChange={handleChange}
        />
        <label for="inputDireccion">Direccion</label>
      </div>

      <div className="form-label-group">
        <input
          type="RFC"
          id="inputRFC"
          className="form-control bg-transparent text-white"
          placeholder="RFC"
          name="rfc"
          required
          autofocus
          onChange={handleChange}
        />
        <label for="inputRFC">RFC</label>
      </div>

      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          className="form-control bg-transparent text-white"
          placeholder="Correo"
          name="correo"
          required
          autofocus
          onChange={handleChange}
        />
        <label for="inputEmail">Correo</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control bg-transparent text-white"
          placeholder="Contraseña"
          name="password"
          required
          onChange={handleChange}
        />
        <label for="inputPassword">Contraseña</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputConfirmationPassword"
          className="form-control bg-transparent text-white"
          placeholder="Confirmar contraseña"
          name="confpassword"
          required
          onChange={handleChange}
        />
        <label for="inputConfirmationPassword">Confirmar contraseña</label>
      </div>
    </>
  )
}