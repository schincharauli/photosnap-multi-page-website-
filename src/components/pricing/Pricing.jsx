import React, { useState } from "react";
import Header from "../Header";
import hero from "../../assets/pricing/mobile/hero.jpg";
import heroTablet from "../../assets/pricing/tablet/hero.jpg";
import heroDesktop from "../../assets/pricing/desktop/hero.jpg";

import Section from "../Home/Section";
import PricingCard from "./PricingCard";
import PricingFeatures from "./PricingFeatures";
import Footer from "../Footer";
import BetaCard from "../BetaCard";
import arrow from "../../assets/arrow.svg";
import bgBeta from "../../assets/shared/mobile/bg-beta.jpg";
import { useMedia } from "react-use";

function Pricing() {
  const [isToggled, setIsToggled] = useState(false);
  const isTablet = useMedia("(min-width: 768px)");
  const isDesktop = useMedia("(min-width: 1024px)");

  let imageSource = hero;

  if (isTablet) {
    imageSource = heroTablet;
  } else if (isDesktop) {
    imageSource = heroDesktop;
  } else {
    imageSource - hero;
  }

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  const priceBasic = isToggled ? "$190.00" : "$19.00";
  const pricePro = isToggled ? "$390.00" : "$39.00";
  const priceBusiness = isToggled ? "$990.00" : "$99.00";

  return (
    <div className="mt-20">
      <div className="flex md:grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className={`flex flex-col md:flex-row-reverse `}>
          <img
            className={`w-full h-full md:w-1/3 md:w-100% md:h-100%`}
            src={imageSource}
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

      {/* <img src={hero} alt="" /> */}
      {/* <Section
          title="PRICING"
          description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          buttonClass="text-white"
          blackBackground={true}
          textWhite={true}
        /> */}

      <div className="flex justify-center items-center pt-8 ">
        <p className={`p-4 ${isToggled ? "text-gray-400" : ""}`}>Monthly</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className={`sr-only peer`}
            onClick={toggleHandler}
          />
          <div
            className="w-11 h-6
         bg-gray-200
          peer-focus:outline-none 
          peer-focus:ring-4 
            rounded-full peer 
             peer-checked:after:translate-x-full
              after:content-['']
               after:absolute after:top-[2px] 
               after:left-[2px]
                after:bg-black
                  after:border
                   after:rounded-full 
                   after:h-5 after:w-5 
                   after:transition-all
                     peer-checked:bg-black"
          ></div>
        </label>
        <p className={`p-4 ${!isToggled ? "text-gray-400" : ""}`}>Yearly</p>
      </div>

      <PricingCard
        title="Basic"
        description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
        price={priceBasic}
        duration="per month"
        submit="PICK PLAN"
        blackBtnBackground={true}
        btnTextWhite={true}
      />
      <PricingCard
        title="Pro"
        description="More advanced features available. Recommended for photography veterans and professionals."
        price={pricePro}
        duration="per month"
        submit="PICK PLAN"
        blackBackground={true}
        textWhite={true}
      />
      <PricingCard
        title="Business"
        description="Additional features available such as more detailed metrics. Recommended for business owners."
        price={priceBusiness}
        duration="per month"
        submit="PICK PLAN"
        blackBtnBackground={true}
        btnTextWhite={true}
      />
      <section>
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4  md:items-center">
          <div>
            <p className="pl-8 pt-12">THE FEATURES</p>
          </div>
          <div className="pt-12 hidden md:block lg:block md:flex lg:flex md:justify-between lg:justify-between md:pr-12 lg:pr-12">
            <p>BASIC</p>
            <p>PRO</p>
            <p>BUSINESS</p>
          </div>
        </div>
        <div className="ml-8 h-0.5 w-72 rounded-lg mt-3 mb-3 bg-black md:w-full"></div>
      </section>

      <PricingFeatures
        title="UNLIMITED STORY POSTING"
        dealBasic="BASIC"
        checkBasic={true}
        dealPro="PRO"
        checkPro={true}
        dealBusiness="BUSINESS"
        checkBusiness={true}
      />
      <PricingFeatures
        title="UNLIMITED PHOTO UPLOAD"
        dealBasic="BASIC"
        checkBasic={true}
        dealPro="PRO"
        checkPro={true}
        dealBusiness="BUSINESS"
        checkBusiness={true}
      />
      <PricingFeatures
        title="EMBEDDING CUSTOM CONTENT"
        dealBasic="BASIC"
        checkBasic={false}
        dealPro="PRO"
        checkPro={true}
        dealBusiness="BUSINESS"
        checkBusiness={true}
      />
      <PricingFeatures
        title="CUSTOMIZE METADATA"
        dealBasic="BASIC"
        checkBasic={false}
        dealPro="PRO"
        checkPro={true}
        dealBusiness="BUSINESS"
        checkBusiness={true}
      />
      <PricingFeatures
        title="ADVANCED METRICS"
        dealBasic="BASIC"
        checkBasic={false}
        dealPro="PRO"
        checkPro={false}
        dealBusiness="BUSINESS"
        checkBusiness={true}
      />
      <PricingFeatures
        title="PHOTO DOWNLOADS"
        dealBasic="BASIC"
        checkBasic={false}
        dealPro="PRO"
        checkPro={false}
        dealBusiness="BUSINESS"
        checkBusiness={true}
      />
      <PricingFeatures
        title="SEARCH ENGINE INDEXING"
        dealBasic="BASIC"
        checkBasic={false}
        dealPro="PRO"
        checkPro={false}
        dealBusiness="BUSINESS"
        checkBusiness={true}
      />
      <PricingFeatures
        title="CUSTOM ANALYTICS"
        dealBasic="BASIC"
        checkBasic={false}
        dealPro="PRO"
        checkPro={false}
        dealBusiness="BUSINESS"
        checkBusiness={true}
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
  );
}

export default Pricing;
