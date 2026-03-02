import { useEffect } from 'react';
import AOS from 'aos';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <ProgressBar />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
