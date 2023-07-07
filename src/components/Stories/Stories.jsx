import React from "react";
import Header from "../Header";
import StorySection from "./StorySection";
import imgOne from "../../assets/stories/mobile/moon-of-appalacia.jpg";
import Section from "../Home/Section";
import arrow from "../../assets/arrow.svg";
import storyImage_1 from "../../assets/stories/mobile/mountains.jpg";
import storyImage_2 from "../../assets/stories/mobile/cityscapes.jpg";
import storyImage_3 from "../../assets/stories/mobile/18-days-voyage.jpg";
import storyImage_4 from "../../assets/stories/mobile/architecturals.jpg";
import storyImage_5 from "../../assets/stories/mobile/world-tour.jpg";
import storyImage_6 from "../../assets/stories/mobile/unforeseen-corners.jpg";
import storyImage_7 from "../../assets/stories/mobile/king-on-africa.jpg";
import storyImage_8 from "../../assets/stories/mobile/trip-to-nowhere.jpg";
import storyImage_9 from "../../assets/stories/mobile/rage-of-the-sea.jpg";
import storyImage_10 from "../../assets/stories/mobile/running-free.jpg";
import storyImage_11 from "../../assets/stories/mobile/behind-the-waves.jpg";
import storyImage_12 from "../../assets/stories/mobile/calm-waters.jpg";
import storyImage_13 from "../../assets/stories/mobile/milky-way.jpg";
import storyImage_14 from "../../assets/stories/mobile/dark-forest.jpg";
import storyImage_15 from "../../assets/stories/mobile/somwarpet.jpg";
import storyImage_16 from "../../assets/stories/mobile/land-of-dreams.jpg";

import storyImage_1_desktop from "../../assets/stories/desktop/mountains.jpg";
import storyImage_2_desktop from "../../assets/stories/desktop/cityscapes.jpg";
import storyImage_3_desktop from "../../assets/stories/desktop/18-days-voyage.jpg";
import storyImage_4_desktop from "../../assets/stories/desktop/architecturals.jpg";
import storyImage_5_desktop from "../../assets/stories/desktop/world-tour.jpg";
import storyImage_6_desktop from "../../assets/stories/desktop/unforeseen-corners.jpg";
import storyImage_7_desktop from "../../assets/stories/desktop/king-on-africa.jpg";
import storyImage_8_desktop from "../../assets/stories/desktop/trip-to-nowhere.jpg";
import storyImage_9_desktop from "../../assets/stories/desktop/rage-of-the-sea.jpg";
import storyImage_10_desktop from "../../assets/stories/desktop/running-free.jpg";
import storyImage_11_desktop from "../../assets/stories/desktop/behind-the-waves.jpg";
import storyImage_12_desktop from "../../assets/stories/desktop/calm-waters.jpg";
import storyImage_13_desktop from "../../assets/stories/desktop/milky-way.jpg";
import storyImage_14_desktop from "../../assets/stories/desktop/dark-forest.jpg";
import storyImage_15_desktop from "../../assets/stories/desktop/somwarpet.jpg";
import storyImage_16_desktop from "../../assets/stories/desktop/land-of-dreams.jpg";
import imgOneTablet from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import imgOneDesktop from "../../assets/stories/desktop/moon-of-appalacia.jpg";

import Footer from "../Footer";

function Stories() {
  return (
    <div className="mt-20 md:mt-16">
      <div className="md:relative">
        <img
          className="md:w-full md:h-full md:absolute object-cover mix-blend-overlay  "
          src={imgOneTablet}
          alt=""
        />
        <div className="bg-black md:bg-transparent ">
          <p className=" pl-6 pt-12 text-white text-xs md:hidden">
            LAST MONTH’S FEATURED STORY
          </p>
          <section className="flex md:grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className={`flex flex-col `}>
              <div
                className={`pl-6 pr-4 pt-16 md:h-92 lg:h-96 section md:w-2/3 `}
              >
                <h1
                  className={`text-white font-DMSans font-semibold text-4xl md:pt-12 uppercase section `}
                >
                  HAZY FULL MOON OF APPALACHIA
                </h1>
                <p className="text-gray-400 pt-3">
                  The dissected plateau area, while not actually made up of
                  geological mountains, is popularly called 'mountains,'
                  especially in eastern Kentucky and West Virginia, and while
                  the ridges are not high, the terrain is extremely rugged."
                </p>
                <p></p>
                <div className="flex items-center pb-14 pt-6 md:pb-20">
                  <button className={`pr-3 text-white `}>
                    VIEW THE STORIES
                  </button>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <StorySection
          mobileImage={storyImage_1}
          desktopImage={storyImage_1_desktop}
          date="April 16th 2020"
          title="The Mountains"
          author="by John Appleseed"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_2}
          desktopImage={storyImage_2_desktop}
          date="April 14th 2020"
          title="Sunset Cityscapes"
          author="by Benjamin Cruz"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_3}
          desktopImage={storyImage_3_desktop}
          date="April 11th 2020"
          title="18 Days Voyage"
          author="by Alexei Borodin"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_4}
          desktopImage={storyImage_4_desktop}
          date="April 9th 2020"
          title="Architecturals   "
          author="by Samantha Brooke"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_5}
          desktopImage={storyImage_5_desktop}
          date="April 7th 2020"
          title="World Tour 2019   "
          author="by Timothy Wagner"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_6}
          desktopImage={storyImage_6_desktop}
          date="April 3rd 2020"
          title="Unforeseen Corners "
          author="by William Malcolm"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_7}
          desktopImage={storyImage_7_desktop}
          date="March 29th 2020"
          title="King on Africa: Part II "
          author="by Tim Hillenburg"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_8}
          desktopImage={storyImage_8_desktop}
          date="March 21st 2020"
          title="The Trip to Nowhere "
          author="by Felicia Rourke"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_9}
          desktopImage={storyImage_9_desktop}
          date="March 19th 2020"
          title="Rage of The Sea "
          author="by Mohammed Abdul"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_10}
          desktopImage={storyImage_10_desktop}
          date="March 16th 2020"
          title="Running Free "
          author="by Michelle"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_11}
          desktopImage={storyImage_11_desktop}
          date="March 11th 2020"
          title="Behind the Waves "
          author="by Lamarr Wilson"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_12}
          desktopImage={storyImage_12_desktop}
          date="March 9th 2020"
          title="Calm Waters "
          author="by Samantha Brooke"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_13}
          desktopImage={storyImage_13_desktop}
          date="March 5th 2020"
          title="The Milky Way"
          author="by Benjamin Cruz"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_14}
          desktopImage={storyImage_14_desktop}
          date="March 4th 2020"
          title="Night at The Dark Forest"
          author="by  Mohammed Abdul"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_15}
          desktopImage={storyImage_15_desktop}
          date="March 1th 2020"
          title="Somwarpet’s Beauty"
          author="by Michelle"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          mobileImage={storyImage_16}
          desktopImage={storyImage_16_desktop}
          date="March 1th 2020"
          title="Somwarpet’s Beauty"
          author="by Michelle"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Stories;
