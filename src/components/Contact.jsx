function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title" data-aos="fade-up">
        Get In Touch
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data" data-aos="fade-right">
          <div className="contact__info">
            <div className="contact__card">
              <i className="ri-phone-line contact__card-icon"></i>
              <h3 className="contact__card-title">Call &amp; Text</h3>
              <p className="contact__card-data">(501) 946-1922</p>
            </div>

            <div className="contact__card">
              <i className="ri-mail-line contact__card-icon"></i>
              <h3 className="contact__card-title">Email Me</h3>
              <p className="contact__card-data">tntlawns23@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact__map" data-aos="fade-left">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52551.592597254596!2d-92.62259148064132!3d34.59216012712672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cd517ea2a70483%3A0xb46fc3360d845fe7!2sBenton%2C%20AR!5e0!3m2!1sen!2sus!4v1747797158858!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TNT Lawns Service Area - Benton, AR"
            ></iframe>
          </div>
          <div className="service-area">
            <h3>Service Area</h3>
            <p>
              proudly serving neighborhoods within a 30-mile radius of Benton, Arkansas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
