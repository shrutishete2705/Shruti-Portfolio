import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "shrutiishwarshete2705@gmail.com",
    href: "mailto:shrutiishwarshete2705@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9096139775",
    href: "tel:+919096139775",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    href: "#",
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/shrutishete2705",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shruti-ishwarshete-21986227b",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Contact</p>
          <h2>
            Let's <span className="text-gradient">Build Together</span>
          </h2>
        </motion.div>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {info.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                className="contact-card"
              >
                <div className="contact-icon">
                  <Icon size={20} />
                </div>

                <div className="contact-details">
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </a>
            );
          })}
        </motion.div>

        <div className="social-links">
          {socials.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Contact;