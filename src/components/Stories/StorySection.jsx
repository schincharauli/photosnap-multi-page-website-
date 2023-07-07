import React from "react";
import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import ImageOne from "../../assets/stories/desktop/18-days-voyage.jpg";

function StorySection({
  image,
  title,
  author,
  buttonText,
  arrowImage,
  date,
  mobileImage,
  tabletImage,
  desktopImage,
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
  } else {
    imageSrc = mobileImage;
  }

  return (
    <section>
      <div className="relative bg-gradient-to-b from-transparent via-transparent to-black">
        <img
          className=" w-full h-full absolute object-cover mix-blend-overlay"
          src={imageSrc}
          alt=""
        />
        <div className="pt-56 pl-6 font-DMSans text-white">
          <p className="font-light text-xs pt-0.5">{date}</p>
          <h2 className="font-medium text-l">{title}</h2>
          <p className="font-light text-xs pt-0.5">{author}</p>
          <div className="h-0.5 w-80 rounded-lg mt-3 mb-3 bg-white"></div>
          <div className="flex justify-between items-center pb-8">
            <p className="text-sm pt-3 font-light">{buttonText}</p>
            <button className="pr-8">
              <img src={arrowImage} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
