import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Zap,
  Globe,
  BarChart3,
  GraduationCap,
} from "lucide-react";

const projects = [
  {
    icon: Zap,
    title: "Electricity Billing System",
    desc: "Desktop-based electricity billing application to manage customer billing records and payment details efficiently with backend logic and database integration.",
    tech: ["Java", "Swing", "MySQL"],
  },
  {
    icon: Globe,
    title: "Industrial Training Management Website",
    desc: "Responsive web application developed collaboratively with frontend, backend, and database integration.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java"],
  },
  {
    icon: BarChart3,
    title: "Smart Task Management System",
    desc: "Developed a smart task management system to create, organize, and track tasks efficiently.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: GraduationCap,
    title: "University Resource System",
    desc: "Desktop-based university management application for handling records and resources efficiently.",
    tech: ["Java", "Swing", "MySQL"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="container">

        <div className="section-title">
          <p>Projects</p>
          <h2>
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (

              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >

                <div className="project-top">

                  <div className="project-icon">
                    <Icon size={28} />
                  </div>

                  <div className="project-links">
    <button>
        <Github size={18}/>
    </button>

    <button>
        <ExternalLink size={18}/>
    </button>
</div>
</div>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="tech-stack">

                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Projects;