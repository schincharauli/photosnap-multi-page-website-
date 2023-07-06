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
import Footer from "../Footer";

function Stories() {
  return (
    <div>
      <Header />
      <div className=" bg-black">
        <img src={imgOne} alt="" />
        <p className="pl-6 pt-12 text-white text-xs">
          LAST MONTH’S FEATURED STORY
        </p>

        <Section
          title="BEAUTIFUL STORIES EVERY TIME"
          description="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
          buttonLabel="VIEW THE STORIES"
          arrowImage={arrow}
          buttonClass="text-white"
          textWhite={true}
        />
      </div>
      <StorySection
        image={storyImage_1}
        date="April 16th 2020"
        title="The Mountains"
        author="by John Appleseed"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_2}
        date="April 14th 2020"
        title="Sunset Cityscapes"
        author="by Benjamin Cruz"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_3}
        date="April 11th 2020"
        title="18 Days Voyage"
        author="by Alexei Borodin"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_4}
        date="April 9th 2020"
        title="Architecturals   "
        author="by Samantha Brooke"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_5}
        date="April 7th 2020"
        title="World Tour 2019   "
        author="by Timothy Wagner"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_6}
        date="April 3rd 2020"
        title="Unforeseen Corners "
        author="by William Malcolm"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_7}
        date="March 29th 2020"
        title="King on Africa: Part II "
        author="by Tim Hillenburg"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_8}
        date="March 21st 2020"
        title="The Trip to Nowhere "
        author="by Felicia Rourke"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_9}
        date="March 19th 2020"
        title="Rage of The Sea "
        author="by Mohammed Abdul"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_10}
        date="March 16th 2020"
        title="Running Free "
        author="by Michelle"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_11}
        date="March 11th 2020"
        title="Behind the Waves "
        author="by Lamarr Wilson"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_12}
        date="March 9th 2020"
        title="Calm Waters "
        author="by Samantha Brooke"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_13}
        date="March 5th 2020"
        title="The Milky Way"
        author="by Benjamin Cruz"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_14}
        date="March 4th 2020"
        title="Night at The Dark Forest"
        author="by  Mohammed Abdul"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_15}
        date="March 1th 2020"
        title="Somwarpet’s Beauty"
        author="by Michelle"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <StorySection
        image={storyImage_16}
        date="March 1th 2020"
        title="Somwarpet’s Beauty"
        author="by Michelle"
        buttonText="READ STORY"
        arrowImage={arrow}
      />
      <Footer></Footer>
    </div>
  );
}

export default Stories;
