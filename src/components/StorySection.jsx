import React from "react";

function StorySection({ image, title, author, buttonText, arrowImage }) {
  return (
    <section>
      <div className="relative bg-gradient-to-b from-transparent via-transparent to-black">
        <img
          className=" w-full h-full absolute object-cover mix-blend-overlay"
          src={image}
          alt=""
        />
        <div className="pt-56 pl-6 font-DMSans text-white">
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
