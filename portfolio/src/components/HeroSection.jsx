const HeroSection = () => {
  return (
    <div className="hero-1-container">
      <div className="hero-main-container">
        <img
          className="hero-main-logo"
          draggable="false"
          src="/web_sites1.svg"
          alt="web site text"
        />
        <img
          className="hero-main-image"
          draggable="false"
          src="/portofolio_hero1.webp"
          alt="portf hero"
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