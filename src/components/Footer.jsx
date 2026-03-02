function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <span className="logo-text">TNT</span> Lawns
          </a>
          <p className="footer__description">Explosive Results for Your Lawn</p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Services</h3>
          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Mowing
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Weedeating
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Mulching
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Edging
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Company</h3>
          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="footer__link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="footer__link">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copy">
        <p>
          &copy; 2025 TNT Lawns. All rights reserved. | Developed by{' '}
          <a href="https://www.brandonjosephtorres.com">Brandon Torres</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
