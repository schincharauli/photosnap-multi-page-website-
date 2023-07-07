import React from "react";

function BetaCard({ image, title, buttonText, arrowImage }) {
  return (
    <section>
      <div className="mt-12 relative bg-gradient-to-b from-transparent via-transparent to-black">
        <img
          className=" w-full h-full absolute object-cover mix-blend-overlay"
          src={image}
          alt=""
        />
        <div className="pt-10 pl-6 font-DMSans text-white md:flex grid-cols-1 md:grid-cols-2 gap-4 md:ml-8">
          <div className="md:w-1/2">
            <h2 className="font-DMSans font-semibold text-4xl uppercase">
              {title}
            </h2>
          </div>

          <div className="flex items-center pt-6 pl-2 md:w-1/2 md:justify-center">
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
