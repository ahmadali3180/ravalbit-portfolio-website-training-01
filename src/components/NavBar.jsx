import React, { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [selectedNav, setSelectedNav] = useState("homeNav");

  const toggleNavSelect = (e) => {
    setSelectedNav(e.currentTarget.id);
  };

  return (
    <motion.header
      className="flex justify-between py-8 px-12 text-text-primary border-b-[1px] border-gray-600 items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <a href="/" className="font-semibold text-2xl">
          Ahmad Ali | Portfolio
        </a>
      </div>
      <nav className="flex gap-6 cursor-pointer text-center justify-center">
        <a
          href="#home"
          id="homeNav"
          onClick={toggleNavSelect}
          className={
            selectedNav === "homeNav"
              ? "font-semibold text-primary scale-[1.4] duration-250"
              : "font-light"
          }
        >
          Home
        </a>
        <a
          href="#about"
          id="aboutNav"
          onClick={toggleNavSelect}
          className={
            selectedNav === "aboutNav"
              ? "font-semibold text-primary scale-[1.4] duration-250"
              : "font-light"
          }
        >
          About
        </a>
        <a
          href="#projects"
          id="projectsNav"
          onClick={toggleNavSelect}
          className={
            selectedNav === "projectsNav"
              ? "font-semibold text-primary scale-[1.4] duration-250"
              : "font-light"
          }
        >
          Projects
        </a>
        <a
          href="#contact"
          id="contactNav"
          onClick={toggleNavSelect}
          className={
            selectedNav === "contactNav"
              ? "font-semibold text-primary scale-[1.4] duration-250"
              : "font-light"
          }
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
};

export default NavBar;
