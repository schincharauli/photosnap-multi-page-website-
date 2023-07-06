import React, { useState } from "react";
import Header from "../Header";
import hero from "../../assets/pricing/mobile/hero.jpg";
import Section from "../Home/Section";
import PricingCard from "./PricingCard";
import PricingFeatures from "./PricingFeatures";
import Footer from "../Footer";
import BetaCard from "../BetaCard";
import arrow from "../../assets/arrow.svg";
import bgBeta from "../../assets/shared/mobile/bg-beta.jpg";

function Pricing() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  const priceBasic = isToggled ? "$190.00" : "$19.00";
  const pricePro = isToggled ? "$390.00" : "$39.00";
  const priceBusiness = isToggled ? "$990.00" : "$99.00";

  return (
    <div>
      <div>
        <img src={hero} alt="" />
        <Section
          title="PRICING"
          description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          buttonClass="text-white"
          blackBackground={true}
          textWhite={true}
        />
      </div>
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
        <p className="pl-8 pt-12">THE FEATURES</p>
        <div className=" ml-8 h-0.5 w-72 rounded-lg mt-3 mb-3 bg-black"></div>
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
