const Home = () => {
  return (
    <div className="home__container">
      <h1 className="home__title">
        Bienvenidos a <span className="home__sub-title">Happy Cake</span>
      </h1>
      <div className="home__section">
        <h1>Pasteles</h1>
        <hr className="home__line" />
      </div>
      <div className="home__cards">
        <div className="home__card">
          <img src="./src/assets/imgs/img_1.jpg" alt="" className="card__img" />
        </div>
        <div className="home__card">
          <img src="./src/assets/imgs/img_2.jpg" alt="" className="card__img" />
        </div>
        <div className="home__card">
          <img
            src="./src/assets/imgs/img_3.webp"
            alt=""
            className="card__img"
          />
        </div>
        <div className="home__card">
          <img src="./src/assets/imgs/img_4.jpg" alt="" className="card__img" />
        </div>
        <div className="home__card">
          <img
            src="./src/assets/imgs/img_5.jpeg"
            alt=""
            className="card__img"
          />
        </div>
        <div className="home__card">
          <img src="./src/assets/imgs/img_6.jpg" alt="" className="card__img" />
        </div>
        <div className="home__card">
          <img src="./src/assets/imgs/img_7.jpg" alt="" className="card__img" />
        </div>
        <div className="home__card">
          <img src="./src/assets/imgs/img_8.jpg" alt="" className="card__img" />
        </div>
        <div className="home__card">
          <img src="./src/assets/imgs/img_9.jpg" alt="" className="card__img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
