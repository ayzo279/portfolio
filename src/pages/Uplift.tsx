import React from "react";

import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Reflection from "../components/Reflection";

import UpliftAffMap from "../assets/images/uplift_affmap.png";
import NoahPersona from "../assets/images/uplift/Noah_persona.png";
import KatiePersona from "../assets/images/uplift/Katie_persona.png";
import BarryPersona from "../assets/images/uplift/Barry_persona.png";

import Strong1 from "../assets/images/uplift/strong_comp.png";
import Strong2 from "../assets/images/uplift/strong_comp2.png";
import Arrow1 from "../assets/images/uplift/arrow1.png";
import Arrow2 from "../assets/images/uplift/arrow2.png";
import Corecircle1 from "../assets/images/uplift/corecircle1.png";
import Corecircle2 from "../assets/images/uplift/corecircle2.png";
import Strava1 from "../assets/images/uplift/strava1.png";
import Strava2 from "../assets/images/uplift/strava2.png";

import NoahJourney from "../assets/images/uplift/Noah_journey.png";
import KatieJourney from "../assets/images/uplift/Katie_journey.png";
import BarryJourney from "../assets/images/uplift/Barry_journey.png";

import UpliftIA from "../assets/images/uplift/uplift_ia.png";
import UpliftFigma from "../assets/images/uplift/uplift_figma.png";
import StyleGuide from "../assets/images/uplift/uplift_style_guide.png";

import Lofi1 from "../assets/images/uplift/uplift_lofi.png";
import Lofi2 from "../assets/images/uplift/uplift_lofi2.png";
import Lofi3 from "../assets/images/uplift/uplift_lofi3.png";
import Hifis from "../assets/images/uplift/uplift_hifis.png";

const Uplift: React.FC = () => {
  const reflections: string[][] = [
    [
      "WORK WITH WHAT YOU'VE GOT.",
      "Given time and resource constraints, guerrilla testing became a crucial method for quickly validating design decisions with real users in informal settings. By reaching out to friends, family, and classmates, I gathered immediate feedback on key design aspects, even when a full-scale usability study wasn't feasible. These lightweight sessions helped identify pain points and ensure the designs resonated with users in a real-world context, allowing me to stay adaptable and resourceful to keep the project moving forward.",
    ],
    [
      "DO WHAT YOU LOVE & LOVE WHAT YOU DO.",
      "Designing a product in a fast-paced project can be mentally exhausting, with many moving pieces making it easy to experience burnout. For this project, I found it valuable to develop a personal stake in the problem by immersing myself in the problem space and understanding why it mattered to me and others. This kept me excited about the work, turning each task into a fun opportunity to explore rather than just something to check off a list.",
    ],
  ];
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
      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center px-[25vw] py-[8vw] space-y-[6vw]">
        {/* OVERVIEW SECTION */}
        <div className="flex flex-col space-y-[4vw]">
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
        {/* DISCOVERY SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
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
          <Carousel>
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
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">COMPETITOR RESEARCH</p>
            <p>
              To explore current trends and gaps in the market, I conducted a
              competitive analysis of four direct and indirect competitors:
              Strong, Arrow, Corecircle, and Strava. The analysis focused on
              identifying strengths and weaknesses to inform the design and
              positioning of my app.
            </p>
          </div>
          <Carousel>
            <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
              <div className="flex flex-row space-x-[5vw] items-center justify-center">
                <img src={Strong1} className="h-[25vw]" />
                <img src={Strong2} className="h-[25vw]" />
              </div>
              <p className="text-[1.5vw] font-normal">STRONG</p>
              <p>
                A simple workout tracking app offering comprehensive repository
                of exercises and customizable routines, with a focus on strength
                training and progress tracking.
              </p>
              <div className="flex flex-row justify-between pt-[1vw]">
                <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                  <p className="text-[1.5vw] italic">STRENGTHS</p>
                  <ul className="list-disc pl-[2vw] space-y-[1vw]">
                    <li>
                      Repository of common exercises with instructions to add to
                      a live workout
                    </li>
                    <li>
                      Template feature provides both standard and customizable
                      routines
                    </li>
                    <li>
                      Simple dashboard to track workouts throughout the week
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                  <p className="text-[1.5vw] italic">WEAKNESSES</p>
                  <ul className="list-disc pl-[2vw] space-y-[1vw]">
                    <li>
                      Progression analytics and personalized training features
                      are hidden behind a subscription plan{" "}
                    </li>
                    <li>
                      No visible social component to the app (e.g. can’t share a
                      template with others)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
              <div className="flex flex-row space-x-[5vw] items-center justify-center">
                <img src={Arrow1} className="h-[25vw]" />
                <img src={Arrow2} className="h-[25vw]" />
              </div>
              <p className="text-[1.5vw] font-normal">ARROW</p>
              <p>
                Fitness app combining customizable workout tracking with
                gamification, offering users progression dashboards and social
                features tailored primarily for advanced lifters.
              </p>
              <div className="flex flex-row justify-between pt-[1vw]">
                <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                  <p className="text-[1.5vw] italic">STRENGTHS</p>
                  <ul className="list-disc pl-[2vw] space-y-[1vw]">
                    <li>
                      Straightforward calendar component to log and plan
                      current/future workouts
                    </li>
                    <li>
                      Users can add friends and monitor their progress, adding a
                      social aspect to training
                    </li>
                    <li>
                      Customizable progression dashboard with
                      streaks/trophies/banners{" "}
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                  <p className="text-[1.5vw] italic">WEAKNESSES</p>
                  <ul className="list-disc pl-[2vw] space-y-[1vw]">
                    <li>
                      Cardio and custom exercises are not included in the
                      standard free version
                    </li>
                    <li>
                      Exercises are stored in one long list, requiring users to
                      know what to look for when adding them to workouts
                    </li>
                    <li>Relatively minimal virtual socialization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
              <div className="flex flex-row space-x-[5vw] items-center justify-center">
                <img src={Corecircle1} className="h-[25vw]" />
                <img src={Corecircle2} className="h-[25vw]" />
              </div>
              <p className="text-[1.5vw] font-normal">ARROW</p>
              <p>
                Fitness app combining customizable workout tracking with
                gamification, offering users progression dashboards and social
                features tailored primarily for advanced lifters.
              </p>
              <div className="flex flex-row justify-between pt-[1vw]">
                <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                  <p className="text-[1.5vw] italic">STRENGTHS</p>
                  <ul className="list-disc pl-[2vw] space-y-[1vw]">
                    <li>
                      Straightforward calendar component to log and plan
                      current/future workoutsShareable workouts with photos from
                      creators builds credibility
                    </li>
                    <li>
                      Ability to share post-workout photos and thoughts welcomes
                      support from followers
                    </li>
                    <li>
                      Very clean and usable interface for adding and adapting
                      exercises{" "}
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                  <p className="text-[1.5vw] italic">WEAKNESSES</p>
                  <ul className="list-disc pl-[2vw] space-y-[1vw]">
                    <li>
                      Feels too "Influencey" and less of a mutual support
                      network of friends
                    </li>
                    <li>
                      Workout logs feel like a long history list with no clear
                      progression{" "}
                    </li>
                    <li>
                      Everything feels too public, which may be too overwhelming
                      to novice lifters
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
              <div className="flex flex-row space-x-[5vw] items-center justify-center">
                <img src={Strava1} className="h-[25vw]" />
                <img src={Strava2} className="h-[25vw]" />
              </div>
              <p className="text-[1.5vw] font-normal">ARROW</p>
              <p>
                Fitness app combining customizable workout tracking with
                gamification, offering users progression dashboards and social
                features tailored primarily for advanced lifters.
              </p>
              <div className="flex flex-row justify-between pt-[1vw]">
                <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                  <p className="text-[1.5vw] italic">STRENGTHS</p>
                  <ul className="list-disc pl-[2vw] space-y-[1vw]">
                    <li>Very sleek interface with intuitive features</li>
                    <li>
                      Social media element is very present with standard
                      posting/comment features
                    </li>
                    <li>
                      Very effective gamification with challenges and
                      leaderboards that cater to a variety of fitness levels
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                  <p className="text-[1.5vw] italic">WEAKNESSES</p>
                  <ul className="list-disc pl-[2vw] space-y-[1vw]">
                    <li>
                      Limited quantitative progress tracking beyond distance,
                      time, elevation, etc with minimal accommodation for
                      strength workouts
                    </li>
                    <li>
                      A variety of valuable features (custom routes, segmented
                      leaderboards, advanced analyses) are available only by
                      subscription
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Carousel>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">TAKEWAYS & OPPORTUNITIES</p>
            <ul className="list-disc pl-[2vw] space-y-[1vw]">
              <li>
                Competitors all have very similar user flows for logging
                workouts, so it's best not to reinvent the wheel.
              </li>
              <li>
                The most successful competitors have some element of
                gamification (leaderboards, challenges, badges, etc.) to
                motivate users.
              </li>
              <li>
                Current fitness apps have somewhat decentralized support
                networks or none at all. While highlighting the social
                experience is valuable to motivate users, I need to be careful
                with making it too social.
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-semibold">
              DEFINING THE PRODUCT VISION
            </p>
            <div className="flex flex-col space-y-[2vw] justify-center">
              <div className="flex flex-row space-x-[2vw]">
                <div className="flex flex-col w-[24vw]">
                  <p className="italic">Who?</p>
                  <p>
                    Young and middle-age adults at varying fitness levels who go
                    to the gym
                  </p>
                </div>
                <div className="flex flex-col w-[24vw]">
                  <p className="italic">What?</p>
                  <p>
                    A mobile social media app that lets users record workouts
                    and join and build personal support networks to motivate
                    themselves and solicit help
                  </p>
                </div>
              </div>

              <div className="flex flex-row space-x-[2vw]">
                <div className="flex flex-col w-[24vw]">
                  <p className="italic">Why?</p>
                  <p>
                    To overcome gym intimidation and informational challenges
                    through social facilitation and support from peers
                  </p>
                </div>
                <div className="flex flex-col w-[24vw]">
                  <p className="italic">How's it different?</p>
                  <p>
                    A gamified workout experience that tailors to a variety of
                    fitness levels that encourages users to train with people
                    they know and trust, rather than on their own or relying on
                    strangers online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">CRAFTING USER JOURNEYS</p>
            <p>
              To ensure a seamless and engaging experience for each user
              persona, I mapped out three user journeys. Each journey represents
              a key user type interacting with the product, highlighting how
              they would navigate the platform to achieve their fitness goals.
            </p>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p>
              These user journeys were informed by the competitive analysis and
              target user personas, aiming to address pain points and leverage
              strengths identified in the market.
            </p>
          </div>
          <div className="flex flex-col space-y-[1.5vw] w-[60vw]">
            <img src={NoahJourney} />
            <div className="flex flex-row justify-between">
              <img src={KatieJourney} className="w-[29.25vw]" />
              <img src={BarryJourney} className="w-[29.25vw]" />
            </div>
          </div>
        </div>
        {/* IDEATE SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header label="IDEATE" title="Product Brainstorming" />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-semibold">
              DEVELOPING KEY FEATURES
            </p>
            <p>
              With the product vision serving as the North Star for my solution
              and the user journeys highlighting areas where I can effectively
              interview in the fitness experience, I proceeded with ideating
              core features for my app.
            </p>
          </div>
          <div className="flex flex-col w-[50vw]">
            <div className="flex flex-col mt-[-2vw] space-y-[2vw] justify-center">
              <div className="flex flex-row space-x-[2vw]">
                <div className="flex flex-col w-[24vw]">
                  <p className="font-semibold">Workout Logging</p>
                  <p>
                    A centralized hub for storing workout plans and tracking
                    lifts.
                  </p>
                </div>
                <div className="flex flex-col w-[24vw]">
                  <p className="font-semibold">Gamified Progress</p>
                  <p>
                    Users earn badges each day they complete a training session
                    in order to promote sustained engagement.
                  </p>
                </div>
              </div>

              <div className="flex flex-row space-x-[2vw]">
                <div className="flex flex-col w-[24vw]">
                  <p className="font-semibold">Social Engagement</p>
                  <p>
                    Connect with friends and create squads to provide each other
                    support and motivation.
                  </p>
                </div>
                <div className="flex flex-col w-[24vw]">
                  <p className="font-semibold">Synced Training</p>
                  <p>
                    Encourage group training sessions with synced up workout
                    trackers across devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-semibold">CREATING STRUCTURE</p>
            <p>
              To figure out the layout of the app, I conducted card-sorting
              activities with a handful of users to create the information
              architecture. The IA ensures that my design allows users to easily
              navigate through the app, find relevant content, and interact with
              key features that align with their fitness goals.
            </p>
          </div>
          <div className="flex flex-col w-[60vw] items-center">
            <img
              src={UpliftIA}
              alt="Information architecture of Uplift App"
              className="w-full"
            ></img>
          </div>
        </div>
        {/* DELIIVER SECTION*/}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header
            label="IDEATE"
            title="Product Brainstorming"
            image={UpliftFigma}
          />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-semibold">WIREFRAMING IDEAS</p>
            <p>
              Using the IA as a blueprint for layout and flow, I created Lo-Fi
              wireframes for the key screens involved in the core user flows and
              interactions. Being able to quickly translate my ideas into rough
              drafts allowed for quick iterations and feedback from potential
              users before diving into high-fidelity designs.
            </p>
          </div>
          <div className="flex flex-row space-x-[1vw] w-[60vw] justify-between">
            <img src={Lofi1} className="w-[17vw]" />
            <img src={Lofi2} className="w-[17vw]" />
            <img src={Lofi3} className="w-[17vw]" />
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p>
              I presented the wireframes to some users for feedback and initial
              testing. While the structure and layout were largely intuitive to
              navigate, there were a couple challenges and areas of concern to
              address moving forward.
            </p>
            <ul className="list-disc space-y-[1vw] pl-[2vw]">
              <li>
                It doesn't make much sense or provide value to keep friends and
                squads in separate tabs.
              </li>
              <li>
                How would the gamification aspect work for different schedules
                and routines? How are streaks maintained when a user opts for a
                rest day?
              </li>
              <li>
                Users were concerned about the abundance of possible exercises
                available and wanted a way to efficiently filter through them.
              </li>
              <li>
                There are a lot of steps to accomplish tasks. How do I
                streamline the process and provide shortcuts?
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-semibold">
              CREATING A VISUAL IDENTITY
            </p>
            <p>
              As I moved forward with the feedback from Lo-Fi testing, I wanted
              to work on some initial steps towards branding and UI, especially
              as I begin on high-fidelity designs.
              <br />
              <br />
              To construct the visual identity of my app, I developed a simple
              style guide with the color palette and typography defined along
              with a draft of the app icon. A modern sans-serif font was
              selected to support clarity and readability. For color, alongside
              a minimalist black and white base, a vibrant orange and blue were
              chosen to convey warmth and action, which I felt aligned well with
              the social and fitness aspects of my product.
              <br />
              <br />
              For the name and logo, I chose "uplift" to highlight both the
              fitness elements and the focus on peer motivation and support. A
              fist-bump, typically found in a gym as a gesture of mutual
              respect, is contained in an abstract form in the logo by shaping a
              letter "U".
            </p>
          </div>
          <div className="w-[60vw]">
            <img className="w-full" src={StyleGuide} />
          </div>
          <div className="flex flex-col space-y-[1vw] items-center w-[80vw]">
            <p className="font-semibold text-[1.5vw]">FINAL DESIGNS</p>
            <img src={Hifis} />
          </div>
        </div>
        {/* WRAPUP SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header label="WRAPUP" title="Next Steps & Learnings" />
          <div className="flex flex-col space-y-[1vw] w-[50vw]">
          <p className="text-[1.5vw] font-bold">MOVING FORWARD</p>

          <p>
            Design is a continuous process that benefits greatly from repeated
            iterations. As such, I will be building upon this foundation of
            research and prototypes to further develop Uplift into a more
            fully-fleshed out product. Next steps will include:
          </p>
          <ul className="list-disc pl-[2vw] space-y-[1vw]">
            <li>
              <p className="font-semibold">Creating a Design System</p>
              <p>
                As I work on scaling Uplift, establishing and maintaining a
                design system will be extremely valuable in making sure the
                visual identity stays intact and the appearance/experience
                remains cohesive throughout the various screens and
                interactions.
              </p>
            </li>
            <li>
              <p className="font-semibold">Additional Testing</p>
              <p>
                It is always important to validate designs and hypotheses when
                creating a new product. I will be reaching out to more users to
                get my bases covered and address any usability concerns.
              </p>
            </li>
            <li>
              <p className="font-semibold">Wearing the Engineering Hat</p>
              <p>
                Designers don’t work in a vacuum, so it’s important to consider
                the perspectives and needs of other teams invested in the
                project. As an exercise to better understand the
                cross-functional processes between design and engineering, I
                will be actualizing my high-fidelity designs into a mobile
                application using Swift and SwiftUI.
              </p>
            </li>
          </ul>
        </div>
        </div>
        {/* REFLECTIONS SECTION */}
        <Reflection reflections={reflections}/>
      </div>
    </div>
  );
};

export default Uplift;
