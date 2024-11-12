import { Carousel } from "@material-tailwind/react";

import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";

import UpliftAffMap from "../assets/images/uplift_affmap.png";
import NoahPersona from "../assets/images/uplift/Noah_persona.png";
import KatiePersona from "../assets/images/uplift/Katie_persona.png";
import BarryPersona from "../assets/images/uplift/Barry_persona.png";


const Uplift: React.FC = () => {
  return (
    <div className="text-[1.25vw] leading-[2vw] font-light">
      <Banner
        leftAlign={false}
        projectType="PRODUCT DESIGN"
        title="uplift"
        description="A fitness social media app combating gym anxiety
through peer support and accountability"
        client="NONE"
        role="PRODUCT DESIGNER"
        timeline="2 WEEKS"
        backgroundImage="bg-uplift-banner"
      />
      <div className="flex flex-col items-center px-[25vw] py-[8vw] space-y-[6vw]">
        <div className="flex flex-col space-y-[3vw]">
          <Header label="OVERVIEW" title="Let's Get Active" />
          <p className="text-center">
            The United States spends hundreds of billions in the fitness market
            but a small fraction of the population actively participates. With
            the trend of remote working persisting in post-pandemic times, there
            is more opportunity for sedentary lifestyles to give way to obesity
            and other chronic diseases. From first-time nerves to information
            barriers, everyday individuals struggle with going to the gym on a
            regular basis. In one survey of 2000 Americans, about 50% of those
            surveyed felt intimidated by others at the gym, and 39% felt
            discouraged by a lack of progress.
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-[0.5vw] w-[22vw]">
              <p className="text-[1.5vw] font-bold">THE PROBLEM</p>
              <p>
                The fitness market fails to capture a significant number of
                consumers due to gym intimidation and inadequate educational
                resources, discouraging them from maintaining a regular fitness
                routine to prevent the development of chronic health issues.{" "}
              </p>
            </div>
            <div className="flex flex-col space-y-[0.5vw] w-[22vw]">
              <p className="text-[1.5vw] font-bold">THE OBJECTIVE</p>
              <p>
                Encourage people to go to the gym without feeling intimidated
                and foster a healthier attitude toward personal fitness.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-[3vw] items-center">
          <Header label="DISCOVER" title="Research & Needfinding" />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">INITIAL INSIGHTS</p>
            <p>
              To understand current fitness habits and attitudes of young adults
              towards going to the gym, I interviewed 4 potential users at
              varying fitness levels, from non gym-goers to athletes. Questions
              dove into key topics like user motivations, comfort levels,
              progress tracking, and preferred sources of information.{" "}
            </p>
          </div>
          <div className="flex flex-col w-[60vw] items-center">
            <img
              src={UpliftAffMap}
              alt="affinity map diagram of interview data"
            />
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">INTERVIEW TAKEAWAYS</p>
            <p>
              After conducting initial interviews, I noted down key observations
              and ideas from each user. To uncover common themes and connections
              among responses, I created an affinity map diagram to organize my
              notes.
            </p>
          </div>
          <div className="flex flex-col space-y-[1vw] w-[50vw]">
            <p>
              Key clusters from my affinity map revealed common challenges in a
              typical experience of going to the gym as well as potential
              solutions, thus warranting further exploration.
            </p>
            <ol className="list-decimal pl-[2vw] space-y-[1vw]">
              <li>
                <p className="font-semibold">Power of Social Facilitation</p>
                <p>
                  ‍Going to the gym is primarily a solo experience for most
                  people, but users feel more motivated when surrounded by other
                  people.
                </p>
              </li>
              <li>
                <p className="font-semibold">Challenges with Consistency</p>
                <p>
                  ‍‍Users lack a reliable commitment device for continuous
                  engagement with the gym, with consistent workouts being a
                  struggle for many, especially amidst busy professional/social
                  lives.
                </p>
              </li>
              <li>
                <p className="font-semibold">Varying Sources of Information</p>
                <p>
                  Users utilize a variety of resources to obtain and store
                  information. Difficulty with getting trustworthy information
                  poses a key barrier of entry for the never-goers.
                </p>
              </li>
            </ol>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">IDENTIFYING THE USER</p>
            <p>
              With a clearer understanding of current fitness user demographics
              and behaviors, I focused on each group's goals, pain points,
              needs, and how they interact with the fitness experience,
              encapsulating these attributes in 3 user personas for a product
              that would cater to varying comfort levels with the gym and
              fitness.
            </p>
          </div>
          
     <Carousel className="rounded-xl">
       <img
         src={NoahPersona}
         alt="Persona card for Novice Noah"
         className="h-full w-full object-cover px-[4vw]"
       />
       <img
         src={KatiePersona}
         alt="Persona card for Casual Katie"
         className="h-full w-full object-cover px-[4vw]"
       />
       <img
         src={BarryPersona}
         alt="Persona card for Bodybuilder Barry"
         className="h-full w-full object-cover px-[4vw]"
       />
     </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Uplift;
