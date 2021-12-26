import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import WorkingHours from "../WorkngHours/WorkingHours";
import Medicines from "./Medicines/Medicines";
import OurMission from "./OurMission/OurMission";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <WorkingHours></WorkingHours>
      <Services></Services>
      <OurMission></OurMission>
      <Medicines></Medicines>
    </div>
  );
};

export default Home;
