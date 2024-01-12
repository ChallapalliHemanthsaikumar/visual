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
    <div style={{ padding: "20px", margin: "20px" }}>
      <h1 style={{ color: "black", fontSize: "30px", fontWeight: "bolder" }}>About</h1>
      <p>Our focus centered on tackling pivotal challenges associated with the Boonsong Lekagul waterways. Herein, we outline some of the issues our efforts were directed towards resolving: </p>
      <ol>
        <li>Examine the past and current status of chemical contamination in the Boonsong Lekagul waterways, identifying notable trends observed throughout the investigation.</li>
        <li>Evaluate the impact of anomalies discovered in the waterway samples dataset on environmental analysis, assess the sufficiency of data collection by the Hydrology Department, and suggest modifications to the sampling approach for a better understanding.</li>
        <li>Review the findings to identify potential concerns for Pipit and other wildlife, and propose adjustments to the sampling to enhance the understanding of the waterways situation in the Preserve.</li>
      </ol>
      <p> Each submission for the above questions should contain limited images and word count to ensure concise and informative analysis.</p>
    </div>

      <div style={{padding:"20px",margin:"20px"}}>
      <h1 style={{ color: "black" ,fontSize: "30px",fontWeight:"bolder"}}>Tools Utilized</h1>
      <p style={{paddingBottom:"10px"}}>
      In our efforts to analyze and visualize data, we utilized various tools and technologies in our project. Some important tools we used include:      
      </p>
      <ul>
        <li> <p style={{ color: "black" ,fontSize: "20px",fontWeight:"bold"}}>Tableau</p>  Leveraged for interactive and insightful data visualization.</li>
        <li>  <p style={{ color: "black" ,fontSize: "20px",fontWeight:"bold"}}> Python </p> Utilized for data processing, analysis, and statistical modeling.</li>
        <li> <p style={{ color: "black" ,fontSize: "20px",fontWeight:"bold"}}>D3  </p> Employed for creating dynamic and interactive data visualizations on the web.</li>
        <li> <p style={{ color: "black" ,fontSize: "20px",fontWeight:"bold"}} >OpenRefine</p>  Played a crucial role in data cleaning and transformation, ensuring data quality.</li>
      </ul><br>
      <p>
      These tools were instrumental in different phases of our project, aiding in data cleaning, analysis, and presentation, allowing us to derive meaningful insights and present them in an engaging manner.
      </p></br>
      </div>
    </div>
  );
};

export default TeamPage;
