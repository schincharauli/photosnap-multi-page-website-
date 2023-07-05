import React from "react";

function FeaturesSection({ icon, title, description }) {
  return (
    <section>
      <div className="flex items-center flex-col font-DMSans mt-10 mb-10  ">
        <img className="flex items-center" src={icon} />
        <h2 className="font-medium text-lg pt-6">{title}</h2>
        <p className="pl-12 pr-12 pt-2 text-sm flex text-center text-gray-00">
          {description}
        </p>
      </div>
    </section>
  );
}

export default FeaturesSection;
