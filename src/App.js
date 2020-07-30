import React from 'react';
import './App.css';
import Header from './Component/Header'
import Hero from './Component/Hero'
import About from './Component/AboutDir/About'
import Facts from './Component/FactsDir/Facts'
import Skills from './Component/SkillsDir/Skills'
import Resume from './Component/ResumeDir/Resume'
import Portfolio from './Component/PortfolioDir/Portfolio'
import Services from './Component/ServicesDir/Services'
import Testimonial from './Component/TestimonialDir/Testimonial'
import Contact from './Component/ContactDir/Contact'
import ScrollToTop from 'react-scroll-up'
import ScrollButton from 'react-scroll-button'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"

function App() {
  return (
    <div className="App">
        {/* <!-- ======= Header ======= --> */}
        <Header></Header>
        {/* <!-- End Header --> */}
        {/* <!-- ======= Hero Section ======= --> */}
        <Hero></Hero>
        {/* <!-- End Hero --> */}
        {/* ###### MAIN ######## */}
        <main id="main">
          <About></About>
          <Facts></Facts>
          <Skills></Skills>
          <Resume></Resume>
          <Portfolio></Portfolio>
          <Services></Services>
          <Testimonial></Testimonial>
          <Contact></Contact>        
        </main>        
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType='easeOutCubic'
          AnimationDuration={500}
          ContainerClassName='ScrollUpButton__Container'
          TransitionClassName='ScrollUpButton__Toggled'          
          style={{ backgroundColor:'#149ddd', fill: 'white', border:'none' }}
       />
    </div>
  );
}

export default App;
