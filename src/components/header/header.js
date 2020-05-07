import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/
      
      
            <header id="home">
              <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  
                </ul> {/* end #nav */}
              </nav> {/* end #nav-wrap */}
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">I'm Mrinal Tyagi.</h1>
                  <h3>I'm an <span>IIT Mandi </span> based<span> CSE Undergrad (B.TECH) student</span>, <span>Developer</span> and <span>Webdesigner</span> working and collaborating with developers to find and create solutions of the future . Let's <a className="smoothscroll" href="#about">start scrolling </a>
                    and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                  <hr />
                  <ul className="social">
                    <li><a href="http://www.linkedin.com/in/mrinal-tyagi-a8bb61179"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="https://github.com/mrityagi"><i className="fa fa-github" /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100006664187718&ref=bookmarks"><i className="fa fa-facebook" /></a></li>
                    
                    <li><a href="https://www.instagram.com/mrityagi"><i className="fa fa-instagram" /></a></li>
                   </ul>
                </div>
              </div>
              <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
              </p>
            </header>
          
        }
      
      
      
      </React.Fragment>
    );
  }
}