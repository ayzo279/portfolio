import React from "react";

import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Reflection from "../components/Reflection";

import AffMap1 from "images/amplifi/affmap1.png";
import AffMap2 from "images/amplifi/affmap2.png";
import AmpFigma from "images/amplifi/AmplifiFigma.png";
import Arrow from "images/amplifi/arrow.png";
import Concept1 from "images/amplifi/concept1.png";
import Concept2 from "images/amplifi/concept2.png";
import Concept3 from "images/amplifi/concept3.png";
import Concept4 from "images/amplifi/concept4.png";
import Hifi1 from "images/amplifi/Hifi1.png";
import Hifi2 from "images/amplifi/Hifi2.png";
import Hifi3 from "images/amplifi/Hifi3.png";
import Hifi4 from "images/amplifi/Hifi4.png";
import Hifi5 from "images/amplifi/Hifi5.png";
import Hypothesis1 from "images/amplifi/hypothesis1.png";
import Hypothesis2 from "images/amplifi/hypothesis2.png";
import IA from "images/amplifi/IA.png";
import Persona1 from "images/amplifi/persona1.png";
import Persona2 from "images/amplifi/persona2.png";
import Persona3 from "images/amplifi/persona3.png";

const Amplifi: React.FC = () => {
  const reflections: string[][] = [
    [
      "BE FLEXIBLE.",
      "Initially, we assumed low-income households were the ideal target for our product, as reducing energy costs seemed most beneficial for them. However, user research challenged this notion, prompting us to reassess our target audience. Products sometimes fail due to flawed ideas, but often, reframing the problem and exploring alternative perspectives is key. In our case, flexibility and considering other user viewpoints were essential to uncovering our product’s true value."
    ],
    [
      "PUT THE USER FIRST",
    "User-centric design is crucial to a product's success, so we prioritized convenience and autonomy to meet our target users' needs. Recognizing varying willingness to change energy habits, we focused on empowering users to make informed decisions. Features like optional smart appliance automation, a live energy tracker, and customizable push notification settings were all designed to support user autonomy while seamlessly integrating into their daily lives."
      ],
  ];

  return (
    <div className="text-[1.25vw] leading-[2vw] font-light">
      <Banner
        leftAlign={true}
        projectType="PRODUCT DESIGN"
        title="Amplifi"
        description="Mobile application for monitoring and optimizing household energy consumption"
        client="NONE"
        role="PRODUCT DESIGNER"
        timeline="5 WEEKS"
        backgroundImage="bg-amplifi-banner"
        variant={true}
      />
      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center px-[25vw] py-[8vw] space-y-[6vw]">
        {/* OVERVIEW SECTION */}
        <div className="flex flex-col space-y-[4vw]">
          <Header label="OVERVIEW" title="Powering Forward" />
          <p className="text-center">
            About a third of American households face some degree of energy
            poverty, making basic living needs such as heating, cooling, and
            cooking financially burdensome tasks for many. With rising costs in
            natural gas, few efforts have been made to improve accessibility to
            energy while the need for cheaper, cleaner energy remains
            increasingly clear.
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-[0.5vw] w-[22vw]">
              <p className="text-[1.5vw] font-bold">THE PROBLEM</p>
              <p>
                US homeowners and renters struggle to reduce their energy bills,
                driven by inaccessibility to data about their energy usage and a
                lack of information on effective ways to reduce consumption
                costs without reducing consumption itself.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.5vw] w-[22vw]">
              <p className="text-[1.5vw] font-bold">THE OBJECTIVE</p>
              <p>
                Enable US households to optimize their energy consumption via
                actionable data aimed at reducing costs
              </p>
            </div>
          </div>
        </div>
        {/* DISCOVERY SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header label="DISCOVER" title="Research & Needfinding" />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">INITIAL INSIGHTS</p>
            <p>
              Kickstarting the discovery phase, a teammate and I interviewed a
              professor on Environmental Science and Public Policy, who revealed
              key areas for improvement in the energy sector.
            </p>
            <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
              <li>
                Electric vehicles need a better interface that provides greater
                flexibility for charging cars.
              </li>
              <li>
                Household appliances should better communicate alternative times
                to be run in order to save on costs.
              </li>
              <li>
                Heating appliances have greatest demand when sustainable energy
                sources (e.g. solar, wind) are at their lowest, which calls for
                better storage systems.
              </li>
              <li>
                Timing of energy usage should be prioritized over volume of
                energy usage.
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">STAKEHOLDER INTERVIEWS</p>
            <p>
              Interviews with a diverse group of homeowners, renters, landlords,
              and energy experts informed us of existing consumption habits,
              major gaps in understanding energy usage, varying incentives for
              changing energy use, and barriers to changing habits.
            </p>
          </div>
          <div className="flex flex-row space-x-[2vw] w-[70vw] items-center">
            <img src={AffMap1} className="w-[30vw]" />
            <img src={Arrow} className="h-[2vw] w-[2vw]" />
            <img src={AffMap2} className="w-[30vw]" />
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">KEY FINDINGS</p>
            <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
              <li>
                <p className="font-bold">
                  Existing Knowledge and Current Consumption Habits
                </p>
                <p>
                  Most stakeholders had some level of understanding of energy
                  payments and monitoring their usage via monthly bills. Some
                  households are already trying to improve consumption habits
                  (e.g. purchasing smart appliances, integrating solar panels).
                </p>
              </li>
              <li>
                <p className="font-bold">Lack of Information</p>
                <p>
                  Stakeholders did not fully understand how their individual
                  actions mapped onto their energy bill as information related
                  to energy was difficult to understand or poorly presented.
                </p>
              </li>
              <li>
                <p className="font-bold">
                  Varying Incentives for Changing Energy Use
                </p>
                <p>
                  ‍Motivations behind energy usage patterns varied including
                  cost and environmental concerns. Some were indifferent
                  altogether.
                </p>
              </li>
              <li>
                <p className="font-bold">
                  Barriers to Changing Energy Use Habits
                </p>
                <p>
                  Time and effort constraints, along with uncertainty over
                  savings amounts, prevent some households from changing their
                  behavior.{" "}
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">DEFINING THE USERS</p>
            <p>
              Synthesizing the data collected from the direct stakeholders who
              could serve as potential users, I created 3 user personas to
              clearly distinguish who we were designing a solution for and the
              different needs and frustrations that our product would ultimately
              address.
            </p>
          </div>
          <Carousel>
            <img
              src={Persona1}
              alt="Persona card for Suburban Sarah"
              className="h-full w-full object-cover px-[4vw]"
            />
            <img
              src={Persona2}
              alt="Persona card for Frugal Fred"
              className="h-full w-full object-cover px-[4vw]"
            />
            <img
              src={Persona3}
              alt="Persona card for Conscious Katie"
              className="h-full w-full object-cover px-[4vw]"
            />
          </Carousel>
          <div className="w-[50vw]">
            <p>
              Guided by these personas, it is clear the solution needs to
              provide a user-friendly platform that caters to different yet
              adjacent motivations. It should integrate seamlessly with existing
              routines and technology and promote behavior that avoid
              inefficient energy usage while offering the option to reduce
              harmful environmental effects.
            </p>
          </div>
        </div>
        {/* IDEATE SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header label="IDEATE" title="Brainstorming Solutions" />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">Drafting Product Concepts</p>
            <p>
            We collectively ideated 20 product concepts and narrowed them down to 4 ideas that we drafted using a mixture of storyboarding and low-fidelity prototypes.
            </p>
            <div className="flex flex-col space-y-[1vw] py-[2vw]">
              <p className="text-[1.5vw] italic">Solar Panel Sharing</p>
              <p>Solar panel sharing enables homeowners to redirect excess energy to neighbors, offering a cheaper, environmentally friendly source of electricity and ensuring fair compensation for the energy provided.</p>
              <img src={Concept1} className="w-full pt-[1vw]"/>
            </div>
            <div className="flex flex-col space-y-[1vw] py-[2vw]">
              <p className="text-[1.5vw] italic">On-premise Energy Storage
              </p>
              <p>By installing an on-premises energy storage system that draws energy during low-cost periods and uses it during high-cost periods, households can significantly reduce their electricity bills without changing their behavior.
              </p>
              <img src={Concept2} className="w-full pt-[1vw]"/>
            </div>
            <div className="flex flex-col space-y-[1vw] py-[2vw]">
              <p className="text-[1.5vw] italic">Smart Appliance Automation
              </p>
              <p>By automatically running smart appliances during the most energy-efficient times based on real-time data, this addresses the inconvenience of manual energy management, offering an automated solution tailored to middle-to-higher income households.</p>
              <img src={Concept3} className="w-full pt-[1vw]"/>
            </div>
            <div className="flex flex-col space-y-[1vw] py-[2vw]">
              <p className="text-[1.5vw] italic">Usage and Cost Tracker
              </p>
              <p>To address the demotivating effect of seemingly unmanageable electricity bills, this concept aims to demystify how people’s usage of electricity affects the cost that they pay with real-time data.
              </p>
              <img src={Concept4} className="w-full pt-[1vw]"/>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-[2vw] items-center">
          <p className="text-[1.5vw] font-bold">LO-FI FEEDBACK</p>
          <div className="flex flex-row justify-between space-x-[1vw]">
            <div className="flex flex-col space-y-[0.5vw] w-[20vw]">
              <p className=" font-semibold">What worked</p>
              <ul className="list-disc pl-[2vw] space-y-[1vw]">
                <li>
                  Users expressed a strong need for more filtering and sorting
                  options
                </li>
                <li>The sliding side panel offered a lot of flexibility</li>
                <li>Excitement over contrast and color theme features</li>
                <li>
                  Quick-flip arrows were a MUST and could speed up workflows
                  substantially
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-[0.5vw] w-[20vw]">
              <p className="font-semibold">What didn't work</p>
              <ul className="list-disc pl-[2vw] space-y-[1vw]">
                <li>
                  Users were not familiar/comfortable with the timeline
                  feature’s hover interactions
                </li>
                <li>No buy-in for spotlight search</li>
                <li>
                  Preference for intuitive features over relying on tool-tips
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-[0.5vw] w-[20vw]">
              <p className=" font-semibold">What to improve</p>
              <ul className="list-disc pl-[2vw] space-y-[1vw]">
                <li>
                  Move the sliding panel to the bottom to improve navigation
                  experience
                </li>
                <li>Make filter and sort features more visible</li>
                <li>Focus on visual engagement</li>
              </ul>
            </div>
          </div>
        </div>

          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">Hypothesis Testing</p>
            <p>
            Focusing on our 2 most promising concepts, we evaluated sets of hypotheses for product viability for each idea and tested them with potential users.            </p>
            <div className="flex flex-col space-y-[1vw] py-[2vw]">
              <p className="text-[1.5vw] italic">Smart Appliance Automation</p>
              <img src={Hypothesis1} className="w- pt-[1vw]"/>
              <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
                <li>Mobile control over appliances was a strong pull factor, especially if additional functionalities are added.</li>
                <li>Users were only willing to postpone the operation of specific appliance and were not willing to give up too much convenience.
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-[1vw] py-[2vw]">
              <p className="text-[1.5vw] italic">Usage and Cost Tracker</p>
              <img src={Hypothesis2} className="w- pt-[1vw]"/>
              <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
                <li>Users would download the app to inform their behavior and potentially reduce their carbon footprint.</li>
                <li>Users were selectively willing to turn on push notifications and wanted frequency customization.
                </li>
                <li>Convenience and cost magnitude would control how much people would change their usage habits.
                </li>
              </ul>
            </div>
          </div>
        {/* DELIIVER SECTION*/}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header
            label="DELIVER"
            title="Designing the Product"
            image={AmpFigma}
          />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">FINALIZING A CONCEPT</p>
            <p>
            Informed by the insights from our hypothesis testing and combining standout features from the two product concepts, our team settled on a mobile application that enables users to track the live costs of operating household appliances and provides actionables for the optimal times to run each appliance throughout the day.
            <br/><br/>
            Before developing the prototype, the structure of the app had to be carefully drafted in order to organize all the relevant components. I composed an information architecture to provide structure to what goes on each screen.
            </p>
          </div>
          <div className="w-[60vw]"> 
            <img className="w-full" src={IA}/>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">PRODUCT FEATURES</p>
            <p>
            Emphasizing convenience and user autonomy, the app centers around the following features intended to provide users with a centralized platform that displays actionable insights into when energy costs are low and the best times to run home appliances.
            </p>
            <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
              <li>
                <p className="font-bold">
                  Dashboard
                </p>
                <p>
                Users are presented with recommended actions to run their appliances at specific times using built-in live cost analysis.
                </p>
              </li>
              <li>
                <p className="font-bold">My Appliances</p>
                <p>
                Users select what appliances they want to integrate with the app. For users with smart appliances that don’t run continuously, they have the added convenience of automating when these appliances are run based on the optimal times determined by our app.
                </p>
              </li>
              <li>
                <p className="font-bold">
                Usage Tracker
                </p>
                <p>
                For users who are curious about live energy data and/or want to track how much money they’ve saved over time, we’ve included a tracker that charts live and past statistics on energy costs and savings.
                </p>
              </li>
              <li>
                <p className="font-bold">
                Push Notifications
                </p>
                <p>
                We incorporated push notifications that periodically pings users when energy costs are low and cost-saving actions are available.
                </p>
              </li>
            </ul>
          </div>
          <Carousel>
            <img src={Hifi1} className="h-full w-full object-cover"/>
            <img src={Hifi2} className="h-full w-full object-cover"/>
            <img src={Hifi3} className="h-full w-full object-cover"/>
            <img src={Hifi4} className="h-full w-full object-cover"/>
            <img src={Hifi5} className="h-full w-full object-cover"/>
          </Carousel>
        </div>

        {/* WRAPUP SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header label="WRAPUP" title="Limitations and Learnings" />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">THINGS TO KEEP IN MIND
            </p>
            <p>
            Given the short timeline of this project and the condensed scope, there are a couple constraints to address in order to flesh out a more refined product concept moving forward.            </p>
            <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
              <li>
                <p className="font-bold">
                Prototype Testing
                </p>
                <p>
                While initial product concepts were validated with stakeholders and users, the final product could definitely do with some more iterative testing to clean up the interactions and ensure that the app indeed provided clear incentives to adopt energy-saving behavior.                </p>
              </li>
              <li>
                <p className="font-bold">Technical Constraints
                </p>
                <p>
                Seamless integration with smart appliances and energy monitors is challenging, as the app's success depends on effective communication with various third-party technologies. While market research suggests feasibility, ensuring compatibility is vital to prevent operational issues and deliver a smooth user experience.                </p>
              </li>
              <li>
                <p className="font-bold">
                Data Privacy
                </p>
                <p>
                Acting as a bridge between energy providers and households, the app would track energy usage behaviors. Given the sensitivity of this data, it must prioritize transparency, clearly explaining its use and allowing users to control the extent of their data sharing.                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* REFLECTIONS SECTION */}
        <Reflection reflections={reflections} />
      </div>
    </div>
  );
};

export default Amplifi;
