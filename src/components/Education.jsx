import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech in Information Technology",
    org: "M.S. Bidve Engineering College",
    year: "Expected 2026",
    score: "8.23 CGPA",
    desc: "Final year student focusing on Full Stack Development, DBMS and Software Engineering.",
  },
  {
    icon: BookOpen,
    title: "Diploma in Information Technology",
    org: "Puranmal Lahoti Government Polytechnic",
    year: "Completed 2023",
    score: "85%",
    desc: "Built strong foundations in programming, web technologies and database management.",
  },
  {
    icon: School,
    title: "Schooling",
    org: "Shri Deshikendra High School, Latur",
    year: "Completed 2020",
    score: "94.40%",
    desc: "Completed schooling with an excellent academic record and interest in computers.",
  },
];

function Education() {
  return (
    <section id="education" className="education">

      <div className="container">

        <div className="section-title">
          <p>Education</p>
          <h2>
            Academic <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="education-timeline">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >

                {/* Card */}

                <div className="education-card">

                  <div className="education-top">

                    <span className="education-year">
                      {item.year}
                    </span>

                    <span className="education-score">
                      {item.score}
                    </span>

                  </div>

                  <h3>{item.title}</h3>

                  <p className="education-org">
                    {item.org}
                  </p>

                  <p>{item.desc}</p>

                </div>

                {/* Timeline Icon */}

                <div className="timeline-icon">
                  <Icon size={22} />
                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Education;