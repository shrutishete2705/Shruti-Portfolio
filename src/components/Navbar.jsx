import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "services", name: "Services" },
  { id: "projects", name: "Projects" },
  { id: "education", name: "Education" },
  { id: "contact", name: "Contact" },
];

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScroll(window.scrollY > 30);

      const current = window.scrollY + 150;

      navLinks.forEach((item) => {

        const section = document.getElementById(item.id);

        if (
          section &&
          current >= section.offsetTop &&
          current < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const goTo = (id) => {

    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  };

  return (

    <motion.header

      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}

      className={`navbar ${scroll ? "navbar-scroll" : ""}`}

    >

      <div className="container navbar-container">

        <div className="logo" onClick={() => goTo("home")}>

          <div className="logo-box">
            S
          </div>

          <h2>
            Shruti
            <span>.dev</span>
          </h2>

        </div>

        <ul className="nav-menu">

          {navLinks.map((item) => (

            <li key={item.id}>

              <button

                className={active === item.id ? "active-link" : ""}

                onClick={() => goTo(item.id)}

              >

                {item.name}

              </button>

            </li>

          ))}

        </ul>

        <button

          className="hire-button"

          onClick={() => goTo("contact")}

        >

          Hire Me

        </button>

        <button

          className="mobile-icon"

          onClick={() => setMenuOpen(!menuOpen)}

        >

          {menuOpen ? <X size={24}/> : <Menu size={24}/>}

        </button>

      </div>

      {menuOpen && (

        <motion.div

          initial={{ opacity:0,y:-20 }}
          animate={{ opacity:1,y:0 }}

          className="mobile-menu"

        >

          {navLinks.map((item)=>(

            <button

              key={item.id}

              onClick={()=>goTo(item.id)}

            >

              {item.name}

            </button>

          ))}

        </motion.div>

      )}

    </motion.header>

  );

}

export default Navbar;