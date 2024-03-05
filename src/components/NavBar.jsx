import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [selectedNav, setSelectedNav] = useState("homeNav");

  const toggleNavSelect = (e) => {
    setSelectedNav(e.currentTarget.id);
  };
  let menu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    if (menuShow) {
      setMenuShow(false);
      menu.style.display = "block";
    } else {
      setMenuShow(true);
      menu.style.display = "none";
    }
    console.log(menuShow);
  };

  const closeMenu = (e) => {
    menu.style.display = "none";
  };

  const NavLinks = [
    { link: "#home", text: "Home", id: "homeNav" },
    { link: "#about", text: "About", id: "aboutNav" },
    { link: "#projects", text: "Projects", id: "projectNav" },
    { link: "#contact", text: "Contact", id: "contactNav" },
  ];

  return (
    <motion.header
      className="flex justify-between py-8 px-6 sm:px-12 text-text-primary border-b-[1px] border-gray-600 items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <a href="/" className="font-semibold text-2xl">
          Ahmad Ali | Portfolio
        </a>
      </div>
      {/* NavBar */}
      <nav className="hidden gap-6 cursor-pointer text-center justify-center sm:flex">
        {NavLinks.map((nav) => (
          <a
            href={nav.link}
            id={nav.id}
            onClick={toggleNavSelect}
            className={
              selectedNav === nav.id
                ? "font-semibold text-primary scale-[1.4] duration-250"
                : "font-light"
            }
          >
            {nav.text}
          </a>
        ))}
      </nav>
      {/* Menu Hamburg */}
      <div className="z-20 flex sm:hidden">
        <button
          className="text-text-primary absolute w-7 h-7 right-6 top-8 z-30"
          onClick={toggleMenu}
        >
          <img
            src="/menu-icon.svg"
            alt={menuShow ? "close menu" : "open menu"}
            className="w-full h-full relative"
          />
        </button>
        <nav
          id="mobile-menu"
          className={`${menuShow ? "flex" : "hidden"} z-20`}
        >
          <ul className="absolute top-0 left-0 flex flex-col items-center gap-28 w-screen h-screen bg-gray-900/75 backdrop-filter backdrop-blur-md pt-32">
            {NavLinks.map((nav) => (
              <li key={nav.text} onClick={closeMenu}>
                <a
                  href={nav.link}
                  id={nav.id}
                  className={
                    selectedNav === nav.id
                      ? "font-semibold text-primary scale-[1.4] duration-250"
                      : "font-light"
                  }
                >
                  {nav.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default NavBar;
