import productos from "../Productos";
const Home = () => {
  return (
    <div className="home__container">
      <div className="home__title__container">
        <h1 className="home__title">
          Bienvenidos a <span className="home__sub-title">Happy Cake</span>
        </h1>
        <img src="/logo.jpg" alt="" className="home__logo__img" />
      </div>
      <div className="home__section">
        <h1>Pasteles</h1>
        <hr className="home__line" />
      </div>
      <div className="home__cards">
        {productos.map((producto) => (
          <div className="home__card" key={producto.id}>
            <img src={producto.img} alt="" className="card__img" />
            <h1 className="card__price">${producto.precio}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
