import React from "react";
import Image from "next/image"
import { Inter } from "next/font/google"


const SideBySideImagesWithText = ({ src1, text1, src2}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
     <div
     style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <p>{text1}</p>
     </div>

      <div style={{ display: "flex" }}>
        <div >
        
          <Image  width={800}
      height={800} src={src1} alt="Image 1"  />
          
        </div>
        <div style={{margin:"10px"}}></div>
        <div >
        
          <Image  width={800}
      height={800} src={src2} alt="Image 2"  />
          
        </div>
      </div>
    </div>
  );
};

export default SideBySideImagesWithText;
