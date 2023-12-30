import React, { useState, useEffect } from "react";
import Image from "next/image"
import { Inter } from "next/font/google"
const TrendsObserved = () => {

 

  return (
    <div style={{padding:"20px",margin:"20px"}}>
      <h1 style={{padding:"10px",fontSize:"20px",fontWeight:"bold"
      }}>Question 1 : Characterize the past and most recent situation with respect to chemical contamination in the Boonsong Lekagul waterways. Do you see any trends of possible interest in this investigation?  
 </h1>
      
      
      <div style={{ display: "flex" }}>

       <Image  width={500}
      height={500} src="/images/q_1.jpg" alt="Trend Image" style={{ width: "50%", marginRight: "10px" }} />
      <Image  width={500}
      height={500} src="/images/q1.jpeg" alt="Trend Image" style={{ width: "50%" }} />
     
    </div>
    
    </div>
  );
};

export default TrendsObserved;