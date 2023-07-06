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
      className={`flex flex-col items-center ml-8 mr-8 mt-8 pt-10 font-DMSans font-lg ${
        blackBackground ? "bg-black " : "bg-gray-100"
      }`}
    >
      <div
        className={` flex flex-col items-center   ${
          textWhite ? "text-white" : ""
        }`}
      >
        <h2 className="pt-8 font-semibold text-lg ">{title}</h2>
        <p className=" p-4 pt-10 text-sm flex text-center text-gray-500">
          {description}
        </p>
        <p className="font-bold text-3xl pt-6">{price}</p>
        <p className=" p-4 text-sm flex text-center text-gray-500">
          {duration}
        </p>
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
