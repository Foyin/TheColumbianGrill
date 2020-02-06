import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';

function Contact(props){
  return(
    <div id="con">
      <div className="locationInfo">
        <div><b>GET IN CONTACT</b></div>
        <img src="../../images/chef.jpg"/>
        <hr class="hr1"/>
        <hr class="hr2"/>
        <div class="info">
          <div><b>Where we're at </b></div>
          <div>Tell them where you are and your number and stuff</div>
        </div>
      </div>
    </div>
  ); 
}

export default Contact;
