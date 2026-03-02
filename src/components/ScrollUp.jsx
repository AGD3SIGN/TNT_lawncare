import { useState, useEffect } from 'react';

function ScrollUp() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScroll(window.scrollY >= 200);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#"
      className={`scrollup${showScroll ? ' show-scroll' : ''}`}
      id="scroll-up"
      aria-label="Scroll to top"
    >
      <i className="ri-arrow-up-line scrollup__icon"></i>
    </a>
  );
}

export default ScrollUp;
