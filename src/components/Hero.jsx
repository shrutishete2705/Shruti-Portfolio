import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Download } from "lucide-react";
import profile from "../assets/profile.jpeg";

const roles = [
  "Java Developer",
  "Full Stack Developer",
  "React Developer",
  "Backend Developer"
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [erase, setErase] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typing effect
  useEffect(() => {
    const current = roles[index];
    const timer = setTimeout(() => {
      if (!erase) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setErase(true), 1200);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setErase(false);
          setIndex((index + 1) % roles.length);
        }
      }
    }, erase ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, erase, index]);

  // Mouse parallax tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-shape"></div>
<div className="hero-shape2"></div>
      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi There, I'm
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Shruti Mahesh <span className="text-gradient">Ishwarshete</span>
          </motion.h1>

          <motion.h3
  className="hero-role text-gradient"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
>
  {text}
  <span className="cursor">|</span>
</motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Passionate Java Full Stack Developer dedicated to building modern,
            responsive and scalable web applications using Java, React,
            JavaScript and MySQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="hero-buttons"
          >
            <a href="#contact" className="btn">
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1YwofkCtHPkzbOzVNnQ_Hyt1Q2ny7XNJJ/view"
              target="_blank"
              className="btn"
            >
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="hero-image"
        >
          <motion.div
            style={{
              transform: `rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg)`
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="image-box"
          >
            <img src={profile} alt="Shruti" />
          </motion.div>

          {/* Background Glow */}
          <motion.div
            className="hero-bg"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Floating Orbs */}
          <motion.div
            className="orb orb1"
            style={{
              transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`
            }}
          />
          <motion.div
            className="orb orb2"
            style={{
              transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`
            }}
          />
          <motion.div className="orb orb3" />
          <motion.div className="orb orb4" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
