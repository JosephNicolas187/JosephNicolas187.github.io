import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="about">
      <SectionHeading title="About me">
        <blockquote>
          “Don’t waste your time chasing butterflies. Mend your garden, and the
          butterflies will come.”
        </blockquote>
      </SectionHeading>

      <p className="about-description">
        A Bachelor's graduate in Informatics from Sanata Dharma University with
        a strong interest in Software Development and UI/UX Design. Possesses
        solid communication skills, a strong sense of responsibility, and the
        ability to perform effectively under pressure. Comfortable working both
        independently and as part of a team, with a quick ability to adapt to
        new environments. Eager to contribute positively across various
        professional fields in the future.
      </p>

      <div className="about-actions">
        <a href="#contact" className="btn btn-primary">
          Contact Me
        </a>
        <a href="/files/CV.pdf" className="btn btn-outline" download>
          Download CV
        </a>
      </div>
    </section>
  );
}

export default About;
