import { useState } from "react";
import SectionHeading from "./SectionHeading";

const EMAIL = "airlanggajoseph@gmail.com";

function Contact() {
  const [form, setForm] = useState({ fullname: "", email: "", details: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.fullname}`);
    const body = encodeURIComponent(
      `${form.details}\n\nFrom: ${form.fullname} (${form.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <SectionHeading title="Contact me">
        <p>
          Have questions or want to work together? Please send a message using
          from below
        </p>
      </SectionHeading>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={form.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="details"
          placeholder="Project Details..."
          value={form.details}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
