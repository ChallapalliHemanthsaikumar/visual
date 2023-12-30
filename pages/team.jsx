// TeamPage.js

import React from "react";

const TeamPage = () => {
  const teamMembers = [
    "Hemanth Sai Kumar Challapalli",
    "Kavitha Padala",
    "Akshat Satishkumar Patel",
    "Maharshi NimeshKumar Raval",
    "Chitralekha Kalavala",
  ];

  return (
    <div>
    <div className="team-container">
      <h1 className="team-heading" style ={{color: "black" ,fontSize: "30px",fontWeight:"bolder"}}>Team Members</h1>
      <ul className="team-list">
        {teamMembers.map((member, index) => (
          <li key={index} className="team-member">
            {member}
          </li>
        ))}
      </ul>
     

      <style jsx>{`
        .team-container {
          margin: 20px;
          padding: 20px;
          
          
          
        }

        .team-heading {
          font-size: 24px;
          margin-bottom: 16px;
          color: #333;
        }

        .team-list {
          list-style-type: none;
          padding: 0;
          font-weight:bold;
        }

        .team-member {
          margin-bottom: 8px;
          font-size: 18px;
        }
      `}</style>


    </div>
    <div style={{padding:"20px",margin:"20px"}}>
    <h1  style={{ color: "black" ,fontSize: "30px",fontWeight:"bolder"}}>About</h1>
    <p>
        `We have been focused on addressing critical challenges related to the Boonsong Lekagul waterways. Here are some of the problems weve aimed to solve:`
      </p>
      <ol>
        <li>
          Characterize the past and most recent situation with respect to chemical contamination in the Boonsong Lekagul waterways. Identify any trends of interest within the investigation.
        </li>
        <li>
          Analyze anomalies found in the waterway samples dataset, evaluating their impact on environmental analysis. Assess the sufficiency of data collection by the Hydrology Department and propose changes in the sampling approach for a comprehensive understanding.
        </li>
        <li>
          Review findings to determine any concerns for Pipit or other wildlife. Recommend alterations in the sampling strategy to better comprehend the waterways situation in the Preserve.
        </li>
      </ol>
      <p>
        Each submission for the questions should contain limited images and word count to ensure concise and informative analysis.
      </p>
      </div>
      <div style={{padding:"20px",margin:"20px"}}>
      <h1 style={{ color: "black" ,fontSize: "30px",fontWeight:"bolder"}}>Tools Utilized</h1>
      <p style={{paddingBottom:"10px"}}>
        In our endeavor to analyze and visualize data effectively, we employed several tools and technologies throughout our project. Some of the key tools include:
      </p>
      <ul>
        <li> <p style={{ color: "black" ,fontSize: "20px",fontWeight:"bold"}}>Tableau</p>  Leveraged for interactive and insightful data visualization.</li>
        <li>  <p style={{ color: "black" ,fontSize: "20px",fontWeight:"bold"}}> Python </p> Utilized for data processing, analysis, and statistical modeling.</li>
        <li> <p style={{ color: "black" ,fontSize: "20px",fontWeight:"bold"}}>D3  </p> Employed for creating dynamic and interactive data visualizations on the web.</li>
        <li> <p style={{ color: "black" ,fontSize: "20px",fontWeight:"bold"}} >OpenRefine</p>  Played a crucial role in data cleaning and transformation, ensuring data quality.</li>
      </ul>
      <p>
        These tools were instrumental in different phases of our project, aiding in data cleaning, analysis, and presentation, allowing us to derive meaningful insights and present them in an engaging manner.
      </p>
      </div>
    </div>
  );
};

export default TeamPage;
