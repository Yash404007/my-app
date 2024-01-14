import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import HeroImg from '../../assets/hero/heroImage.png' 
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Folks!!</h1>
        <p className={styles.description}>
          
"Experience financial empowerment through our cutting-edge app, seamlessly
 blending AI and financial expertise to optimize your investments for a prosperous future."
        </p>
        <a href="https://zerodha.com/" className={styles.contactBtn}>
          Get Started
        </a>
      </div>
      <img
        src={HeroImg}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero