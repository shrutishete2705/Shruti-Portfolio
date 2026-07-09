import { motion } from "framer-motion";

function About() {
  return (
<section id="about" className="about">

  <div className="container">

    {/* SECTION TITLE */}
    <div className="section-title">
      <p>About Me</p>
      <h2>
        Crafting <span className="text-gradient">Digital Experiences</span>
      </h2>
    </div>

    <div className="about-container">

      {/* LEFT CONTENT */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          I’m <span className="text-gradient">Shruti Mahesh Ishwarshete</span>,
          a passionate and aspiring Java Full Stack Developer currently pursuing
          my final year B.Tech in Information Technology at M.S. Bidve Engineering College,
          graduating in 2026. I enjoy building responsive and scalable web applications
          using HTML, CSS, JavaScript, React.js, Java, and MySQL.

          <br /><br />

          My interests span both frontend and backend development, and I continuously
          improve my skills through real-world projects, self-learning, and hands-on practice.

          <br /><br />

          My goal is to create impactful digital solutions that combine performance,
          functionality, and exceptional user experience.
        </p>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="about-stats"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="stat-box">
          <h3>10+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h3>15+</h3>
          <p>Technologies Learned</p>
        </div>

        <div className="stat-box">
          <h3>200+</h3>
          <p>Problems Solved</p>
        </div>

        <div className="stat-box">
          <h3>100%</h3>
          <p>Team Collaboration</p>
        </div>

      </motion.div>

    </div>

  </div>

</section>
  );
}

export default About;
