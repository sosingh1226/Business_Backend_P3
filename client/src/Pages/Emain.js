import React, { Component } from "react";
import Enav from './../Component/enav';

class EMain extends Component {
    render() {
      return (
    
         <div>
           <Enav />
           <h2> Hello <span class="" id="specialtxt"> username </span> </h2>
        <p> Welcome to our employee portal. Review the links above to select a task</p>


         </div> 
             
          
   
      );
    }
  }
 
export default EMain;

// This is the main page that a regular employee will see after logging in 