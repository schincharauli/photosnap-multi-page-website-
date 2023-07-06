import React from "react";
import Section from "./Section";
import StorySection from "../Stories/StorySection";
import FeaturesSection from "../Features/FeaturesSection";

import section1_pic_one from "../../assets/home/mobile/create-and-share.jpg";
import section1_pic_two from "../../assets/home/mobile/beautiful-stories.jpg";
import section1_pic_three from "../../assets/home/mobile/designed-for-everyone.jpg";
import arrow from "../../assets/arrow.svg";
import arrowBlack from "../../assets/arrowBlack.svg";
import storyImage_1 from "../../assets/stories/mobile/mountains.jpg";
import storyImage_2 from "../../assets/stories/mobile/cityscapes.jpg";
import storyImage_3 from "../../assets/stories/mobile/18-days-voyage.jpg";
import storyImage_4 from "../../assets/stories/mobile/architecturals.jpg";
import featureIcon_one from "../../assets/features/desktop/responsive.svg";
import featureIcon_two from "../../assets/features/desktop/no-limit.svg";
import featureIcon_three from "../../assets/features/desktop/embed.svg";

import storyImage_1_tablet from "../../assets/home/tablet/create-and-share.jpg";
import storyImage_2_tablet from "../../assets/home/tablet/beautiful-stories.jpg";
import storyImage_3_tablet from "../../assets/home/tablet/designed-for-everyone.jpg";

import storyImage1_desktop from "../../assets/home/desktop/create-and-share.jpg";
import storyImage_2_desktop from "../../assets/home/desktop/beautiful-stories.jpg";
import storyImage_3_desktop from "../../assets/home/desktop/designed-for-everyone.jpg";

import Header from "../Header";
import Footer from "../Footer";

function Home() {
  return (
    <div className="mt-12">
      <div>
        <Section
          mobileImage={section1_pic_one}
          tabletImage={storyImage_1_tablet}
          desktopImage={storyImage1_desktop}
          title="Create and share your photo stories."
          description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          buttonLabel="GET AN INVITE"
          arrowImage={arrow}
          buttonClass="text-white"
          blackBackground={true}
          textWhite={true}
          reverseLayout={true}
        />
        <Section
          mobileImage={section1_pic_two}
          tabletImage={storyImage_2_tablet}
          desktopImage={storyImage_2_desktop}
          // image={section1_pic_two}
          title="BEAUTIFUL STORIES EVERY TIME"
          description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          buttonLabel="VIEW THE STORIES"
          arrowImage={arrowBlack}
          reverseLayout={false}
        />
        <Section
          mobileImage={section1_pic_three}
          tabletImage={storyImage_3_tablet}
          desktopImage={storyImage_3_desktop}
          // image={section1_pic_three}
          title="DESIGNED FOR EVERYONE"
          description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses, you name it."
          buttonLabel="VIEW THE STORIES"
          arrowImage={arrowBlack}
          reverseLayout={true}
        />
      </div>

      <div className="md:flex md:flex-row md:flex-wrap md:w-full md:gap-3 md:justify-between md:pl-3 md:pr-3">
        <StorySection
          image={storyImage_1}
          title="The Mountains"
          author="by John Appleseed"
          buttonText="READ STORY"
          arrowImage={arrow}
        />

        <StorySection
          image={storyImage_2}
          title="Sunset Cityscapes"
          author="by Benjamin Cruz"
          buttonText="READ STORY"
          arrowImage={arrow}
        />

        <StorySection
          image={storyImage_3}
          title="18 Days Voyage"
          author="by Alexei Borodin"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
        <StorySection
          image={storyImage_4}
          title="Architecturals   "
          author="by Samantha Brooke"
          buttonText="READ STORY"
          arrowImage={arrow}
        />
      </div>
      <FeaturesSection
        icon={featureIcon_one}
        title="100% Responsive"
        description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
      />
      <FeaturesSection
        icon={featureIcon_two}
        title="No Photo Upload Limit"
        description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
      />
      <FeaturesSection
        icon={featureIcon_three}
        title="Available to Embed"
        description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
      />
      <Footer />
    </div>
  );
}

export default Home;
