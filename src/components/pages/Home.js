import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faFire } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../../logo.svg';
import '../../App.css';

library.add(faChevronDown, faFire);

function LandingHeader(props){
  return (
    <div className="LandingHeader parallax">
      <img src='../../images/chickenGif.gif'/>
      <div className="tagLine">Something cool about the food</div>
      <div className="landingMessage">
        GET IT WHILE IT'S<span style={{color:"#FE3302"}}><b> HOT <FontAwesomeIcon icon={faFire} /></b></span>
        <div>Sicario <span style={{color:"#FE3302"}}><b>TURKEY</b></span></div>
      </div>
      <a href="#NotificationSection">
      <div className="arrow" id="arr">
        <FontAwesomeIcon icon={faChevronDown} />
      </div></a>
      <hr class="hr1"/>
      <hr class="hr2"/>
    </div>
  );
}

function LandingMainLayout(props){
  return(
    <div id="main1" className="landingMainLayout parallax centerMessage">
        <img 
          width='400vw'
          height='500vh'
          src='../../images/cgmenu.JPG'
        />
      </div>
  ); 
}

function LandingSecondSection(props){
  return(
    <div  id="LandingSecondSection">
          <div>{props.line1}</div>
          <div>{props.line2}</div>
    </div>
  ); 
}

function NotificationSection(props){
  return(
    <div  id="NotificationSection">
          <span>
            {props.line1}
            <div>
              {props.line2}
          </div>
          </span>
          <img 
            src='images/pasta2.jpg'
           />
    </div>
  ); 
}

function LandingInfoSection(props){
  return(
    <div  className="LandingInfoSection">
          <div className="LandingInfoSectionLines" id="line1id">{props.line1}</div>
          <div className="LandingInfoSectionLines"  id="line2id">{props.line2}</div>
          <div className="LandingInfoSectionLines"  id="line3id">{props.line2}</div>
          <div className="LandingInfoSectionLines"  id="line4id">{props.line2}</div>
    </div>
  ); 
}

function Gallery(props){
  return(
  <div className="GallerySection">
    <div  id="Gallery">
          <img src="../../images/chicken1.jpg"/>
          <img src="../../images/burger.jpg"/>
          <img style={{backgroundPosition:"0% 85%"}}src="../../images/sub.jpg"/>
          <img src="../../images/chickenGrill.jpg"/> 
          <img src="../../images/chickenGrill2.jpg"/> 
          <img src="../../images/grill2.jpg"/> 
          <img src="../../images/grill.jpg"/> 
          <img src="../../images/chef2.jpg"/> 
          <img src="../../images/cgmainLanding.jpeg"/> 

    </div>
        <div className="GalleryTitle"><b>GALLERY</b></div>

  </div>
  ); 
}

function About(props){
  return(
    <div className="about hideme" id="about">
        <p><b>Our Food</b></p>
        We are a small Centretown pizzeria serving gourmet pizza, panzerottis and so much more at good prices. Pavarazzi has been open since 1999 and we were voted best pizzeria in ottawa by the Ottawa sun from 2001 to 2005. We have a strong loyal local clintele and we welcome everyone to come try our delicious food.     
    </div>
  ); 
}

function Home() {
  return (
    <div>
      <LandingHeader/>
      <NotificationSection line1="About Us" line2="story"/>
      <LandingMainLayout button="MENU"/>
      <Gallery/>
    </div>
  );
}

export default Home;
