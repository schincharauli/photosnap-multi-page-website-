import React, { useState } from "react";
import Header from "./Header";
import hero from "../assets/pricing/mobile/hero.jpg";
import Section from "./Section";

function Pricing() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  const elementValue = isToggled
    ? "Element is toggled ON"
    : "Element is toggled OFF";
  return (
    <div>
      <Header />

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
      <div>
        <button
          className={`p-2 rounded-md ${
            isToggled ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={toggleHandler}
        >
          {isToggled ? "ON" : "OFF"}
        </button>
        <p className="mt-2">{elementValue}</p>
      </div>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}

export default Pricing;
