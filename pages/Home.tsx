import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Tools from '../sections/Tools';
import Experience from '../sections/Experience';
import Certifications from '../sections/Certifications';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Education from '../sections/Education';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Experience />
      <Certifications />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default Home;