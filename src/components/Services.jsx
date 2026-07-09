import { motion } from "framer-motion";
import {
  Monitor,
  Layers,
  Server,
  Database,
  Smartphone,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Web Development",
    desc: "Building responsive and user-friendly websites using HTML, CSS, JavaScript and React.",
  },
  {
    icon: Layers,
    title: "Java Full Stack Development",
    desc: "Developing complete web applications using Java, Spring Boot, React and MySQL.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Creating REST APIs and backend logic with Java Spring Boot.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Designing and managing MySQL databases with efficient queries.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    desc: "Building websites that work perfectly on desktop, tablet and mobile devices.",
  },
  {
    icon: Palette,
    title: "UI Design",
    desc: "Creating clean, modern and attractive user interfaces.",
  },
];

function Services() {
  return (
    <section id="services" className="services">

      <div className="container">

        <div className="section-title">
          <p>Services</p>
          <h2>
            What I <span className="text-gradient">Can Do</span>
          </h2>
        </div>

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="service-icon">
                  <Icon size={30} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Services;