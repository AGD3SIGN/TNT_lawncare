import { useState, useEffect, useRef } from 'react';

const COUNTER_TARGETS = [200, 15, 2];
const COUNTER_LABELS = ['Lawns Mowed', 'Happy Clients', 'Years Exp.'];

function About() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  function animateCounters() {
    COUNTER_TARGETS.forEach((target, index) => {
      const duration = 2000;
      const interval = Math.floor(duration / target);
      let current = 0;

      const timer = setInterval(() => {
        current += 1;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
        if (current >= target) {
          clearInterval(timer);
        }
      }, interval);
    });
  }

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="about__title-highlight">TNT</span> Lawns
          </h2>
          <p className="about__description">
            Hey! I'm Truett. The teen who's behind TNT Lawns. I started this business in 2023 with a
            push mower and a few neighborhood lawns. It has been growing ever since. I might still be
            in Junior High School, but I take my work seriously - showing up to do clean solid work
            and making every yard look its best.
          </p>
          <p className="about__description">
            When I'm not out mowing, I'm probably drumming, gaming, reading a book or messing around
            with the latest technology. I like keeping things sharp - whether it's a drumbeat or a
            lawn edge. So if you're looking for reliable lawn care service with a bit of energy, i've
            got you covered!
          </p>

          <div className="about__tagline">
            TNT Lawns - One teen. One mower. Explosive results.
          </div>

          <div className="about__stats grid" ref={statsRef}>
            {COUNTER_TARGETS.map((_, index) => (
              <div
                className="about__stat"
                key={index}
                data-aos="fade-up"
                data-aos-delay={String((index + 1) * 100)}
              >
                <h3 className="about__stat-number">{counts[index]}</h3>
                <p className="about__stat-text">{COUNTER_LABELS[index]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about__img" data-aos="fade-left">
          <img
            src="/assets/About_Serious.png"
            alt="Professional lawn mowing service"
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
