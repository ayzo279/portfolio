import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Reflection from "../components/Reflection";

import AffMap from "/images/arbimon/affmap.png";
import ArbimonBefore from "/images/arbimon/arbimon_before.png";
import ArbimonFigma from "/images/arbimon/arbimon_figma.png";
import Competitors from "/images/arbimon/competitors.png";
import Filters from "/images/arbimon/filters.png";
import Gallery from "/images/arbimon/gallery.png";
import Hifi from "/images/arbimon/hifi1.png";
import Interviews from "/images/arbimon/interviews.png";
import Lofi1 from "/images/arbimon/lofi1.png";
import Lofi2 from "/images/arbimon/lofi2.png";
import Personas from "/images/arbimon/personas.png";

const Arbimon: React.FC = () => {
  const reflections: string[][] = [
    [
      "BE INNOVATIVE BUT PRACTICAL",
      "As with any redesign, it is important to consider a broad range of options, from smaller fixes that target pressing issues with the platform to large-scale revamps that overhaul existing paradigms. The best solutions are typically those that fall somewhere in the middle. The challenge is to find that right balance between introducing new and improved ways of interacting with the interface to accomplish tasks without taking current users too far out of the familiarity and trust that they have developed with the original.",
    ],
    [
      "ACCESSIBILITY!",
      "Given the wide range of users who may interact with the interface, we have an obligation to design for greater accessibility and inclusiveness. For instance, while we were excited about restructuring how users search through recordings by using a scrollable timeline, we came to realize that the horizontal scrolling along with the hovering and clicking weren’t very accessible to many users, especially those accessing it on different devices. Moreover, as spectrogram analysis is inherently a very visual task, we made a conscious effort to cater to users who may have visual impairments through the contrast sliders and changeable spectrogram color themes.",
    ],
  ];

  return (
    <div className="text-[1.25vw] leading-[2vw] font-light">
      <Banner
        leftAlign={false}
        projectType="UX/UI REDESIGN"
        title="Arbimon"
        description="Improving workflow efficiency in a bioacoustics visualization platform"
        client="RAINFOREST CONNECTION"
        role="SR. PRODUCT DESIGNER"
        timeline="4 MONTHS"
        backgroundImage="bg-arbimon-banner"
        variant={true}
      />
      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center px-[25vw] py-[8vw] space-y-[6vw]">
        {/* OVERVIEW SECTION */}
        <div className="flex flex-col space-y-[4vw]">
          <Header label="OVERVIEW" title="Listening to Nature's Data" />
          <p className="text-center">
            The Arbimon Visualizer is an in-house software managed by Rainforest
            Connection (RFCx), a non-profit organization established to support
            global efforts in wildlife conservation and preventing
            deforestation.
            <br /> <br /> Arbimon enables scientists and researchers to upload
            and analyze audio recordings for the presence of species in their
            local sites with the help of machine learning algorithms.
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-[0.5vw] w-[22vw]">
              <p className="text-[1.5vw] font-bold">THE PROBLEM</p>
              <p>
                In order to leverage the ML algorithms to aid with species
                detection, users have to manually parse through hundreds of
                recordings to find relevant and info-rich ones to feed in. With
                a lack of meaningful filters and difficulty browsing through
                recording spectrograms, redundancy in the typical user flow
                hinders the usability of the visualizer platform.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.5vw] w-[22vw]">
              <p className="text-[1.5vw] font-bold">THE OBJECTIVE</p>
              <p>
                Correct Arbimon's usability flaws and streamline user workflows
                by reducing redundancy in spectrogram browsing.
              </p>
            </div>
          </div>
        </div>
        {/* DISCOVERY SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header
            label="DISCOVER"
            title="Understanding the Product"
            image={ArbimonBefore}
          />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">SWOT ANALYSIS</p>
            <p>
              To develop a strategy to improve Arbimon, we first looked at
              market competitors to understand where our product stood within
              the bioacoustics software market.
            </p>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <div className="flex flex-row justify-between pt-[1vw]">
              <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                <p className="text-[1.5vw] font-semibold">COMPETITORS</p>
                <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
                  <li>Raven</li>
                  <li>Merlin Bird ID</li>
                  <li>Kaleidoscope</li>
                  <li>EcoObs</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-[0.5vw] w-[24vw]">
                <p className="text-[1.5vw] font-semibold">SWOT INSIGHTS</p>
                <ol className="list-decimal pl-[2vw] space-y-[1vw]">
                  <li>
                    Avoid showing too much at once as to not overwhelm users.
                  </li>
                  <li>
                    Easy-to-use features may appeal to a lot of users but may be
                    too simple for more advanced users and their workflows. Seek
                    a fine balance.
                  </li>
                  <li>
                    Users really value the ability to customize their experience
                    to stay visually engaged with the data. Consider colors and
                    contrast.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="w-[60vw]">
            <img src={Competitors} className="w-full"></img>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">INTERVIEWING CURRENT USERS</p>
            <p>
              To better understand our audience and the current interface, we
              interviewed users about their behavior using the platform.
              Interview demographics include:
            </p>
            <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
              <li>PhD students</li>
              <li>Scientists</li>
              <li>Research fellows</li>
              <li>Environmental activists</li>
            </ul>
          </div>
          <div className="w-[60vw]">
            <img src={Interviews} className="w-full" />
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">GETTING AT THE PAINPOINTS</p>
            <p>
              Insights currently serves three user groups: teachers, school
              administrators, and internal EP staff. Each group requires
              different datasets all readily available on the interface, leading
              to overcrowding and diluting their benefits.
            </p>
          </div>
          <div className="w-[60vw]">
            <img
              src={AffMap}
              alt="Affinity diagram of interview data"
              className="w-full"
            ></img>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">KEY FINDINGS</p>
            <ol className="list-decimal pl-[2vw] space-y-[0.5vw]">
              <li>
                There is a ton of redundancy in the current user flow. Constant
                scrolling and clicks discourages many current users from
                sustained engagement with the platform.
              </li>
              <li>
                Information barriers (e.g. unfamiliar terminology) prevent
                unexperienced users from effectively learning and utilizing the
                platform.
              </li>
              <li>
                Finding the small subset of recordings with valuable data to
                feed into the species-matching algorithm can be rather difficult
                due to the few tools that enable users to parse through the
                hundreds of recordings.
              </li>
              <li>
                Users use Arbimon in different ways. A design or layout that
                works for one may not for another, so there is a clear demand
                for improved customizability.
              </li>
            </ol>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">DEFINING THE USERS</p>
            <p>
              Based on the information collected from interviews and the
              extrapolated behavioral traits, we created 3 user personas
              reflecting the distinct types of users who interacted with the
              Visualizer.{" "}
            </p>
            <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
              <li>
                <p className="font-bold">Sam the Scientist</p>
                <p>
                  An expert in his field of biology who has had substantial
                  experience with bioacoustics software and wants a quicker and
                  more efficient means of interacting with his large sets of
                  recordings.
                </p>
              </li>
              <li>
                <p className="font-bold">Stella the Student Researcher</p>
                <p>
                  Possessing a solid foundation of scientific knowledge but
                  relatively new to the area of bioacoustics, this persona wants
                  a platform interface that they can quickly learn in order to
                  aid with their academic pursuits.
                </p>
              </li>
              <li>
                <p className="font-bold">Benito the Bio-enthusiast</p>
                <p>
                  With minimal background in bioacoustics and biology, this
                  persona wants a simple, intuitive interface that would allow
                  them to better understand their local biodiversity and engage
                  their local community.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-[60vw]">
            <img src={Personas} alt="Persona cards" className="w-full" />
          </div>
        </div>
        {/* IDEATE SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header label="IDEATE" title="Developing the Feature Set" />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">FEATURE IDEATION</p>
            <p>
              I guided my team in composing a preliminary set of features based
              on the insights and pain points uncovered from the discovery
              stage:
            </p>
            <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
              <li>
                <p className="font-bold">Improved filtering</p>
                <p>
                  Apply more extensive filters to aid with finding data-rich
                  recordings.{" "}
                </p>
              </li>
              <li>
                <p className="font-bold">Sliding Side Panel</p>
                <p>
                  Enable users to resize the recording panel for greater
                  flexibility in the number of recordings displayed at any given
                  time.
                </p>
              </li>
              <li>
                <p className="font-bold">Timeline Galleryl</p>
                <p>
                  Streamline the process of parsing through recordings by
                  leveraging scrolling and hovering through a “timeline” of
                  spectrograms.{" "}
                </p>
              </li>
              <li>
                <p className="font-bold">Tooltips</p>
                <p>
                  Reduce interface friction faced by novice users who may not
                  have the technical/scientific backgrounds to effectively use
                  available features
                </p>
              </li>
              <li>
                <p className="font-bold">Spotlight Search</p>
                <p>
                  Minimize the cognitive load experienced by users who are only
                  interested in utilizing a set number of features without being
                  overwhelmed by others{" "}
                </p>
              </li>
            </ul>
            <p>
              These features were developed into LoFis and tested with 3 users
              over Zoom.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row w-[70vw] justify-between">
          <img src={Lofi1} className="w-[34vw]" />
          <img src={Lofi2} className="w-[34vw]" />
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
        {/* DELIIVER SECTION*/}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header
            label="DELIVER"
            title="Finalizing the Solution"
            image={ArbimonFigma}
          />
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] font-bold">FINAL FEATURE SET</p>
            <p>
              The team decided to center our design around 3 key features based
              on testing feedback and desirability discussions with users.{" "}
            </p>
            <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
              <li>Extensive filtering and sorting</li>
              <li>Expandable recording gallery</li>
              <li>Interactive spectrogram window</li>
            </ul>
            <p>
              Our prototype was modified to highlight these core features and
              refined via 2 moderated usability tests.
            </p>
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">FILTERS AND SORTING</p>
            <p>
              Visualizer provides a dropdown of filters according to time,
              species, contributors, and annotations along with the option to
              sort recordings using similar metrics, reducing the amount of time
              needed to extract relevant pieces of data from large batches of
              recordings. Uncovered during testing, users really wanted an
              hour-by-hour filter to isolate species that appear at specific
              times, but the filter variety was use-case dependent.
            </p>
          </div>
          <div className="w-[30vw]">
            <img src={Filters} className="w-full" />
          </div>
          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">EXPANDABLE GALLERY</p>
            <p>
              The collection of spectrogram recordings can be resized to show
              more/fewer items to provide users greater flexibility based on
              their use case. Enlarge to quickly skim through many recordings or
              minimize to focus on recording at hand.
            </p>
          </div>
          <div className="w-[60vw]">
            <img src={Gallery} className="w-full rounded-md" />
          </div>

          <div className="flex flex-col space-y-[0.5vw] w-[50vw]">
            <p className="text-[1.5vw] italic">INTERACTIVE SPECTROGRAM</p>
            <p>
              Selected recordings are equipped with a suite of tools to aid in
              discovery and analysis. Users liked the optional color themes to
              remain visually engaged when working with a lot of data.
              Quick-flip made it much faster to skim through consecutive
              recordings. Frequency and contrast sliders helped users focus
              their eyes on specific areas in the waveforms.
            </p>
          </div>
          <div className="w-[60vw]">
            <img src={Hifi} className="w-full rounded-md" />
          </div>
        </div>

        {/* WRAPUP SECTION */}
        <div className="flex flex-col space-y-[4vw] items-center">
          <Header label="WRAPUP" title="Learnings" />
        </div>
        {/* REFLECTIONS SECTION */}
        <Reflection reflections={reflections} />
      </div>
    </div>
  );
};

export default Arbimon;
