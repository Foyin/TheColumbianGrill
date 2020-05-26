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
          <div>Orders are made a Day before Delivery<br/>
                Feyi: 07084918769<br/>
                Greg: +234 703 030 5833<br/>
                Bolaji: +234 815 367 4126</div>
        </div>
      </div>
    </div>
  ); 
}

export default Contact;
