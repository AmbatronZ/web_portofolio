const HeroSection = () => {
  return (
    <div className="hero-1-container">
      <div className="hero-main-container">
        <img
          className="hero-main-logo"
          draggable="false"
          src="/gta_logo_cut.webp"
          alt="gta logo"
        />
        <img
          className="hero-main-image"
          draggable="false"
          src="/gta_hero.webp"
          alt="gta hero"
        />
      </div>
      <div className="hero-text-logo-container">
        <div className="hero-text-logo"></div>
        <div>
          <h3 className="hero-text">
            MAHASISWA PENS<br />
            ANGKATAN<br />
            24
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;