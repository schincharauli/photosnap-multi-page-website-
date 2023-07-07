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
    <div className="mt-20">
      <div>
        <div className="flex md:grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className={`flex flex-col md:flex-row-reverse `}>
            <img
              className="w-full h-auto md:w-1/3 md:w-100% md:h-full"
              src={hero}
              alt=""
            />

            <section className=" bg-black md:w-2/3">
              <div>
                <div
                  className={`pl-6 pr-4 pt-16 md:h-92 lg:h-full section  md:mt-12 md:ml-18 md:pl-12 `}
                >
                  <h1
                    className={`text-white font-DMSans font-semibold text-4xl md:pt-12 uppercase section `}
                  >
                    FEATURES
                  </h1>
                  <p className="text-white pt-6 mb-24  md:w-2/3">
                    We make sure all of our features are designed to be loved by
                    every aspiring and even professional photograpers who wanted
                    to share their stories.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

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
