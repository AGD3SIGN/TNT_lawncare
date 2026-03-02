import { useState, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll listener for header background
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY >= 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracker via scroll position
  useEffect(() => {
    function handleScrollActive() {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    }

    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`header${scrolled ? ' scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="/assets/leaf.png" alt="TNT Lawns Leaf Logo" />
        </a>

        <div className={`nav__menu${menuOpen ? ' show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li className="nav__item" key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link${activeSection === link.href.replace('#', '') ? ' active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setMenuOpen(true)}
        >
          <div className={`hamburger${menuOpen ? ' active' : ''}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
