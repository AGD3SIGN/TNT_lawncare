function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero__container container grid">
        <div className="hero__content" data-aos="fade-right">
          <h1 className="hero__title">
            <span className="hero__title-highlight">TNT</span> Lawns
          </h1>
          <h3 className="hero__subtitle">
            "Lawn Care with a <span className="highlight">BANG!</span>"
          </h3>
          <p className="hero__description">
            TNT Lawns is run by Truett - a local teenager who shows up, works hard, and gets the job
            done right. From mowing to trimming and cleanup, every yard is treated with focus and
            care. If you want simple, reliable lawn care that makes a real difference — you're in the
            right place.
          </p>
          <div className="hero__buttons">
            <a href="#contact" className="button button-primary">
              Get a Free Quote
            </a>
            <a href="#services" className="button button-secondary">
              My Services
            </a>
          </div>
        </div>

        <div className="hero__visual" data-aos="fade-left">
          <div className="hero__image-wrapper">
            <img src="/assets/mower.png" alt="Professional lawn mowing" className="hero__image" />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-text">Professional Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
