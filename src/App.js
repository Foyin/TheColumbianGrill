import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import Home from './components/pages/Home';
import Contact from './components/Contact';
import logo from './logo.svg';
import './App.css';

library.add(faBars);
document.addEventListener("touchstart", function() {},false);
var duration = 20; // duration in seconds
var fadeAmount = 0.3; // fade duration amount relative to the time the image is visible

$(document).ready(function() {  
  $("#js-navbar-toggle").click(function(){
      $("#js-menu").fadeToggle(function() {
        $("#js-menu").toggleClass('active');

      });
  });

  if($(window).width() < 768){
    $(".options").click(function(){
        $("#js-menu").fadeToggle(function() {
          $("#js-menu").toggleClass('active');
        });
    })
  }

  if($(window).width() < 768){
    $(".main-nav").css("display","none");
  }
  else{
    $(".main-nav").css("display","flex");
  }

  $(window).on("scroll", function() {
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var scrollHeight = $(document).height();
    if ($(window).scrollTop() <= ($(".menuNav").height() + $(".menuMessage").height()) || (scrollHeight - scrollPosition) / scrollHeight === 0) {
        $(".up").fadeOut();
    } else {
        $(".up").fadeIn();
    }
    if ($(window).scrollTop() === 0) {
        $(".mainNav").css('background', 'rgba(255, 255, 255, .1)');
    } else if ($(window).scrollTop() > 0) {
        $(".mainNav").css('background', 'rgba(255, 255, 255, .1)');
    }
  });

  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".hideme, .nav-links, .logo").each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
            
        
    });
  }).scroll(); //invoke scroll-handler on page-load

  var images = $("#Gallery img");
  var numImages = images.length - 1;
  var durationMs = duration * 3000;
  var imageTime = durationMs / numImages; // time the image is visible 
  var fadeTime = imageTime * fadeAmount; // time for cross fading
  var visibleTime = imageTime  - (imageTime * fadeAmount * 2);// time the image is visible with opacity == 1
  var animDelay = visibleTime * (numImages - 1) + fadeTime * (numImages - 2); // animation delay/offset for a single image 
  
  images.each( function( index, element ){
    if(index != 0){
      $(element).css("opacity","0");
      setTimeout(function(){
        doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
      },visibleTime*index + fadeTime*(index-1));
    }else{
      setTimeout(function(){
        $(element).animate({opacity:0},fadeTime, function(){
          setTimeout(function(){
            doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
          },animDelay )
        });
      },visibleTime);
    }
  });
});

// creates a animation loop
function doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime){
  fadeInOut(element,fadeInTime, visibleTime, fadeOutTime ,function(){
    setTimeout(function(){
      doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime);
    },pauseTime);
  });
}

// shorthand for in- and out-fading
function fadeInOut( element, fadeIn, visible, fadeOut, onComplete){
  return $(element).animate( {opacity:1}, fadeIn ).delay( visible ).animate( {opacity:0}, fadeOut, onComplete);
}

class ScrollTop extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      let mainNav = document.getElementById("js-menu");
      mainNav.classList.toggle("active");
    }
  }

  render() {
    return this.props.children;
  }
}
const ScrollToTop = withRouter(ScrollTop);

function MainNav(props) {
  return  ( <Router>
              <div className="mainNav"> 
                  <span class="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon={faBars} />
                  </span>
                  <a href="#" class="logo"><img src='../../images/cgIcons/newCB.png'/></a>
                  <div className="main-nav" id="js-menu">
                    <a href="#main1" className="options nav-links"> <b>MENU</b> </a>
                    <a href="#con" className="options nav-links" id="contact"><b>CONTACT</b></a>
                    <a href="#Gallery" className="options nav-links">  <b>GALLERY</b> </a>
                  </div>
              </div>
              <ScrollToTop>
              <Switch>
                <Route exact path="/*" component={Home} />
              </Switch>
              </ScrollToTop>
              <Contact/>
            </Router> );
}

export default MainNav;
