import React from "react";
import { useState, useEffect } from "react";

function Section({
  blackBackground,
  textWhite,
  image,
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
    <section className="flex ">
      <div
        className={`flex flex-col ${
          reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="">
          <img
            className="w-full md:w-auto md:h-96 lg:w-full"
            src={imageSrc}
            alt="Image"
          />
        </div>

        <div
          className={`pl-6 pr-4 pt-16 md:w-full md:h-92 lg:h-96 section ${
            blackBackground ? "bg-black " : ""
          }`}
        >
          <h1
            className={`font-DMSans font-semibold text-4xl md:pt-12 uppercase section ${
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
