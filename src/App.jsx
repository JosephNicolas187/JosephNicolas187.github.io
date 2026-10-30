import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Beri tahu CSS saat navbar / blur bawah sedang berada di atas bagian gelap
  useEffect(() => {
    const update = () => {
      const contact = document.getElementById("contact");
      if (!contact) return;
      const top = contact.getBoundingClientRect().top;
      document.body.classList.toggle("dark-top", top <= 40);
      document.body.classList.toggle("dark-bottom", top <= window.innerHeight - 35);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.body.classList.remove("dark-top", "dark-bottom");
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Capabilities />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Portfolio />
        </Reveal>
        <Reveal>
          <TechStack />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
      <div className="bottom-blur" aria-hidden="true" />
    </>
  );
}

export default App;
