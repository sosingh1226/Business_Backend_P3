import React from "react";
import Enav from "../Component/enav";
import Heading from "../Component/heading";
import Calendar from "../Component/schedule";
 
  function empPage() {
    return (
      <div>
       <Heading />
		   <Enav />
        <h2>EMPLOYEE PAGE</h2>
        <p>Content to be decided. Adding Calendar and request time off status </p>
    
          <Calendar />
         
        
      </div>
    );
  }
 
export default empPage;