import React, { useState, useEffect } from "react";


import Image from "next/image";
import { Inter } from "next/font/google";



const ChangesDetected = () => {

  
 
  
  

  return (
    <div >
    <div style={{display:"flex",flexDirection:"column",margin:"10px"}}>


    

    <div style={{ padding:"10px",fontSize:"20px",fontWeight:"bold" }}>     
      <p>Changes being Proposed in Sampling Stratagy</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>To further refine the sampling approach and ensure a comprehensive understanding of the waterways situation in the Preserve, additional changes are proposed in the context of chemical readings:</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>1. Regular Collection of Data from All Locations: Implement a consistent and frequent schedule for data collection across all designated locations. This ensures that the sampling process adequately captures variations in chemical concentrations over time and space.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>2. Inclusion of All Chemicals Values: Expand the scope of chemical analysis to encompass the entire list of identified toxic chemicals. Include readings for each chemical, even if their concentrations are negligible, by inserting zero values where a particular chemical is not detected. This approach ensures a holistic assessment of potential contaminants.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p> 3. Consistent Sample Collection Count: Maintain uniformity in the number of samples collected at all times across different locations. This practice enhances the reliability of the dataset and facilitates meaningful comparisons between various sampling points.</p>
    </div>
    <div style={{padding:"10px"  }}>     
      <p>By incorporating these additional changes into the sampling strategy, the data collection process becomes more robust, comprehensive, and consistent. This approach not only addresses specific concerns related to highly toxic chemicals but also ensures a standardized and thorough evaluation of the water quality across the Preserve. This refined sampling methodology forms a solid foundation for accurate environmental assessments and informed decision making regarding the protection of wildlife and ecosystems.</p>
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
      <p>By implementing these suggested changes, the sampling strategy can be enhanced to provide a more nuanced understanding of the waterways situation in the Preserve. This proactive approach aims to address specific concerns related to the presence of highly toxic chemicals and supports informed decision making for the conservation of the ecosystem and its wildlife.</p>
    </div>
     
     
     
     
    
      </div>
    </div>
  );
};

export default ChangesDetected;
