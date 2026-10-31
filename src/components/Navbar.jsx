import { useEffect, useRef, useState } from "react";
import { navLinks } from "./navLinks";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  // hidden
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        setHidden(false);
        lastY.current = 0;
        return;
      }

      if (Math.abs(currentY - lastY.current) < 8) return;

      const scrollingDown = currentY > lastY.current;
      setHidden(scrollingDown);
      if (scrollingDown) setMenuOpen(false); // menu ikut tertutup
      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // esc close hamburg menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 769px)");
    const handleResize = (e) => {
      if (e.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, []);

  const classes = ["header"];
  if (hidden) classes.push("header--hidden");
  if (menuOpen) classes.push("header--open");

  return (
    <header className={classes.join(" ")}>
      <a href="#home" className="logo">
        Joseph.
      </a>

      <nav
        id="main-nav"
        className={`navbar ${menuOpen ? "navbar--open" : ""}`}
        aria-label="Main navigation"
      >
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <a href="#contact" className="btn btn-primary">
          Contact Me
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
