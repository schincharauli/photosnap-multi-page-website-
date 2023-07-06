import React from "react";
import CheckedIcon from "../../assets/pricing/desktop/check.svg";

function PricingFeatures({
  title,
  dealBasic,
  dealPro,
  dealBusiness,
  checkBasic,
  checkBusiness,
  checkPro,
  checkIcon,
}) {
  return (
    <div>
      <div className="pl-8 font-DMSans">
        <h3 className="pt-4 text-sm">{title}</h3>
        <div className="flex justify-between mr-20 text-xs mt-4 text-gray-400">
          <div>
            <p className="">{dealBasic}</p>
            <span>
              <img
                className={` mt-2 ${checkBasic ? "checked" : ""}`}
                src={checkBasic ? CheckedIcon : ""}
                alt=""
              />
            </span>
          </div>
          <div>
            <p>{dealPro}</p>
            <span>
              <img
                className={`mt-2 ${checkPro ? "checked" : ""}`}
                src={checkPro ? CheckedIcon : ""}
                alt=""
              />
            </span>
          </div>
          <div>
            <p>{dealBusiness}</p>
            <span>
              <img
                className={`mt-2 ${checkBusiness ? "checked" : ""}`}
                src={checkBusiness ? CheckedIcon : ""}
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      <div className=" ml-8 h-0.5 w-72 rounded-lg mt-6 mb-3 bg-gray-600"></div>
    </div>
  );
}

export default PricingFeatures;
