import React from "react";
import Borealis from "/images/vitruvian_borealis.png";
import UpliftPreview from "/images/uplift_preview.png";
import InsightsPreview from "/images/insights_preview.png";
import ArbimonPreview from "/images/arbimon_preview.png";
import AmplifiPreview from "/images/amplifi_preview.png";

import ProjectCard from "../components/ProjectCard";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="pt-[10vh] mb-[8vw] h-[85vh]">
        <div className="pl-[8vw] space-y-2">
          <p className=" text-[5.5vw] font-light leading-[5.5vw]">
            PRODUCT DESIGNER <br />& UX ENGINEER
          </p>
          <p className="text-[2vw] text-teal-300 leading-[2.5vw]">
            A creative coder with a passion for building <br />
            beautiful, impactful experiences
          </p>
        </div>
        <img className="mt-[-16vw] w-full animate-updown" alt="Vitruvian circle on abstract aurora borealis waveform" src={Borealis} />
      </div>

      {/* Project Repository */}
      <div className="flex flex-col project-list">
        <ProjectCard
          leftAlign={false}
          projectType="EDUCATION PERFECT"
          title="Insights 2.0"
          workType="UX/UI REDESIGN"
          year="2023"
          description="Redesigning a learning analytics interface to empower educators with streamlined data access"
          preview={InsightsPreview}
          linkTo="/insights"
          gradient="bg-insights-gradient"
        />
        <ProjectCard
          leftAlign={true}
          projectType="INDEPENDENT PROJECT"
          title="uplift"
          workType="PRODUCT DESIGN"
          year="2024"
          description="A fitness social media app combating gym anxiety through peer support and accountability"
          preview={UpliftPreview}
          linkTo="/uplift"
          gradient="bg-uplift-gradient"
        />
        <ProjectCard
          leftAlign={false}
          projectType="RAINFOREST CONNECTION"
          title="Arbimon"
          workType="UX/UI REDESIGN"
          year="2023"
          description="Improving workflow efficiency in a bioacoustics visualization platform"
          preview={ArbimonPreview}
          linkTo="/arbimon"
          gradient="bg-arbimon-gradient"
        />
        <ProjectCard
          leftAlign={true}
          projectType="INDEPENDENT PROJECT"
          title="Amplifi"
          workType="PRODUCT DESIGN"
          year="2022"
          description="Mobile application for monitoring and optimizing household energy consumption"
          preview={AmplifiPreview}
          linkTo="/amplifi"
          gradient="bg-amplifi-gradient"
        />
      </div>
    </div>
  );
};

export default Home;
