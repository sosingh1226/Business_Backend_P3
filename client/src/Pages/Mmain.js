import React, { Component } from "react";
import Mnav from './../Component/mnav';

class MMain extends Component {
    render() {
      return (
    
         <div>
           <Mnav />
           <h2> Hello <span class="" id="specialtxt"> username </span> </h2>
        <p> Welcome to our employee portal. Review the links above to select a task</p>


         </div> 
             
          
   
      );
    }
  }
 
export default MMain;

// This is the main page that a Manager employee will see after logging in 
