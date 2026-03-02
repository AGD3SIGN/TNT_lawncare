const services = [
  {
    icon: 'ri-scissors-cut-line',
    title: 'Mowing',
    description:
      'Expert lawn cutting that leaves your yard looking sharp, clean, and ready to impress the whole neighborhood.',
    price: 'Minimum of $25',
    delay: '0',
  },
  {
    icon: 'ri-plant-line',
    title: 'Weedeating',
    description:
      'Detailed trimming that keeps edges crisp and every corner looking clean — the finishing touch your yard deserves.',
    price: 'Minimum of $10',
    delay: '100',
  },
  {
    icon: 'ri-leaf-line',
    title: 'Mulching',
    description:
      'Thorough leaf mulching that clears your yard of debris and leaves it looking neat, clean, and ready for the season.',
    price: 'Minimum of $25',
    delay: '200',
  },
  {
    icon: 'ri-ruler-line',
    title: 'Edging',
    description:
      'Clean, defined edges for lawns and garden beds that provide a professional looking edge.',
    price: 'Minimum of $15',
    delay: '300',
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title" data-aos="fade-up">
        My Services
      </h2>

      <div className="services__container container grid">
        {services.map((service) => (
          <div
            className="service__card"
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={service.delay}
          >
            <div className="service__icon">
              <i className={service.icon}></i>
            </div>
            <h3 className="service__title">{service.title}</h3>
            <p className="service__description">{service.description}</p>
            <p className="service__price">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
