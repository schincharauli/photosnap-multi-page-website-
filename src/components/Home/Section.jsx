import React from "react";
import { useState, useEffect } from "react";

function Section({
  blackBackground,
  textWhite,
  // image,
  title,
  description,
  buttonLabel,
  arrowImage,
  buttonClass,
  reverseLayout,
  desktopImage,
  tabletImage,
  mobileImage,
}) {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setScreenSize("desktop");
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let imageSrc;

  if (screenSize === "desktop") {
    imageSrc = desktopImage;
  } else if (screenSize === "tablet") {
    imageSrc = tabletImage;
  } else {
    imageSrc = mobileImage;
  }
  return (
    <section className="flex md:grid grid-cols-1 md:grid-cols-1 gap-4">
      <div
        className={`flex flex-col ${
          reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-1/3 lg:w-2/3">
          <img
            className="sm:w-full md:w-100% md:h-full lg:w-full xl:h-full"
            src={imageSrc}
            alt="Image"
          />
        </div>

        <div
          className={`pl-6 pr-4 pt-16 md:h-92 xl:h-100% section md:w-2/3 lg:w-1/3 lg:h-full ${
            blackBackground ? "bg-black " : ""
          }`}
        >
          <h1
            className={`font-DMSans font-semibold text-4xl md:pt-12 uppercase section lg:text-6xl ${
              textWhite ? "text-white" : ""
            }`}
          >
            {title}
          </h1>
          <p className="text-gray-400 pt-3">{description}</p>
          <div className="flex items-center pb-14 pt-6 md:pb-20">
            <button className={`pr-3 ${buttonClass}`}>{buttonLabel}</button>
            <span>
              <img src={arrowImage} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
