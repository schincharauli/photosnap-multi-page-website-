import React from "react";

function BetaCard({ image, title, buttonText, arrowImage }) {
  return (
    <section>
      <div className="relative bg-gradient-to-b from-transparent via-transparent to-black">
        <img
          className=" w-full h-full absolute object-cover mix-blend-overlay"
          src={image}
          alt=""
        />
        <div className="pt-10 pl-6 font-DMSans text-white">
          <h2 className="font-DMSans font-semibold text-4xl uppercase">
            {title}
          </h2>
          <div className="flex items-center pt-6 pl-2">
            <p className="text-sm font-light">{buttonText}</p>
            <button className="pl-4">
              <img src={arrowImage} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BetaCard;
