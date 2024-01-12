import React, { useState, useEffect } from "react";


import Image from "next/image";
import { Inter } from "next/font/google";



const ChangesDetected = () => {

  
 
  
  

  return (
    <div >
    <div style={{display:"flex",flexDirection:"column",margin:"10px"}}>


    

    <div style={{ padding:"10px",fontSize:"20px",fontWeight:"bold" }}>     
      <p>The Changes We Proposed in the Sampling Stratagy</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>To further refine the sampling approach and ensure a comprehensive understanding of the waterways situation in the Preserve, additional changes are proposed in the context of chemical readings:</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>1. Regular Collection of Data from All Locations: Set up a reliable and frequent schedule to gather data from designated locations. This helps ensure that our sampling method effectively captures variations in chemical concentrations across different times and places.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>2. Inclusion of All Chemicals Values: In the revised sampling strategy, we suggest analyzing all identified toxic chemicals, regardless of their concentrations. This means including readings for each chemical, even if the levels are minimal, by inserting zero values when a specific chemical is not detected. This approach allows for a comprehensive evaluation of potential contaminants.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p> 3. Consistent Sample Collection Count: Ensure a consistent number of samples is collected across different locations at all times. This helps maintain dataset reliability and allows for meaningful comparisons between various sampling points.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>By integrating these proposed changes into our sampling strategy, we enhance the data collection process. This results in a more thorough and consistent approach, addressing concerns about highly toxic chemicals. The method ensures a standardized and comprehensive evaluation of water quality in the Preserve. This refined sampling approach establishes a strong foundation for precise environmental assessments and well-informed decision-making in the protection of wildlife and ecosystems.</p>
    </div>

 

    </div>

    <div style={{display:"flex",flexDirection:"column",margin:"20px"}}>

    <h1 style={{padding:"10px",fontSize:"20px",fontWeight:"bold"}}>Question 3: After reviewing the data, do any of your findings cause particular concern for the Pipit or other wildlife? Would you suggest any changes in the sampling strategy to better understand the waterways situation in the Preserve?   </h1>



    <div style={{padding:"10px"  }}>     
      <p>After a thorough examination of the data, certain findings raise concerns regarding the potential impact on the Pipit and other wildlife in the Preserve. Notably, highly toxic chemicals, including Methylosmoline, AOX, Arsenic, and Lead, were identified at varying concentrations across different locations.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>Specifically, Methylosmoline is prominently present in Kohsoom and Somchair, while AOX is detected in Boonsri and Kohsoom. Arsenic is notably concentrated in Kohsoom, and Lead is identified in Busarakhan, Somchair, Kanika, and Chai.</p>
    </div>

<div style={{ display: "flex" }}>

 <Image  width={500}
      height={500} src="/images/toxic1.jpeg" alt="Anomalies Detected" style={{ width: "50%", marginRight: "10px" }} />
 <Image  width={500}
      height={500} src="/images/toxic2.jpeg" alt="Data Inconsistency" style={{ width: "50%" }} />

</div>

<div style={{ display: "flex" }}>

 <Image  width={500}
      height={500} src="/images/toxic3.jpeg" alt="High Value Rows" style={{ width: "50%", marginRight: "10px" }} />
 <Image  width={500}
      height={500} src="/images/toxic4.jpeg" alt="High Value Rows" style={{ width: "50%" }} />

</div>
      
      <div style={{ display: "flex" }}>

       <Image  width={500}
      height={500} src="/images/toxic5.jpeg" alt="High Value Rows" style={{ width: "50%", marginRight: "10px" }} />
      <Image  width={500}
      height={500} src="/images/toxic6.jpeg" alt="High Value Rows" style={{ width: "50%" }} />

</div>      
       
       <h1 style={{padding:"10px",fontSize:"20px",fontWeight:"bold"}}>Would you suggest any changes in the sampling strategy to better understand the waterways situation in the Preserve?   </h1>
     
       <div style={{padding:"10px"  }}>     
      <p>To better comprehend and address these concerns, several recommendations are proposed for enhancing the sampling strategy:</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>1. Daily Water Temperature Collection: Implement daily monitoring of water temperature to understand its potential influence on the distribution and behavior of the identified toxic chemicals.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>2. Consistent Data Collection with Water Sensors: Ensure consistent and reliable data collection by employing advanced water sensors, minimizing the risk of inconsistencies or gaps in the dataset.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>3. Inclusion of Geo Locations of Industries:Incorporate the geographic locations of nearby industries along with information on potential chemical releases, providing valuable context for understanding pollutant sources.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>4. Uniform Unit Recording for Chemicals: Standardize the units for recording all identified chemicals, facilitating a more accurate and comprehensive analysis of their concentrations and potential environmental impact.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>5. Documentation of River Stream Flow Direction: Specify the direction of river stream flow, indicating whether the sampling locations are upstream or downstream. This information is crucial for understanding the transport and dispersion of toxic substances.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>Implementing these proposed changes improves the sampling strategy, leading to a more detailed understanding of the waterways in the Preserve. This proactive approach specifically targets concerns about highly toxic chemicals, facilitating well-informed decisions for conserving the ecosystem and its wildlife.</p>
    </div>
     
     
     
     
    
      </div>
    </div>
  );
};

export default ChangesDetected;
