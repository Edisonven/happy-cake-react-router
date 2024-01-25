const Contacto = () => {
  return (
    <div className="contacto__container">
      <h1 className="contacto__title">
        Cuentanos...¿En qué te podemos ayudar?
      </h1>
      <form className="contacto__form">
        <h3 className="contacto__message">Mensaje</h3>
        <textarea className="contacto__textarea" cols="30" rows="10"></textarea>
      </form>
      <form className="contacto__form contacto__form__contact">
        <h3 className="contacto__message">Información de Contacto</h3>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          className="input input__name"
        />
        <div className="form__section">
          <input
            type="email"
            placeholder="Ingrese su correo"
            className="input input__correo"
          />
          <input
            type="number"
            placeholder="Ingrese Código postal"
            className="input input__codigo-postal"
          />
        </div>
        <input
          type="text"
          placeholder="Ingrese su ciudad"
          className="input input__ciudad"
        />
        <input
          type="number"
          placeholder="Ingrese su teléfono"
          className="input input__telefono"
        />
        <input
          type="text"
          placeholder="Ingrese su dirección"
          className="input input__direccion"
        />
      </form>
    </div>
  );
};

export default Contacto;
