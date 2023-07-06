import React from "react";

function Section({
  blackBackground,
  textWhite,
  image,
  title,
  description,
  buttonLabel,
  arrowImage,
  buttonClass,
}) {
  return (
    <section>
      <img src={image} alt="" />
      <div
        className={`pl-6 pr-4 pt-16 section ${
          blackBackground ? "bg-black " : ""
        }`}
      >
        <h1
          className={`font-DMSans font-semibold text-4xl uppercase  section ${
            textWhite ? "text-white" : ""
          }`}
        >
          {title}
        </h1>
        <p className="text-gray-400 pt-3">{description}</p>
        <div className="flex items-center pb-14 pt-6">
          <button className={` pr-3 ${buttonClass}`}>{buttonLabel}</button>
          <span>
            <img src={arrowImage} />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Section;
