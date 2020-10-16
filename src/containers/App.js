import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class App extends Component {
  render(){
    return (
      <div>
        <Element name="Navbar" className="element" >
            <Navbar />
        </Element>
        <Element name="About" className="element" >
            <About />
        </Element>
        <Element name="Skills" className="element" >
            <Skills />
        </Element>
        <Element name="Education" className="element" >
            <Education />
        </Element>
        <Element name="Projects" className="element" >
            <Projects />
        </Element>
        
      </div>
    );
  }
}

export default App;