function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-image">
        {/* <div className="hero-shape hero-shape--shadow" />
        <div className="hero-shape" /> */}
        <img
          src="/images/gweh.svg"
          alt="Foto Joseph"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>

      <div className="hero-text">
        <h1>
          Hello! I’m Joseph.
          <br />
          <span className="highlight-container">
            <span className="side-left">A UI</span>
            <span className="side-right">UX Designer.</span>
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
