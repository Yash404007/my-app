import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";
import closeIcon from '../../assets/nav/closeIcon.png'
import MenuIcon from '../../assets/nav/menuIcon.png'


 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Finance Bro
      </a>
      <div className={styles.menu}>
        {/* <img
          className={styles.menuBtn}
         src={MenuIcon} 
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        /> */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar