import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 88 },
      { name: "React.js", level: 82 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "REST APIs", level: 78 },
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    skills: [{ name: "MySQL", level: 85 }],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Eclipse", level: 80 },
    ],
  },
  {
    icon: Brain,
    title: "Core Concepts",
    skills: [
      { name: "OOP", level: 90 },
      { name: "DBMS", level: 85 },
      { name: "Data Structures", level: 80 },
    ],
  },
  {
    icon: Sparkles,
    title: "Areas of Interest",
    skills: [
      { name: "Java Full Stack Development", level: 85 },
      { name: "Web Application Development", level: 88 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="container">

        <div className="section-title">
          <p>Skills</p>
          <h2>
            My <span className="text-gradient">Technical Toolkit</span>
          </h2>
        </div>

        <div className="skills-grid">

          {categories.map((category, index) => {

            const Icon = category.icon;

            return (

              <motion.div
                key={category.title}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="skill-header">

                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{category.title}</h3>

                </div>

                {category.skills.map((skill) => (

                  <div key={skill.name} className="skill">

                    <div className="skill-info">

                      <span>{skill.name}</span>

                      <span>{skill.level}%</span>

                    </div>

                    <div className="progress">

                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />

                    </div>

                  </div>

                ))}

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Skills;