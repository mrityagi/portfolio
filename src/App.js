import React, { Component } from 'react';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Resume from './components/resume/resume.js';
import resumeData from './resumeData';
import Portfolio from './components/portfolio/portfolio.js';

import Footer from './components/footer/footer.js';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume />
        
        <Footer />
      </div>
    );
  }
}
export default App;