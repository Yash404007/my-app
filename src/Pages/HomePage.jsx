import React from 'react'
import  About  from "../components/About/About";
import  Contact  from "../components/Contact/Contact";
import  Hero  from "../components/Hero/Hero";
import  Projects  from "../components/Projects/Projects";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage