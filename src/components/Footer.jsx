import { navLinks } from "./navLinks";
import { ShapeIcon, MailIcon, PhoneIcon } from "./Icons";

// Ganti href dan label sesuai akun sosial media kamu
const socials = [
  { label: "Social 1", href: "#" },
  { label: "Social 2", href: "#" },
  { label: "Social 3", href: "#" },
  { label: "Social 4", href: "#" },
];

function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Footer navigation">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="social-links">
        {socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} aria-label={social.label}>
              <ShapeIcon size={26} />
            </a>
          </li>
        ))}
      </ul>

      <address className="footer-contact">
        <a href="mailto:airlanggajoseph@gmail.com">
          <MailIcon />
          airlanggajoseph@gmail.com
        </a>
        <a href="tel:+6288221352727">
          <PhoneIcon />
          +62 8822 1352 727
        </a>
      </address>
    </footer>
  );
}

export default Footer;
