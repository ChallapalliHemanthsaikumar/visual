import Image from "next/image"
import { Inter } from "next/font/google"
import React, { useState, useEffect } from "react";
import TeamPage from "./team";
import Headtitle from "./components/title"
import TrendsObserved from "./components/trend";
import AnomaliesDetected from "./components/anamoly";
import ChangesDetected from "./components/birds";
// Inside some other component or page


export default function Home() {
  return (
    <div>
    <Headtitle title={"Our Take on Mini-Challenge 2 of The 2018 VAST Challenge"}/>
      <TeamPage/>
      <TrendsObserved />
      <AnomaliesDetected />
      <ChangesDetected />
      <div style={{margin:"10px",padding:"10px",flexDirection:"row"}}>
        <h1 style={{fontWeight:"bold"}}>Github Server Link For Radial Stack Chart : </h1>
        <p> <a href="https://challapallihemanthsaikumar.github.io/radial.github.io/">https://challapallihemanthsaikumar.github.io/radial.github.io/ </a></p>
      </div>
     <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> <Image  width={500}
      height={500} src="/chart.svg" alt="Chart" style={{display:"flex",alignContent:"center"}} />
     </div>
    </div>
  )
}
