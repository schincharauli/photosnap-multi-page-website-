import React from "react";
import Header from "../Header";
import hero from "../../assets/features/mobile/hero.jpg";
import Section from "../Home/Section";
import Footer from "../Footer";
import FeaturesSection from "./FeaturesSection";

import bgBeta from "../../assets/shared/mobile/bg-beta.jpg";
import arrow from "../../assets/arrow.svg";

import featureIcon_one from "../../assets/features/desktop/responsive.svg";

import featureIcon_two from "../../assets/features/desktop/no-limit.svg";
import featureIcon_three from "../../assets/features/desktop/embed.svg";
import featureIcon_four from "../../assets/features/desktop/custom-domain.svg";
import featureIcon_five from "../../assets/features/desktop/boost-exposure.svg";
import featureIcon_six from "../../assets/features/desktop/drag-drop.svg";
import BetaCard from "../BetaCard";

function Features() {
  return (
    <div>
      <div>
        <img src={hero} alt="" />
        <Section
          title="FEATURES"
          description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          buttonClass="text-white"
          blackBackground={true}
          textWhite={true}
        />
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
        <FeaturesSection
          icon={featureIcon_four}
          title="Custom Domain"
          description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! "
        />
        <FeaturesSection
          icon={featureIcon_five}
          title="Boost Your Exposure"
          description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list. "
        />
        <FeaturesSection
          icon={featureIcon_six}
          title="Drag & Drop Image"
          description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories. "
        />
        <BetaCard
          image={bgBeta}
          title="We’re in beta.
        Get your invite today!"
          buttonText="GET AN INVITE"
          arrowImage={arrow}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Features;
