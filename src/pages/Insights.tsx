import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Reflection from "../components/Reflection";

import Assessment1 from "../assets/images/insights/assessment1.png";
import Assessment2 from "../assets/images/insights/assessment2.png";
import Assessment3 from "../assets/images/insights/assessment3.png";
import ClassTable from "../assets/images/insights/class_table.png";
import Documentation from "../assets/images/insights/documentation.png";
import EngagementAfter from "../assets/images/insights/engagement_after.png";
import EngagementBefore from "../assets/images/insights/engagement_before.png";
import IA from "../assets/images/insights/infoarch.png";
import InsightsBefore from "../assets/images/insights/insights_before.png";
import InsightsFigma from "../assets/images/insights/insights_figma.png";
import Learning1 from "../assets/images/insights/learning1.png";
import Learning2 from "../assets/images/insights/learning2.png";
import Personas from "../assets/images/insights/personas.png";
import Reporting from "../assets/images/insights/reporting.png";
import TestingResults from "../assets/images/insights/testing_results.png";

const Insights: React.FC = () => {
  const reflections: string[][] = [
    [
      "VALIDATE. VALIDATE. VALIDATE.",
      "Throughout the project, I realized that data visualization required careful validation of every UI element. Even small wording changes could greatly impact users' interpretation of data. With so many datasets but limited screen space, selecting the most valuable information was challenging and required direct user feedback to ensure relevance.",
    ],
    [
      "DON'T DESIGN IN A VACUUM.",
      "Working in a scale-up with many teams advancing their own projects, I had to consider how my designs impacted others and vice versa. Maintaining close contact with stakeholders across departments and product teams was essential to ensure alignment with each team's goals and broader company objectives. I adapted my designs to account for changes like a restructured curriculum, expansion into the Canadian market, and the release of Insights Pro.",
    ],
    [
      "KEEP IT SIMPLE, STUPID.",
      "Complexity doesn't always translate to better usability or usefulness. For the Insights redesign, simplicity proved key. Users were accustomed to the old interface, so changes needed to be necessary yet familiar to avoid adding cognitive load. With large amounts of data, quick, efficient interactions were essential to help users access information rapidly, making simplicity crucial for success."
    ],
  ];

  return (
    <div className="text-[1.25vw] leading-[2vw] font-light">
      <Banner
        leftAlign={false}
        projectType="UX/UI REDESIGN"
        title="Insights 2.0"
        description="Redesigning a learning analytics interface to empower educators with streamlined data access"
        client="EDUCATION PERFECT"
        role="PRODUCT DESIGNER"
        timeline="8 WEEKS"
        backgroundImage="bg-insights-banner"
        variant={true}
      />
      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center px-[25vw] py-[8vw] space-y-[6vw]">
        {/* OVERVIEW SECTION */}
        <div className="flex flex-col space-y-[4vw]">
          <Header label="OVERVIEW" title="Learning Down Under" />
          <p className="text-center">
            Education Perfect (EP) is an edtech scaleup based in Australia & New
            Zealand offering a web-based learning platform with an integrated
            learning management system to empower educators to support students'
            personalized learning curriculums.
            <br /> <br /> As a summer intern at EP, I collaborated with a
            product manager and a data engineer to redesign Insights, EP's data
            analytics product used by educators to uncover areas of concern.
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-[0.5vw] w-[22vw]">
              <p className="text-[1.5vw] font-bold">THE PROBLEM</p>
              <p>
                Educators want to access different data points at various levels
                of detail to support student learning. All actionable data sits
                within the Insights page, but accessing this data can be tedious
                and provide users with little flexibility in choosing what is
                displayed and how.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.5vw] w-[22vw]">
              <p className="text-[1.5vw] font-bold">THE OBJECTIVE</p>
              <p>
                Redesign EP Insights to provide users with flexible data access
                to uncover areas of concerns and support personalized learning.
                Integrate Insights with EP's updated design system for a
                cohesive user experience.
              </p>
            </div>
          </div>
        </div>
        {/* DISCOVERY SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header
            label="DISCOVER"
            title="Understanding the Product"
            image={InsightsBefore}
          />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p>
              To inform my design decisions, I first conducted internal research
              to understand how users were currently interacting with Insights
              and various datasets.
            </p>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">INTERVIEWING STAKEHOLDERS</p>
            <p>
              To better my understanding of Insights and its value proposition,
              I spoke with key stakeholder across the company’s various
              departments to contextualize the product within current and future
              business goals.
            </p>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <div className="flex flex-row justify-between pt-[1vw]">
              <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                <p className="text-[1.5vw] font-semibold">INTERVIEWEE ROLES</p>
                <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
                  <li>Operations</li>
                  <li>Product Ops</li>
                  <li>Product Marketing</li>
                  <li>Sales & Customer Success</li>
                  <li>Business Development</li>
                  <li>Data Engineering</li>
                  <li>Teacher Consultant</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                <p className="text-[1.5vw] font-semibold">KEY TAKEAWAYS</p>
                <ol className="list-decimal pl-[2vw] space-y-[1vw]">
                  <li>
                    EP needs to more clearly show school leaders that using the
                    product leads to tangible improvements in learning.
                  </li>
                  <li>
                    It is important to consider generalizability across regions,
                    especially as EP expands to other geographic markets.
                  </li>
                  <li>
                    Keep designs simple. Don't burden teachers with too much
                    additional work to manage and understand their data.
                  </li>
                  <li>
                    Be very careful and consistent with language and
                    visualizations as they can have a big effect on
                    interpretability (e.g. "mark" and "grade" are slightly
                    different metrics of student performance and cannot be used
                    interchangeably).
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="w-[60vw]">
            <img
              src={Reporting}
              alt="Map of Reporting Research"
              className="w-full"
            ></img>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">DEFINING THE USER</p>
            <p>
              Insights currently serves three user groups: teachers, school
              administrators, and internal EP staff. Each group requires
              different datasets all readily available on the interface, leading
              to overcrowding and diluting their benefits.
              <br />
              <br />
              We found that school admin and internal staff relied more on ad
              hoc reporting methods over Insights and on top of plans to develop
              a separate admin panel specifically for these users, the PM and I
              decided to reprioritize Insights as a teachers-first product.
            </p>
          </div>
          <div className="w-[60vw]">
            <img
              src={Personas}
              alt="User persona cards"
              className="w-full"
            ></img>
          </div>
        </div>
        {/* IDEATE SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header label="IDEATE" title="Rethinking Data Acesss" image={IA} />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-semibold">
              A SIMPLER INFORMATION ARCHITECTURE
            </p>
            <p>
              With our users clearly defined, the next step was to organize the
              data in a way that makes sense and enables teachers to quickly get
              to whatever data was relevant for any specific task. My draft of
              the revised information architecture divides Insights into three
              distinct categories from the available data.
            </p>
          </div>
          <div className="flex flex-col w-[50vw]">
            <div className="flex flex-col mt-[-2vw] space-y-[2vw] justify-center">
              <div className="flex flex-row space-x-[2vw]">
                <div className="flex flex-col w-[24vw]">
                  <p className="font-semibold">ENGAGEMENT</p>
                  <p>
                    Reports high-level data on the extent that a teacher's
                    students are engaging with the content
                  </p>
                </div>
                <div className="flex flex-col w-[24vw]">
                  <p className="font-semibold">LEARNING</p>
                  <p>
                    Originally named "Tasks", tracks student progress within
                    assigned units and lessons accompanied by accuracy scores
                    upon completion
                  </p>
                </div>
                <div className="flex flex-col w-[24vw]">
                  <p className="font-semibold">ASSESSMENT</p>
                  <p>
                    Records examination scores from each student across classes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DELIIVER SECTION*/}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header
            label="DELIVER"
            title="Designing the Solution"
            image={InsightsFigma}
          />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p>
              Following the structure of the new IA, I iterated on prototypes of
              the redesigned Insights on Figma. Data was carefully organized
              into distinct tabs and tables with filtering capabilities to allow
              users to more easily navigate the interface.
            </p>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">GRAPH TOGGLING</p>
            <p>
              The current Insights graph only shows "hours online" over time,
              along with a few raw metrics that users found less meaningful,
              like activities and questions answered. Based on feedback, I chose
              four key variables for the graphs: logins, time spent, tasks
              completed, and assessments completed.
              <br />
              <br />
              Initially, users could select multiple variables at once, but
              testing showed this added no value, so I switched to a toggle
              option. Each variable includes a percentage change from the
              previous period to help teachers quickly spot trends, with
              on-hover tooltips explaining the reference period.
            </p>
          </div>
          <div className="flex flex-row space-x-[1vw] w-[70vw] justify-between">
            <img src={EngagementBefore} className="w-[33.5vw] rounded-md" />
            <img src={EngagementAfter} className="w-[33.5vw] rounded-md" />
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">CLASS TABLE</p>
            <p>
              The Engagement tab retains the student engagement table but
              displays more relevant metrics. The table is collapsible, offering
              layers of data for different goals. In the collapsed view,
              teachers can compare platform and content engagement across
              classes with column averages. Expanding the view reveals raw
              totals for identifying unengaged students in a specific class.{" "}
            </p>
          </div>
          <div className="w-[60vw]">
            <img src={ClassTable} className="w-full rounded-md" />
          </div>

          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">TRIAL AND ERROR</p>
            <p>
              I first tried using nested accordions to display task data, aiming
              to avoid navigation and accessibility issues with horizontal
              scrolling. However, too many dropdowns made the data hard to read,
              especially with large datasets. Users also noted that green
              progress bars could lead to misinterpretation.
            </p>
          </div>
          <div className="w-[60vw]">
            <img src={Learning1} className="w-full rounded-md" />
          </div>

          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">A DIFFERENT APPROACH</p>
            <p>
              The final design divides the data into unit-based columns with
              segmented progress bars to represent contained lessons. Progress
              bars are now in a neutral blue with low accuracy highlighted in
              red. Teachers can expand each unit into showing individual lessons
              to better understand learning strengths and weaknesses.{" "}
            </p>
          </div>
          <div className="w-[60vw]">
            <img src={Learning2} className="w-full rounded-md" />
          </div>

          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">SIMPLE BUT EFFECTIVE</p>
            <p>
              Users found most favor with a simple gradebook-style design for
              tracking assessment scores. Surprisingly, teachers were less so
              concerned about individual scores than growth across assessments,
              so I opted out of color-coding scores.{" "}
            </p>
          </div>
          <div className="w-[60vw]">
            <img src={Assessment1} className="w-full rounded-md" />
          </div>

          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">ALTERNATIVE GRADEBOOK DESIGNS</p>
            <p>
              My design leveraged EP's built-in pre- and post-test feature,
              allowing users to click an assessment to view pairwise comparisons
              side by side. However, low discovery rates in usability tests
              prompted an alternative design, displaying pairwise assessments
              together by default.{" "}
            </p>
          </div>
          <div className="flex flex-row space-x-[1vw] w-[70vw] justify-between">
            <img src={Assessment2} className="w-[33.5vw] rounded-md" />
            <img src={Assessment3} className="w-[33.5vw] rounded-md" />
          </div>
        </div>
        {/* VALIDATE SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header
            label="VALIDATE"
            title="Testing with Users"
            image={TestingResults}
          />
          <div className="flex flex-col space-y-[1vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">MIXED TESTING METHODS</p>

            <p>
              The first couple of design sprints concluded with live usability
              testing with internal users. These initial tests uncovered bugs
              and allowed me to carefully refine what data was available to
              users and how it is displayed.
              <br />
              <br />
              The final prototype was deployed on Maze for unmoderated testing,
              where users completed tasks to assess usability and answered
              survey questions on dataset usefulness and accessibility. Users
              achieved a ~90% task success rate, with most errors stemming from
              unclear microinteractions, like the comparison tool in the
              Assessment tab. I addressed these issues with alternative designs.
              The post-test survey showed an average satisfaction score of 7.5
              out of 10, with most users preferring the redesigned experience
              over the current interface.
            </p>
          </div>
        </div>

        {/* WRAPUP SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header
            label="WRAPUP"
            title="Handoff and Learnings"
            image={Documentation}
          />
          <div className="flex flex-col space-y-[1vw] w-[50vw]">
            <p>
              The last round of testing on Maze allowed me to get quick high
              level feedback from a larger pool of users. Access to survey
              answers, click heatmaps, and success metrics uncovered areas of
              concern that guided my final set of edits before the conclusion of
              my internship. All my research artifacts along with the Figma
              prototype were thoroughly annotated with design justifications and
              explanations where valuable.
            </p>
          </div>
        </div>
        {/* REFLECTIONS SECTION */}
        <Reflection reflections={reflections} />
      </div>
    </div>
  );
};

export default Insights;
