import React from "react";

function PrincingCard({
  title,
  description,
  price,
  duration,
  submit,
  blackBackground,
  textWhite,
  blackBtnBackground,
  btnTextWhite,
}) {
  return (
    <div
      className={`flex flex-col items-center md:items-start ml-8 mr-8 mt-8 pt-10 font-DMSans font-lg ${
        blackBackground ? "bg-black " : "bg-gray-100"
      }`}
    >
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`flex flex-col items-center md:flex  md:text-left ${
            textWhite ? "text-white" : ""
          }`}
        >
          <h2 className="pt-8 font-semibold text-lg ">{title}</h2>
          <p className=" p-4 pt-10 text-sm flex text-center text-gray-500">
            {description}
          </p>
        </div>
        <div className={` text-center  ${textWhite ? "text-white" : ""}`}>
          <p className="font-bold text-3xl pt-6 text-center">{price}</p>
          <p className="p-4 text-sm text-center text-gray-500">{duration}</p>
        </div>
      </div>

      <button
        className={`w-64 h-12 ml-8 mr-8 mb-8 mt-12  ${
          blackBtnBackground ? "bg-black " : "bg-gray-100"
        } ${btnTextWhite ? "text-white" : ""}`}
      >
        {submit}
      </button>
    </div>
  );
}

export default PrincingCard;
