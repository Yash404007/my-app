import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";


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
          <Link to='/About'>
              <div>About</div>
            </Link>           </li>
          <li>
            <Link to='/Analysis'>
            <div>Analysis</div>
            </Link>
          </li>
          <li>
            <Link to='/Projects'>
              <div>Assessment</div>
            </Link>       
          </li>
          <li>
            <Link to='/Contact'>
              <div>Contact</div>
            </Link>           
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar