import React, { useState, useEffect } from "react";

import SideBySideImagesWithText from "./sidebyside";
import Image from "next/image"
import { Inter } from "next/font/google"

const AnomaliesDetected = () => {

  return (
    <div  style ={{padding:"10px",margin:"20px"}}>

      <h1 style={{padding:"10px",fontSize:"20px",fontWeight:"bold"}}>Question 2: What anomalies do you find in the waterway samples dataset?  How do these affect your analysis of potential problems to the environment? Is the Hydrology Department collecting sufficient data to understand the comprehensive situation across the Preserve? What changes would you propose to make in the sampling approach to best understand the situation?  </h1>
       <SideBySideImagesWithText src1="/images/anamoly_iron.jpeg"
        text1="Upon scrutinizing the waterway samples dataset, a notable anomaly was identified in the form of elevated iron concentrations. To address this data inconsistency within the Hydrology Department's collection, 46 rows featuring unusually high values were removed from the dataset, ensuring the integrity of the analysis by retaining 136,824 valid values. "
        src2="/images/openrefine.jpeg"
        />

       <SideBySideImagesWithText src1= "/images/q2_1.jpeg"
        text1={"Concerns arise regarding the sufficiency of data collected by the Hydrology Department to comprehend the comprehensive situation across the Preserve. Analyzing the total records per month for each location spanning from 1999 to 2016, it was observed that Achara, Decha, and Tansanee commenced sample collection from the year 2009 onwards. This shift in the data collection practice introduces an inconsistency, notably evident in the year 2009 across all locations."}
        src2="/images/q2_2.jpeg"
        
      /> 
      
      
    </div>
  );
};

export default AnomaliesDetected;
