import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import email from '../../assets/contact/emailIcon.png' 
import linkedIn from '../../assets/contact/linkedinIcon.png' 
import git from '../../assets/contact/githubIcon.png' 

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:myemail@email.com">financebro@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedIn}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/financebro</a>
        </li>
        <li className={styles.link}>
          <img src={git} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/financebro</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact